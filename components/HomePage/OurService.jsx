import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center duration-300"
              >
                <CheckCircle2 className="text-[#FB00AB] mr-3 -mt-8 md:-mt-4 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
