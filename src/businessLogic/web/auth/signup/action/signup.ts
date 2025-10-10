/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import AuthAndUserHttp from "@/businessLogic/common/http/auth/auth.and.user.http";
import cookie from "cookie";
import { cookies } from "next/headers";
import { z } from "zod";

const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

interface IAPIError {
  response?: {
    status?: number;
    data?: any;
  };
}

export async function Signup(payload: ISignUpPayload, headers?: any) {
  const cookieStore = cookies();

  const result = SignUpSchema.safeParse(payload);
  if (!result.success) {
    return {
      type: "error",
      message: result.error.issues[0].message,
    };
  }

  const { name, email, password } = result.data;

  try {
    const res = await AuthAndUserHttp.signup({ name, email, password });

    if (res.status !== 201) {
      return { type: "error", message: "Register failed" };
    }

    const setCookieHeader = res.headers["set-cookie"];
    if (!setCookieHeader) {
      return { type: "error", message: "No cookies returned from server" };
    }

    const accessTokenCookie = setCookieHeader.find((c: string) =>
      c.startsWith("accessToken=")
    );
    const refreshTokenCookie = setCookieHeader.find((c: string) =>
      c.startsWith("refreshToken=")
    );
    const deprecatedCookie = setCookieHeader.find((c: string) =>
      c.startsWith("accessTokenDeprecated=")
    );

    if (!accessTokenCookie || !refreshTokenCookie) {
      return { type: "error", message: "Missing tokens" };
    }

    const parsedAccessToken = cookie.parse(accessTokenCookie);
    const parsedRefreshToken = cookie.parse(refreshTokenCookie);
    const parsedDeprecated = deprecatedCookie
      ? cookie.parse(deprecatedCookie)
      : null;

    (await cookieStore).set(
      "accessToken",
      parsedAccessToken.accessToken ?? "",
      {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        expires: parsedAccessToken.Expires
          ? new Date(parsedAccessToken.Expires)
          : undefined,
      }
    );

    (await cookieStore).set(
      "refreshToken",
      parsedRefreshToken.refreshToken ?? "",
      {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        expires: parsedRefreshToken.Expires
          ? new Date(parsedRefreshToken.Expires)
          : undefined,
      }
    );

    if (parsedDeprecated?.accessTokenDeprecated) {
      (await cookieStore).set(
        "accessTokenDeprecated",
        parsedDeprecated.accessTokenDeprecated ?? "",
        {
          httpOnly: true,
          path: "/",
          sameSite: "lax",
          expires: parsedDeprecated.Expires
            ? new Date(parsedDeprecated.Expires)
            : undefined,
        }
      );
    }

    return { type: "success", message: "Register successful" };
  } catch (error: any) {
    const err = error as IAPIError;
    return {
      type: "error",
      message:
        err?.response?.data?.errors?.[0]?.msg ||
        "Something went wrong! Try again",
    };
  }
}
