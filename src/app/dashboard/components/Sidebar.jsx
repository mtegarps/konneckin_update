import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 pt-10 w-80 min-h-full bg-base-200 text-base-content">
            <li className="mt-3">
              <a onClick={() => router.push("/dashboard")}>Dashboard</a>
            </li>
            <li className="mt-3">
              <a onClick={() => router.push("/dashboard/news")}>News</a>
            </li>
            <li className="mt-3">
              <a onClick={() => router.push("/dashboard/services")}>Services</a>
            </li>
            <li className="mt-3">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
