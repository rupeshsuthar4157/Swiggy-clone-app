/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import AuthAndUserHttp from "@/businessLogic/common/http/auth/auth.and.user.http";
import { cookies } from "next/headers";

export async function logout() {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;
    const refreshToken = (await cookies()).get("refreshToken")?.value;

    if (accessToken && refreshToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        cookie: `refreshToken=${refreshToken}`,
      };

      await AuthAndUserHttp.logout(headers);
    }

    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
    (await cookies()).delete("accessTokenDeprecated");

    return true;
  } catch (error: any) {
    console.error(" Logout error =>", error?.response?.data || error);

    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
    (await cookies()).delete("accessTokenDeprecated");

    return false;
  }
}
