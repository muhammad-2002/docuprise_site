"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Shield, FileCheck } from "lucide-react";
import Preloader from "@/components/Preloader";

const Federal = () => {
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
      <section className="bg-[#707073] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-[#fffffe] mb-6">
                Federal Markets
              </h1>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start"
                >
                  <Shield
                    className="text-[#a199a4] mr-3 mt-1 text-2xl"
                    size={80}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Security Compliance
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
                  transition={{ delay: 0.6 }}
                  className="flex items-start"
                >
                  <Building2
                    className="text-[#a199a4] mr-3 mt-1 text-2xl"
                    size={80}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Agency Integration
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
                  <FileCheck
                    className="text-[#a199a4] mr-3 mt-1 text-2xl"
                    size={80}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#fffffe] mb-2">
                      Compliance Standards
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800"
                alt="Government Building"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Federal;
