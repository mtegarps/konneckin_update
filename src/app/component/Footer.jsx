import React from "react";
import Logo from "../../assets/img/Konneckin.png";
import BgParallax from "../../assets/img/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <>
        <div className="relative py-20">
          <Image
            src={BgParallax}
            alt="Konneckin"
            className="inset-0 w-full h-full z-[-1] object-cover bg-fixed fixed"
          />
          <div className="bg-[#191919c4] absolute inset-0 flex flex-col justify-center items-center text-white">
            <div className="text-center text-[43.83px] font-normal font-['Georgia'] leading-[52px]">
              How can we help you?
            </div>
            <div className="text-center text-xl font-light font-['Calibri'] leading-tight">
              Get in touch with us or find an office closest to you.
            </div>
          </div>
        </div>
      </>

      <div className="p-10 px-10 md:px-24 bg-base-200 text-base-content">
        <footer className="flex-col md:flex-row md:flex justify-between">
          <nav className="md:w-1/3 my-5 md:my-0 flex-row">
            <Image src={Logo} alt="Konneckin" className="w-[200px] z-10" />
            <form className="flex flex-col space-y-4 max-w-md mt-5 ms-1">
              <label htmlFor="email" className="text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="w-full text-center py-2 px-6 rounded-lg button-shadow bg-[#4f4f4f] text-white"
              >
                Subscribe
              </button>
            </form>
          </nav>
          <nav className="md:w-1/3 my-5 md:my-0 flex flex-col ps-0 md:ps-10">
            <h6 className="text-2xl font-bold">Our Services</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Company Registration</a>
            <a className="link link-hover">Expatriate Support</a>
            <a className="link link-hover">Importer of Record</a>
            <a className="link link-hover">Market Research</a>
            <a className="link link-hover">Legal Opinion</a>
            <a className="link link-hover">Licensing</a>
            <a className="link link-hover">Personal Background Check</a>
            <a className="link link-hover">Company Profile Check</a>
            <a className="link link-hover">Recruitment Service</a>
            <a className="link link-hover">Marketing Consultant</a>
          </nav>
          <nav className="md:w-1/3 my-5 md:my-0">
            <h6 className="text-2xl font-bold">Get Connected with Us</h6>
            <a className="link link-hover">
              Soho Capital Podomoro City, Jl. Tanjung Duren Raya No.1,
              RT.3/RW.5, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta
              Barat, Daerah Khusus Ibukota Jakarta 11470
            </a>
          </nav>
        </footer>
        <p className="text-center bg-base-200 mt-6">
          © 2024 Konneckin Indonesia. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
