"use client";
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    var textWrapper = document.querySelector(".ml9 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml9 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    });
  }, []);

  return (
    <>
      <div className="bg-[#191919c4] md:h-[70vh] h-[300px] bg-center bg-cover flex flex-col items-center justify-center text-white text-[40px] md:text-[70px]">
        <h1 class="ml9">
          <span class="text-wrapper">
            <span class="letters font-['Georgia'] ">Konneckin Company</span>
          </span>
        </h1>
      </div>

      <div className="min-h-screen bg-primary px-5 md:px-24 py-10 md:flex justify-between items-center">
        <section className="bg-primary md:w-1/2">
          <div className="mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-base-100 ">
              SAY HELLO
            </h2>
            <p className="mb-5 font-light text-base-100 sm:text-xl">
              We’d Love to Hear from You. Let’s Get in Touch.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-base-100 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
        <iframe
          className="w-full mt-10 md:mt-0 md:w-1/2 md:ps-5 h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.711429436366!2d106.7897357!3d-6.1738663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78b4b6be621%3A0xaddbc3f0a5115545!2sKonneckin%20Indonesia!5e0!3m2!1sid!2sid!4v1710142675613!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default index;
