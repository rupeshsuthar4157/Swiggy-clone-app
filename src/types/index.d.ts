declare interface IDeviceData {
  fingerprint: string;
  browser: string;
  os: string;
  ip: string;
}

declare interface IMeta {
  pagination: {
    page: number;
    limit: number;
    length: number;
    total: number;
    hasNextPage: boolean;
    nextPage: string | null;
  };
}

declare interface IAPIError {
  response?: {
    status?: number;
    data?: {
      errors?: [
        {
          type: string;
          msg: string;
          path: string;
          location: string;
        }
      ];
      message?: string;
    };
  };
}

declare interface ISession {
  user: {
    name: string;
    email: string;
    image: string | null;
    info: {
      id: string;
      phone: number;
      email: string;
      role: "user";
      avatar: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: string;
  error: string | null;
  fingerprint: string | null;
  browser: string | null;
  ip: string | null;
  os: string | null;
}
