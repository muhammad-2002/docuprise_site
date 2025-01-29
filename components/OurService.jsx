import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  const services = [
    "Centralize, organize, and optimize document workflows for greater efficiency and control.",
    "Leverage AI to automate document classification, data extraction, and processing with unmatched accuracy.",
    "Harness the power of advanced AI to analyze and process diverse document types, driving smarter insights.",
    "Extract and digitize critical information from scanned documents with advanced OCR technology.",
    "Safeguard and manage data with robust archiving solutions tailored for regulatory compliance.",
    "Integrate effortlessly with your existing platforms to maximize efficiency and minimize disruption.",
  ];

  return (
    <div className="what-we-do-container py-12 px-4 mx-auto md:w-[90%]">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        What We Do
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0 ">
        {/* Image Section */}
        <div className="md:w-[40%] text-center ">
          <Image
            src="/what-i-do.png"
            alt="What We Do"
            width={400}
            height={400}
            className="rounded-lg border border-[#FF00AD] shadow-lg"
          />
        </div>

        {/* Bullet Points Section */}
        <div className="md:w-1/2">
          <ul className="list-disc list-inside text-white text-[15px] space-y-4">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
