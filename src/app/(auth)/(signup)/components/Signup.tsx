/**
 * @author Rupesh Suthar
 * @LastModified Thu Oct 10-10-2025
 */

"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { Signup } from "@/businessLogic/web/auth/signup/action/signup";
import { useRouter } from "next/navigation";
import { route } from "@/businessLogic/web/routes/route";

interface SignupFormProps {
  setIsCreateAccount: (value: boolean) => void;
}

interface ISignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default function SignupForm({ setIsCreateAccount }: SignupFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signupMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: ISignupPayload) => Signup(payload),
    onSuccess: (data) => {
      if (data?.type === "success") {
        toast.success("Registered successfully");
        setTimeout(() => router.push(route.home), 1000);
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Please enter your name");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email");
    if (!phone.trim() || !/^[0-9]{10}$/.test(phone))
      return toast.error("Please enter a valid 10-digit phone number");
    if (!password.trim() || password.length < 6)
      return toast.error("Password must be at least 6 characters");

    setLoading(true);
    signupMutation.mutate(
      { name, email, phone, password },
      { onSettled: () => setLoading(false) }
    );
  };

  return (
    <>
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <Image
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Signup Banner"
          height={100}
          width={200}
          className="w-29 object-contain"
        />
      </div>

      <h2 className="text-xl md:text-3xl text-black font-bold mt-3">Signup</h2>

      <p
        className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
        onClick={() => setIsCreateAccount(false)}
      >
        <span className="text-black">or</span> go back to Login
      </p>

      <div className="w-12 h-0.5 bg-black mb-4"></div>

      <form onSubmit={handleSignup} className="w-full">
        {/* Phone */}
        <div className="relative w-full ">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder=" "
            required
            className="peer w-86 border border-gray-300 bg-transparent px-4 py-10 pb-2 text-base text-gray-800 placeholder-transparent transition-all duration-200 ease-in-out focus:outline-none"
            />
          <label
            htmlFor="phone"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
            peer-placeholder-shown:top-1/2
            peer-focus:top-2 peer-focus:text-sm 
            peer-valid:top-2 peer-valid:text-sm"
            >
            Phone Number
          </label>
        </div>
              {/* Name */}
        <div className="relative w-full">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
            required
            className="peer w-86 border border-gray-300 bg-transparent px-4 py-10 pb-2 text-base text-gray-800 placeholder-transparent transition-all duration-200 ease-in-out focus:outline-none"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
          peer-placeholder-shown:top-1/2
          peer-focus:top-2 peer-focus:text-sm 
          peer-valid:top-2 peer-valid:text-sm"
          >
             Name
          </label>
        </div>

        {/* Email */}
        <div className="relative w-full ">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="peer w-86 border border-gray-300 bg-transparent px-4 py-10 pb-2 text-base text-gray-800 placeholder-transparent transition-all duration-200 ease-in-out focus:outline-none"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
          peer-placeholder-shown:top-1/2
          peer-focus:top-2 peer-focus:text-sm 
          peer-valid:top-2 peer-valid:text-sm"
          >
            Email 
          </label>
        </div>

        {/* Password */}
        <div className="relative w-full ">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
            className="peer w-86 border border-gray-300 bg-transparent px-4 py-10 pb-2 text-base text-gray-800 placeholder-transparent transition-all duration-200 ease-in-out focus:outline-none"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 ease-in-out 
          peer-placeholder-shown:top-1/2
          peer-focus:top-2 peer-focus:text-sm 
          peer-valid:top-2 peer-valid:text-sm"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-86 bg-[#FF5200] text-white font-bold py-3"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Create Account"}
        </button>

        <p className="mt-3 text-xs text-[#02060C] leading-snug font-semibold">
          <span className="text-[#4D5054]">
            By clicking on Signup, I accept the
          </span>{" "}
          <span className="text-black cursor-pointer">Terms & Conditions</span>{" "}
          & <br />
          <span className="text-black cursor-pointer">Privacy Policy</span>
        </p>
      </form>
    </>
  );
}
