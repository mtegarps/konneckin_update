"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NewsDetail = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    img: null,
    fileName: null,
    link: "",
  });

  const [loading, setLoading] = useState(true);

  const getNewsById = (slug) => {
    axios
      .get(`/api/services/${slug}`)
      .then((res) => {
        setFormData(res.data);
      })
      .then(() => setLoading(false))
      .catch((e) => {});
  };

  useEffect(() => {
    const slug = window.location.search.split("=")[1];
    getNewsById(slug);
  }, []);
  return (
    <>
      <div className="pt-20 px-5 md:px-24 bg-primary flex-row w-screen"></div>
      <div className="px-5 md:px-24 bg-base-100 flex-row">
        {loading && (
          <div className="mx-auto flex items-center justify-center">
            <span className="loading loading-spinner loading-lg my-20"></span>
            <h4 className="ms-5">Loading...</h4>
          </div>
        )}

        {formData.img && (
          <Image
            src={formData.img}
            alt={formData.title}
            className="aspect-video object-cover mx-auto py-5"
            width={800}
            height={400}
          />
        )}
        <h1 className="text-3xl font-bold">{formData.title}</h1>
        <p
          className="text-lg mt-5 pb-5"
          dangerouslySetInnerHTML={{
            __html: formData.body,
          }}
        />
      </div>
    </>
  );
};

export default NewsDetail;
