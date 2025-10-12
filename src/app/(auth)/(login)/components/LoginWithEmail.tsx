/**
 * @author Rupesh Suthar
 * @LastModified 
 *
 */

"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/businessLogic/web/auth/login/action/login";
import { useRouter } from "next/navigation";
import { route } from "@/businessLogic/web/routes/route";

interface LoginFormProps {
  setIsCreateAccount: (value: boolean) => void;
}

interface ILoginWithEmailPayload {
  email: string;
  password: string;
}

export default function LoginForm({ setIsCreateAccount }: LoginFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: ILoginWithEmailPayload) =>
      login({
        email: payload.email,
        password: payload.password,
      }),
    onSuccess: (data) => {
      if (data?.type === "success") {
        toast.success("Login successfully");
        setTimeout(() => {
          router.push(route.home);
        }, 1000);
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter a valid email and password");
      return;
    }

    setLoading(true);
    loginMutation.mutate(
      { email, password },
      {
        onSettled: () => setLoading(false),
      }
    );
  };

  return (
    <>
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <Image
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Login Banner"
          height={100}
          width={200}
          className="w-29 object-contain"
        />
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <h2 className="text-xl md:text-3xl text-black font-bold mt-3">Login</h2>

      <p
        className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
        onClick={() => setIsCreateAccount(true)}
      >
        <span className="text-black">or</span> create an account
      </p>

      <div className="w-12 h-0.5 bg-black mb-4"></div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full mt-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="peer w-86 border border-gray-300 bg-transparent px-4 py-10 pb-2 text-base text-gray-800 placeholder-transparent  transition-all duration-200 ease-in-out focus:outline-none autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_white]"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
      peer-placeholder-shown:top-1/2
      peer-focus:top-2 peer-focus:text-sm 
      peer-valid:top-2 peer-valid:text-sm "
          >
            Email Address
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="peer w-86 border border-[#CCCDCE] px-4 py-10 pb-2 text-base text-gray-800 focus:outline-none "
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    peer-focus:top-2 peer-focus:text-sm 
    peer-valid:top-2 peer-valid:text-sm "
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-86 bg-[#FF5200] text-white font-bold py-3 "
          disabled={loading}
        >
          {loading ? "Please wait..." : "Login"}
        </button>
        <p className="mt-3 text-xs text-[#02060C] leading-snug font-semibold">
          <span className="text-[#4D5054]">
            By clicking on Login, I accept the
          </span>{" "}
          <span className=" text-black cursor-pointer">Terms & Conditions</span>{" "}
          & <br />
          <span className="text-black cursor-pointer">Privacy Policy</span>
        </p>
      </form>
    </>
  );
}
