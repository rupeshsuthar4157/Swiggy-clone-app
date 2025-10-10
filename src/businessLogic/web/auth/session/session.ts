/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import AuthAndUserHttp from "@/businessLogic/common/http/auth/auth.and.user.http";
import { cookies } from "next/headers";

export const getSession = async (): Promise<IUserSession | null> => {
  return await whoami();
};

const whoami = async () => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const res = await AuthAndUserHttp.whoami(headers);

    if (res.data) {
      return {
        user: res.data,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};
