/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import AuthAndUserHttp from "@/businessLogic/common/http/auth/auth.and.user.http";
import cookie from "cookie";
import { cookies } from "next/headers";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

interface IAPIError {
  response?: {
    status?: number;
    data?: any;
  };
}

export async function login(
  payload: { email: string; password: string },
  headers?: any
) {
  const cookieStore = cookies();

  const result = loginSchema.safeParse(payload);
  if (!result.success) {
    return {
      type: "error",
      message: result.error.issues[0].message,
    };
  }

  const { email, password } = result.data;

  try {
    const res = await AuthAndUserHttp.loginWithEmail({ email, password });

    if (res.status !== 200) {
      return { type: "error", message: "Login failed" };
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
    const deprecatedTokenCookie = setCookieHeader.find((c: string) =>
      c.startsWith("accessTokenDeprecated=")
    );

    if (!accessTokenCookie || !refreshTokenCookie) {
      return { type: "error", message: "Missing tokens" };
    }

    const parsedAccessToken = cookie.parse(accessTokenCookie);
    const parsedRefreshToken = cookie.parse(refreshTokenCookie);
    const parsedDeprecated = deprecatedTokenCookie
      ? cookie.parse(deprecatedTokenCookie)
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

    return { type: "success", message: "Login successful" };
  } catch (error: any) {
    const err = error as IAPIError;

    if (err.response?.status === 404) {
      return { type: "error", message: "Not Found" };
    } else if (err.response?.status === 429) {
      return {
        type: "error",
        message: err.response.data || "Too many requests",
      };
    } else {
      return {
        type: "error",
        message: err?.response?.data?.errors?.[0]?.msg || "Login failed",
      };
    }
  }
}
