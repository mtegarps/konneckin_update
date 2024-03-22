/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const metadata = {
  title: "KonneckIn",
  description:
    "Konneckin is a consulting firm of Market-Entry and corporate secretarial services to clients expanding and operating in Indonesia.",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const router = useRouter();
  const checkLogin = async (authToken) => {
    await axios
      .get("/api/auth", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          router.push("/dashboard/login");
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status !== 200) {
          router.push("/dashboard/login");
        }
      });
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (pathName !== "/dashboard/login") {
      checkLogin(authToken);
    }
  }, []);

  return (
    <>
      <Navbar />
      {pathName !== "/dashboard/login" && <Sidebar />}
      <div className="">{children}</div>
    </>
  );
}
