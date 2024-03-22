"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Consultant from "../assets/img/consultant.png";
import callPerson from "../assets/img/call-person.jpg";
import talk from "../assets/img/talk.jpeg";
import handShake from "../assets/img/hand-shake.jpeg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Business from "../assets/img/business-support.jpg";
import ESupport from "../assets/img/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

import TrendingInsight from "./component/TrendingInsight";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[url('../assets/img/people-2344401_1280.jpg')] h-[100vh] bg-top bg-no-repeat bg-cover flex">
        <div className="px-5 md:px-24 pt-20 bg-[#000000c2] h-full flex items-center">
          <div className="md:w-2/3" data-aos="fade-right">
            <h1 className="font-outline-2 text-[30px] md:text-[50px] font-[900]">
              BREAKING DOWN ENTRY BARRIERS TO FOSTER GROWTH IN INDONESIA
            </h1>
            <p className=" text-[#f6f6f6]">
              We believe that all businesses should have access to the resources
              and assistance they need to succeed in the global marketplace.
              Therefore, we offer comprehensive solutions and seasoned support
              to help you expand your business in Indonesia with confidence.
            </p>
            <button className="text-base-100 mt-5">
              Contact our consultant &#8594;
            </button>
          </div>
        </div>
      </div>
      <TrendingInsight />
      <div
        id="services"
        className="px-5 pt-10 md:px-0 bg-slate-200 md:flex items-center"
      >
        <Image src={Business} alt="Consultant" className="md:w-1/2" />
        <div id="desc" className="px-10 md:px-24  ps-0 md:ps-5">
          <h1 className="text-3xl font-bold mt-5 md:mt-0">
            Business Setup & Support
          </h1>
          <p className="mt-3">
            We assist entrepreneurs and existing businesses through the
            intricate process of establishing and expanding their operations.
            Our team of industry experts offers a comprehensive range of
            services, including company registration, market research, business
            plan development, government compliance, and human resource
            management.
          </p>
          <p className="mt-3">
            Our mission is to provide our clients with a seamless, stress-free
            business building and expansion experience. In addition, we offer
            ongoing support to help our clients stay on track and accomplish
            their objectives. Our clients can focus on what they do best -
            running their businesses - while Konneckin handles the rest.
          </p>
          <a href="#" className="mt-10 flex">
            Learn More &#8594;
          </a>
        </div>
      </div>
      <div
        id="services"
        className="px-5 md:px-0 bg-slate-200 md:flex items-center flex-row-reverse"
      >
        <Image src={ESupport} alt="Consultant" className="md:w-1/2" />
        <div id="desc" className="px-10 md:px-24 ps-0 md:pe-5">
          <h1 className="text-3xl font-bold mt-5 md:mt-0">
            Expatriate Support
          </h1>
          <p className="mt-3">
            Indonesia is a land of stunning natural beauty, from its
            breathtaking beaches and lush tropical forests to its rich cultural
            heritage. With so much to see and do, it&apos;s no wonder that so
            many people from all over the world are eager to visit. At
            Konneckin, we&apos;re committed to making your experience as
            effortless as possible. Our Expatriate Support services are tailored
            specifically for foreigners, ensuring that you have the correct visa
            for your needs so that you can enjoy everything Indonesia has to
            offer.
          </p>
          <a href="#" className="mt-10 flex">
            Learn More &#8594;
          </a>
        </div>
      </div>
      <div className="pt-20 min-h-screen px-5 md:px-24 bg-primary text-white flex flex-col items-center justify-center">
        <div className="md:flex h-full">
          <div className="md:w-1/3 h-auto px-5 py-5 md:py-0" data-aos="fade-up">
            <Image src={callPerson} alt="Consultant" className="" />
            <h3 className="text-center text-2xl mt-5">Expertise</h3>
            <p className="text-center">
              Konneckin offers expert guidance and tailored solutions to
              businesses in Indonesia.
            </p>
          </div>
          <div className="md:w-1/3 h-auto px-5 py-5 md:py-0" data-aos="fade-up">
            <Image src={talk} alt="Consultant" className="" />
            <h3 className="text-center text-2xl mt-5">Partnership</h3>
            <p className="text-center">
              Konneckin collaborates closely with clients to facilitate their
              success.
            </p>
          </div>
          <div className="md:w-1/3 h-auto px-5 py-5 md:py-0" data-aos="fade-up">
            <Image src={handShake} alt="Consultant" className="" />
            <h3 className="text-center text-2xl mt-5">Reliability</h3>
            <p className="text-center">
              Konneckin offers effective and efficient services.
            </p>
          </div>
        </div>
        <Link
          href="#"
          className="btn bg-base-100 text-center text-base font-bold mt-10 mb-10 md:mb-0"
          data-aos="fade-up"
        >
          Click Here to Get Free Consultation
        </Link>
      </div>
      <div className="min-h-screen bg-base-200 px-5 md:px-24">
        <div className="flex-col md:flex md:flex-row items-center">
          <Image
            data-aos="fade-right"
            src={Consultant}
            alt="Consultant"
            className="md:h-[100vh] w-auto "
          />
          <div className="px-5" data-aos="fade-down">
            <h1 className="text-5xl font-bold">
              Business expansion to Indonesia: Opportunities and challenges
            </h1>
            <p className="py-6">
              Indonesia is a fast-expanding market with a big and expanding
              middle class and a young, educated labor force, making it an
              attractive expansion opportunity for international businesses. The
              middle-class population represents a substantial potential market
              for a variety of goods and services, and the young and educated
              workforce provides firms with access to a highly skilled and
              motivated labor force.
            </p>
            <p>
              However, growing a company in Indonesia can provide substantial
              obstacles, especially in terms of managing local rules and
              cultural differences. Companies must be mindful of stringent
              regulations, such as labor laws, tax laws, and import limitations,
              and collaborate with local partners and consultants that have an
              in-depth knowledge of the industry can assist with navigating
              these obstacles.
            </p>
            <Link href={"/services"} className="btn btn-primary mt-6 mb-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
