export const route = {
  auth: {
    login: (params?: string) => `/login${params || ""}`,
    signup: "signup",
    forgotPassword: "forgot-password",
    verifyOtp: "verify",
  },
  home: "/",
};
