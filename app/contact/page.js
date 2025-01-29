"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Preloader from "@/components/Preloader";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      className="pt-24 pb-16"
    >
      {loading && <Preloader />} {/* Show preloader while loading */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-gray-400">
            We{`'`}d love to hear from you. Please fill out this form.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="button w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#B100FF] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-400">
                    6905 N Wickham Rd, Suite 405-WS4
                    <br />
                    Melbourne, FL 32940
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-[#B100FF] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">(202) 792-2996</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-[#B100FF] mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">info@docuprise.ai</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.439019938272!2d-80.68105760861555!3d28.224351613724668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de04f86c3613c3%3A0xcbf59e2b4abc882f!2s6905%20N%20Wickham%20Rd%20%23405%2C%20Melbourne%2C%20FL%2032940%2C%20USA!5e0!3m2!1sen!2sbd!4v1737700171402!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
