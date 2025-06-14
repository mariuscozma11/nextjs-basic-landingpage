/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header>
      <Navbar />
      <div
        id="Acasa"
        className="flex flex-row flex-wrap justify-center h-[85vh] lg:h-[90vh] items-center bg-[#ddebfe] lg:bg-[#f9fbfd] "
      >
        <div className="lg:w-2/5 lg:pl-[10%] px-10 pb-0 mb-0">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Mecha
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              Fusion
            </strong>
          </h1>
          <h2 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
            Clubul de robotica oficial al{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              U
            </strong>
            niversitatii{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              P
            </strong>
            olitehnica din{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              T
            </strong>
            imisoara
          </h2>
          <p className="max-w-2xl font-light text-gray-500 md:text-xl lg:text-xl dark:text-gray-400">
            Descoperă lumea roboticii alături de MechaFusion clubul studențesc
            unde inovația, munca în echipă și pasiunea pentru tehnologie prind
            viață în fiecare proiect.
          </p>
        </div>
        <img
          className="w-3/5 pr-[10%] hidden lg:block mt-0 pt-0"
          alt="Group working on robots"
          src={"/collective.png"}
        ></img>

      </div>
    </header>
  );
};

export default Hero;
