'use client';

import React from 'react';

const Consultant = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-[#1E1E2E] to-[#2D2D2D]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
    Why Choose Docuprise AI?

              </h2>
              <p className="text-[#dadadb] text-base lg:text-xl font-normal leading-relaxed lg:text-start text-center">
            Docuprise AI is more than a technology provider—we’re a trusted partner in solving your organization’s document and data challenges. Whether you're digitizing construction project records or managing government compliance, we help you unlock efficiency, enhance security, and reduce costs through innovation.
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Get Consultant </span>
            </button>
          </div>
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="About Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default Consultant;
