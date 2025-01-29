import Image from "next/image";
import React from "react";
import { ImPower } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";

const Features = () => {
  return (
    <div className="mt-14 mx-auto space-y-3 w-[80%]">
      <h1 className="text-xl sm:text-5xl text-center md:text-4xl font-bold leading-tight">
        Transform Your Content
      </h1>
      <h2 className="text-xl sm:text-5xl text-center md:text-4xl font-bold leading-tight">
        with AI-Powered Writing
      </h2>
      <p className=" sm:text-[15px] text-center md:text-[15px] max-w-lg mx-auto">
        Our AI assistant transforms content creation, providing high-quality
        copy tailored to you
      </p>

      <div className="grid grid-cols-3 gap-3 bg-[#070708] p-6 rounded-xl">
        <div className="flex flex-col gap-3">
          <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
            <button className="border-solid border rounded-full p-3 ">
              <MdAnalytics />
            </button>
            <h1 className="text-xl font-bold">Predictive Analytics</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
            <button className="border-solid border rounded-lg p-3 ">
              <MdAnalytics />
            </button>
            <h1 className="text-xl font-bold">Personalization</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
        <div className="border border-solid rounded-xl">
          <div className="w-80 p-2  rounded-lg shadow-lg text-center">
            <h1 className="text-white mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              dolore asperiores autem eos dolores vitae quasi{" "}
            </h1>
            <div className="mb-4 mt-7 ">
              <FaMicrophone className="mx-auto rounded-full bg-[#df564e]  p-3   text-6xl" />
            </div>

            <div className="grid grid-cols-3 gap-1 mt-20">
              <button className="p-1 text-sm text-white bg-[#131316] rounded-md  transition">
                Start
              </button>
              <button className="p-1 text-sm text-white bg-[#131316] rounded-md  transition">
                Stop
              </button>
              <button className="p-1 text-sm text-white bg-[#131316] rounded-md  transition">
                Pause
              </button>
              <button className="p-1 text-sm text-white bg-[#131316] rounded-md  transition">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div div className="flex flex-col gap-3">
          <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
            <button className="border-solid border rounded-lg p-3 ">
              <MdAnalytics />
            </button>
            <h1 className="text-xl font-bold">Machine Learning</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
            <button className="border-solid border rounded-lg p-3 ">
              <MdAnalytics />
            </button>
            <h1 className="text-xl font-bold">Smart Task  Automation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
