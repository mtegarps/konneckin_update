/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    await axios
      .get("/api/news")
      .then((response) => setData(response.data))
      .then(() => setLoading(false))
      .catch((e) => {});
  };

  const handleDelete = (slug) => async () => {
    await axios
      .delete("/api/news/" + slug)
      .then((response) => {
        getNews();
      })
      .catch((e) => {});
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="mt-24 px-5 md:px-24">
      <div className="card bg-secondary p-5 text-base-100">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">News Data</h1>
          <a href="/dashboard/news/create" className="btn bg-base-100">
            Create new News
          </a>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table border">
            <thead className="text-base-100">
              <tr>
                <th></th>
                <th>Title</th>
                <th>Body</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {item.title.length > 30
                        ? item.title.substring(0, 30) + "..."
                        : item.title}
                    </td>
                    <td>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            item.body.length > 30
                              ? item.body.substring(0, 30) + "..."
                              : item.body,
                        }}
                      />
                    </td>
                    <td>
                      {item.img && (
                        <Image alt="" src={item.img} width={100} height={100} />
                      )}
                    </td>
                    <td>
                      <a
                        href={`/dashboard/news/edit/?slug=${item.slug}`}
                        className="px-3 mx-1 py-2 text-black bg-yellow-400"
                      >
                        Edit
                      </a>
                      <a
                        onClick={handleDelete(item.slug)}
                        className="px-3 mx-1 py-2 text-white bg-red-600"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {loading && (
            <div className="flex mt-3 items-center justify-center">
              <span className="me-5 loading loading-dots loading-lg"></span>
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
