declare interface ILoginWithPhonePayload {
  phone: string;
  re_captcha_token?: string;
}

declare interface ILoginWithEmailPayload {
  email: string;
  password: string;
}

declare interface IEmailLoginResponse {
  status: number;
  data: {
    message: string;
    data: {
      user: {
        id: string;
        name: string;
        email: string;
        role: string;
        avatar: string | null;
        createdAt: string;
        updatedAt: string;
      };
      accessToken: string;
      refreshToken: string;
      accessTokenExpiry: string;
    };
  };
}

declare interface IForgotPasswordPayload {
  email: string;
}

declare interface IForgotPasswordResponse {
  status: number;
}

declare interface IResetPasswordPayload {
  id: string;
  token: string;
  password: string;
}

declare interface IResetPasswordResponse {
  status: number;
}

declare interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

declare interface IWhoamiData {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string | null;
  sessions: IWhoamiSession[];
}

declare interface IWhoamiResponse {
  data: IWhoamiData;
}

declare interface IUserSession {
  user: IWhoamiData | null;
}

declare interface IVerifyOtpPayload {
  hash: string;
  otp: number | string;
  phone: number | string;
}
