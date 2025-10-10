/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import AuthAndUserHttp from "@/businessLogic/common/http/auth/auth.and.user.http";
import { cookies } from "next/headers";

export async function whoami() {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;
    const response = await AuthAndUserHttp.whoami({
      Authorization: `Bearer ${accessToken}`,
    });
    return response.data as IWhoamiData;
  } catch (error) {
    return null;
  }
}
