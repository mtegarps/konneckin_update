import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="navbar fixed bg-base-100">
      <div className="navbar-start">
        {pathName !== "/dashboard/login" && (
          <div className="dropdown">
            <div
              htmlFor="my-drawer"
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <label htmlFor="my-drawer" className="btn drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Konneckin Dashboard</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
