import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="what-we-do-container py-12 px-4 mx-auto md:w-[90%]"
    >
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        What We Do?
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 ">
        {/* Image Section */}
        <div className="lg:w-[50%] text-center ">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/what-i-do.jpeg"
              alt="What We Do"
              width={600}
              height={600}
              className="rounded-xl  shadow-lg"
            />
          </motion.div>
        </div>

        {/* Bullet Points Section */}
        <div className="lg:w-1/2">
          <ul className="list-disc list-inside text-white text-xl space-y-2">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
