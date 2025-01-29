import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const ContactUsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2 }}
      className="bg-[#131316] text-white text-center w-[90%] mx-auto py-10 px-5 rounded-lg mt-6"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Ready to Transform Your Document Management?
      </h2>
      {/* Description */}
      <p className="text-xl  text-white mx-auto md:w-[80%] mb-6">
        Let Docuprise AI simplify your workflows and tackle your most complex
        document management challenges. Whether you’re a business or a
        government agency, our AI-driven solutions are designed to save you
        time, reduce costs, and improve compliance—so you can focus on your core
        operations.
      </p>
      {/* Contact Us Button */}

      <Link
        href="/contact"
        className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-white px-6 py-3 font-bold rounded-lg text-lg transition duration-300 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-700"
      >
        Contact Us
      </Link>
    </motion.div>
  );
};

export default ContactUsSection;
