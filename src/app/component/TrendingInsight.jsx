import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageDefault from "../../assets/img/default.png";

const TrendingInsight = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    await axios
      .get("/api/news")
      .then((response) => setData(response.data))
      .then(() => setLoading(false))
      .catch((e) => {});
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="bg-base-100 pt-5 px-5 md:px-24 items-top">
        <h1 className="text-xl font-bold ">TRENDING INSIGHT</h1>
        {loading && (
          <div className="flex py-3 items-center justify-center">
            <span className="me-5 loading loading-dots loading-lg"></span>
            Loading...
          </div>
        )}
      </div>
      {!loading && (
        <div className="bg-base-100 p-5 md:px-24 items-top md:flex">
          {!loading &&
            data.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="text-md me-5 mt-5 md:mt-0 w-full md:w-1/4"
              >
                <Image
                  alt=""
                  src={item.img || ImageDefault}
                  className="aspect-video object-cover w-full"
                  width={200}
                  height={400}
                />
                {/* <span className="ms-3 font-extrabold border-r-2 h-[40px] border-r-black me-5 pe-1 text-[#777777]">
                  {index + 1}
                </span> */}
                <div>
                  <h3 className="font-bold text-2xl py-3">{item.title}</h3>
                  <h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item.body.length > 300
                            ? item.body.substring(0, 300) + "..."
                            : item.body,
                      }}
                    />
                  </h5>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-600 pt-4 hover:text-purple-600"
                    >
                      Read More
                    </a>
                  ) : (
                    <a
                      href={`/insight?slug=${item.slug}`}
                      className="text-blue-600 pt-4 hover:text-purple-600"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default TrendingInsight;
