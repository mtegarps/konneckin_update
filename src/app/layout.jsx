"use client";
import { usePathname } from "next/navigation";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import NavbarDashboard from "./dashboard/components/Navbar";
import SidebarDashboard from "./dashboard/components/Sidebar";
import "./globals.css";

const metadata = {
  title: "KonneckIn",
  description:
    "Konneckin is a consulting firm of Market-Entry and corporate secretarial services to clients expanding and operating in Indonesia.",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const landing = [
    "/",
    "/about-us",
    "/services",
    "/contact-us",
    "/insight",
    "/services/detail",
  ];

  return (
    <html lang="en" data-theme="dark" className="">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/trix@2.0.8/dist/trix.css"
        />
      </head>
      <body>
        {!landing.includes(pathName) ? null : <Navbar />}
        <div className="">{children}</div>
        {!landing.includes(pathName) ? null : <Footer />}
      </body>
    </html>
  );
}
