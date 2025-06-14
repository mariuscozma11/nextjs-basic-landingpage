"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <section
      id="Contact"
      className="flex flex-row flex-wrap justify-center h-[50vh] lg:h-[90vh] items-center lg:bg-[#f9fbfd] bg-[#ddebfe] "
    >
      <div className="lg:w-2/5 lg:pl-[10%] pb-0 mb-0">
        <div className="flex-col">
          <div className="p-6 mr-2 lg:bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Contact
            </h1>
            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600">
              Contactează-ne pentru mai multe detalii
            </p>

            <div className="flex items-center mt-8 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Acme Inc, Street, State, Postal Code
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                +40 1234567890
              </div>
            </div>

            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                office@clubrobotica.upt.ro
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
      <img
        className="w-3/5 px-[15%] hidden lg:block mt-0 pt-0"
        alt="Group working on robots"
        src={"/contact.png"}
      ></img>
    </section>
  );
};

export default Contact;
