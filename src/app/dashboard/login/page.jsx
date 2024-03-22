/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Toast from "../utils/Toast";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    await axios
      .post("/api/auth", {
        action: "login",
        email,
        password,
      })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        }).then(() => {
          localStorage.setItem("authToken", res.data.data.token.accessToken);
          router.push("/dashboard");
        });
      })
      .catch((e) => {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "Email or password do not match",
        });
      });
  };

  return (
    <>
      <div className="p-5 md:p-24 bg-primary flex justify-center items-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default login;
