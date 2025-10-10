import { env } from "next-runtime-env";
import axios from "axios";

const apiClient = axios.create({
  baseURL: env("NEXT_PUBLIC_BASE_URL"),
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default apiClient;
