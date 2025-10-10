/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHeaders } from "axios";
import apiClient from "../client";

const loginWithPhone = (data: ILoginWithPhonePayload, headers?: AxiosHeaders) =>
  apiClient.post("/auth/login?provider=phone", data, { headers });

const loginWithEmail = async (payload: ILoginWithEmailPayload, headers?: any) =>
  apiClient.post(`/auth/login?provider=email`, payload, { headers });

const verifyOtpApiEndpoint = (data: IVerifyOtpPayload, headers: any) =>
  apiClient.post("/auth/verify-otp", data, { headers });

const signup = (payload: ISignUpPayload) =>
  apiClient.post("/auth/register", payload);

const forgotPassword = (data: IForgotPasswordPayload) =>
  apiClient.post("/auth/forgot-password", data);

const resetPasswordConfirm = (payload: IResetPasswordPayload) =>
  apiClient.post(`/auth/reset-password/${payload.id}`, {
    token: payload.token,
    password: payload.password,
  });

const whoami = (headers?: any): Promise<IWhoamiResponse> =>
  apiClient.get("/auth/whoami", { headers });

const logout = (headers: any) =>
  apiClient
    .post(
      "/auth/logout",
      {},
      {
        headers,
      }
    )
    .then((res: { data: any }) => res.data);

// const removeSession = (data: IRemoveSessionEndpoint, headers: any) =>
//   apiClient
//     .patch("/auth/self/remove-session", data, { headers })
//     .then((res) => res.data);

const AuthAndUserHttp = {
  loginWithPhone,
  loginWithEmail,
  forgotPassword,
  resetPasswordConfirm,
  verifyOtpApiEndpoint,
  signup,
  whoami,
  logout,
  //   removeSession,
};

export default AuthAndUserHttp;
