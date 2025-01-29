"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HardHat, Building, ClipboardCheck } from "lucide-react";
import Preloader from "@/components/Preloader";

const Construction = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 h-full"
    >
      {loading && <Preloader />} {/* Show preloader while loading */}
      <section className="bg-gradient-to-r from-[#575759] to-[#c1133f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800"
              alt="Construction Site"
              className="rounded-lg shadow-xl order-2 md:order-1"
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <h1 className="text-4xl font-bold text-[#fffffe] mb-6">
                Construction Markets
              </h1>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start"
                >
                  <HardHat className="text-[#fffffe] mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Project Management
                    </h3>
                    <p className="text-[#fffffe]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start"
                >
                  <Building className="text-[#fffffe] mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Site Documentation
                    </h3>
                    <p className="text-[#fffffe]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-start"
                >
                  <ClipboardCheck
                    className="text-[#fffffe] mr-3 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Compliance Tracking
                    </h3>
                    <p className="text-[#fffffe]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Construction;
