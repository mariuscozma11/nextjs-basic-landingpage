/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <section>
      <div
        id="Despre"
        className="flex flex-row flex-wrap justify-center pt-[30%]  lg:p-0 lg:h-[90vh] items-center bg-white "
      >
        <img
          className="w-2/5 lg:pl-[10%] hidden lg:block mt-0 pt-0"
          alt="Group working on robots"
          src={"/about.png"}
        ></img>
        <div className="lg:w-3/5 lg:pl-[10%] px-10  mb-0 lg:p-0 pb-[30%]">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent px-0.5">
              Despre
            </strong>{" "}
            MechaFusion
          </h1>
          <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
            Comunitatea pasionaților de robotică din cadrul{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent px-0.5">
              U
            </strong>
            niversității{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent px-0.5">
              P
            </strong>
            olitehnica{" "}
            <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent px-0.5">
              {" "}
              T
            </strong>
            imișoara
          </h2>
          <p className="max-w-4xl font-light text-gray-500 md:text-xl lg:text-xl  dark:text-gray-400">
            MechaFusion este un club studențesc dedicat explorării și
            dezvoltării roboticii moderne. Reunim studenți din diverse facultăți
            care împărtășesc pasiunea pentru tehnologie, inovație și lucru în
            echipă. În cadrul clubului, membrii lucrează la proiecte practice
            precum roboți de sumo, line follower sau sisteme autonome,
            participând totodată la competiții naționale și internaționale.
            Scopul nostru este să oferim un mediu de învățare aplicată, unde
            cunoștințele teoretice sunt puse în practică pentru a crea soluții
            reale, inteligente și durabile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
