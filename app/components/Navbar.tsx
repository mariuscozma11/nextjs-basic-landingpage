"use client"
/* eslint-disable @next/next/no-img-element */

import React, {useState} from "react";

const Navbar = () => {
  const navbarItems = [
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
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="lg:bg-[#f9fbfd] bg-[#ddebfe] border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-[5%] lg:mx-[10%] p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={"/mechalogo.svg"}
            className="h-10 dark:hidden"
            alt="MechaFusion Logo"
          />
          <img
            src={"/mechalogo-dark.svg"}
            className="h-10 hidden dark:block"
            alt="MechaFusion Logo"
          />
          <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MechaFusion
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "hidden" : "block"}  w-full md:block md:w-auto`}>
          <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:bg-[#f9fbfd] bg-[#f9fbfd] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#ddebfe]">
            {navbarItems.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
