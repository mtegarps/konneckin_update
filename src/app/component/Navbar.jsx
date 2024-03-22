"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "../../assets/img/Konneckin.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <div className="overflow-y-hidden z-50">
      <div
        className="flex flex-row-reverse md:justify-start md:flex-row items-center justify-between w-full py-[1rem] bg-transparent px-5 md:px-20 absolute z-50"
        id="nav"
      >
        <div
          id="menu"
          className="sticky cursor-pointer md:hidden block z-50"
          onClick={() => setMenu(!menu)}
        >
          {!menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#191919"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          )}
        </div>
        <div className="">
          <Link
            href={"/"}
            className={`btn btn-ghost text-xl ${!menu ? "invert" : ""}`}
          >
            <Image className="w-[200px] z-10" src={Logo} alt="Konneckin" />
          </Link>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      {menu && (
        <div className="fixed w-screen z-40 h-screen md:hidden block bg-base-100">
          <ul className="px-10 pt-20 text-black">
            <li className="mt-5">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="mt-5">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="mt-5">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
