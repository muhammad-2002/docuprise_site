import Image from "next/image";
import React from "react";
import { MdAnalytics } from "react-icons/md";

const Integrations = () => {
  return (
    <div className="bg-[#0c0712] py-12 mt-10">
      <div className="grid grid-cols-2 justify-between  w-[80%] gap-10 mx-auto">
        <div>
          <div>
            <h1 className="text-xl sm:text-5xl text-start md:text-3xl font-bold leading-tight">
              Seamless Integrations
            </h1>
            <h2 className="text-xl sm:text-5xl text-start md:text-2xl font-bold leading-tight">
              with AI-Powered Assistance
            </h2>
            <p className=" sm:text-[15px] text-start md:text-[15px] ">
              Experience the power of automation and efficiency at your
              fingertips
            </p>
          </div>
          <div className="mt-6">
            <div className="flex gap-3">
              <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
                <button className=" p-3 ">
                  <MdAnalytics />
                </button>
                <p className="">Connect with Leading Platforms Effortlessly</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              <div className="bg-[#131316] text-start p-5 rounded-xl space-y-2">
                <button className=" p-3 ">
                  <MdAnalytics />
                </button>
                <p className="">Connect with Leading Platforms Effortlessly</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-20">
          <Image
            src="/intregrations.png"
            width={400}
            height={400}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
