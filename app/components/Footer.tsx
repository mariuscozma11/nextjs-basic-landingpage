/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  const footerItems = [
    {
      id: 1,
      text: "Acasa",
      href: "#Acasa",
    },
    {
      id: 2,
      text: "Despre",
      href: "#Despre",
    },
    {
      id: 3,
      text: "Contact",
      href: "#Contact",
    },
    {
      id: 4,
      text: "Politica de confidentialitate",
      href: "#",
    },
  ];
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900 ">
      <div className="w-full px-[5%] lg:px-[10%] mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={"/mechalogo.svg"}
              className="h-8 dark:hidden"
              alt="MechaFusion Logo"
            />
            <img
              src={"/mechalogo-dark.svg"}
              className="h-8 hidden dark:block"
              alt="MechaFusion Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MechaFusion
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerItems.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.href} className="hover:underline me-4 md:me-6">
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            MechaFusion™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
