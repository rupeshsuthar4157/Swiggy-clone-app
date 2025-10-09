"use client";
import React from "react";
import Image from "next/image";

export default function SignupLoginForm({ isCreateAccount, setIsCreateAccount }: any) {
    return (
        <div className="p-6 flex flex-col items-start">
            <Image
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt="Login Banner"
                height={200}
                width={400}
                className="w-full max-h-34 object-contain mb-6"
            />

            {!isCreateAccount ? (
                <>
                    <h2 className="text-xl md:text-2xl text-black font-bold mb-1">
                        Login
                    </h2>
                    <p
                        className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
                        onClick={() => setIsCreateAccount(true)}
                    >
                        <span className="text-black">or</span> create an account
                    </p>

                    <div className="w-full h-0.5 bg-black mb-4"></div>

                    <div className="relative mt-2 w-full">
                        <input
                            type="tel"
                            id="phone"
                            className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                            placeholder="Phone number"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                        >
                            Phone number
                        </label>
                    </div>

                    <button className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md">
                        Login
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-xl md:text-2xl text-black font-bold mb-1">
                        Signup
                    </h2>
                    <p
                        className="text-[#FF5210] text-sm font-semibold mb-4 cursor-pointer"
                        onClick={() => setIsCreateAccount(false)}
                    >
                        <span className="text-black">or</span> go back to Login
                    </p>

                    <div className="w-full h-0.5 bg-black mb-4"></div>

                    <div className="relative w-full mb-4">
                        <input
                            type="text"
                            id="name"
                            className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                            placeholder="Full Name"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative w-full mb-4">
                        <input
                            type="email"
                            id="email"
                            className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative w-full mb-4">
                        <input
                            type="tel"
                            id="signupPhone"
                            className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                            placeholder="Phone number"
                        />
                        <label
                            htmlFor="signupPhone"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                        >
                            Phone number
                        </label>
                    </div>

                    <button className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md">
                        Create Account
                    </button>
                </>
            )}
        </div>
    );
}
