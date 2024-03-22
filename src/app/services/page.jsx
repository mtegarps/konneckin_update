"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ESupport from "../../assets/img/cytonn-photography-n95VMLxqM2I-unsplash.jpg";
import axios from "axios";

const index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    await axios
      .get("/api/services")
      .then((response) => setData(response.data))
      .then(() => setLoading(false))
      .catch((e) => {});
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="bg-[url('../assets/img/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg')] bg-cover md:h-[70vh] h-[100vh] bg-center bg-no-repeat flex">
        <div className="px-5 md:px-24 pt-20 bg-[#000000c2] h-full flex items-center">
          <div className="md:w-2/3" data-aos="fade-right">
            <h1 className="text-white text-[30px] md:text-[50px] font-[900]">
              Welcome to Our Services!
            </h1>
            <p className="text-xl text-white">
              We are your trusted partner in unlocking your business&apos;s full
              potential. With extensive experience and a dedicated team, we
              stand ready to provide innovative and practical solutions to
              support the growth and success of your business.
            </p>
            <p className="text-xl text-white mt-2">
              Our services are designed to offer holistic and measurable
              support, underlining our commitment to delivering real value to
              our clients. Here are some of the services we offer
            </p>
            <button className="btn btn-base-100 mt-5">
              Contact our consultant
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="bg-base-100 flex p-3 items-center justify-center">
          <span className="me-5 loading loading-dots loading-lg"></span>
          Loading...
        </div>
      ) : (
        data &&
        Object.keys(data).map((key, index) => {
          return (
            <div
              key={index}
              id="services"
              className={`${
                index % 2 == 0
                  ? "bg-base-100 px-10 md:px-24 md:flex flex-row-reverse py-5 md:py-10"
                  : "bg-base-100 px-10 md:px-24 md:flex flex-row py-5 md:py-10"
              }`}
            >
              <Image
                src={data[key].img || ESupport}
                alt="Consultant"
                className="md:w-1/2"
                width={500}
                height={500}
              />
              <div
                id="desc"
                className={`${
                  index % 2 == 0 ? "ps-0 md:pe-5" : "ps-0 md:ps-5"
                }`}
              >
                <h1 className="text-3xl font-bold mt-5 md:mt-0">
                  {data[key].title}
                </h1>
                <p
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      data[key].body.length > 300
                        ? data[key].body.substring(0, 300) + "..."
                        : data[key].body,
                  }}
                />
                <a
                  href={`services/detail?id=${data[key].slug}`}
                  className="btn btn-primary mt-5 px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default index;
