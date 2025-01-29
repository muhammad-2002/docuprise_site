"use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FileInput, Database, Search, Brain, Archive } from "lucide-react";
// import Preloader from "@/components/Preloader";

// const CapabilityCard = ({ icon: Icon, title, items }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="card"
//   >
//     <div className="flex items-center mb-4">
//       <Icon className="text-[#fffffe] mr-3" size={24} />
//       <h3 className="text-xl font-bold text-[#fffffe]">{title}</h3>
//     </div>
//     <ul className="space-y-2">
//       {items.map((item, index) => (
//         <motion.li
//           key={index}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.1 * index }}
//           className="text-[#fffffe]"
//         >
//           {item}
//         </motion.li>
//       ))}
//     </ul>
//   </motion.div>
// );

// const Capabilities = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Show preloader for 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-24 h-full"
//     >
//       {loading && <Preloader />} {/* Show preloader while loading */}
//       <section className="bg-gradient-to-r from-[#707073] to-[#89898d] py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="section-title"
//           >
//             Capabilities at Every Point in the Document Lifecycle
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <CapabilityCard
//               icon={FileInput}
//               title="Ingestion"
//               items={[
//                 "Batch Processing",
//                 "Stream Processing",
//                 "OCR Capabilities",
//               ]}
//             />

//             <CapabilityCard
//               icon={Database}
//               title="Processing"
//               items={[
//                 "Intelligent Document Processing",
//                 "AI-powered OCR",
//                 "Data Extraction",
//                 "Data Entry",
//                 "Information Management",
//               ]}
//             />

//             <CapabilityCard
//               icon={Archive}
//               title="Archiving/Records"
//               items={[
//                 "AI-Powered Search",
//                 "LLM Integration",
//                 "Secure Storage",
//                 "Easy Retrieval",
//               ]}
//             />
//           </div>

//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#575759] rounded-lg p-8"
//             >
//               <div className="flex items-center mb-4">
//                 <Search className="text-[#fffffe] mr-3" size={32} />
//                 <h3 className="text-2xl font-bold text-[#fffffe]">
//                   Advanced Search Capabilities
//                 </h3>
//               </div>
//               <p className="text-[#fffffe]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.8 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#575759] rounded-lg p-8"
//             >
//               <div className="flex items-center mb-4">
//                 <Brain className="text-[#fffffe] mr-3" size={32} />
//                 <h3 className="text-2xl font-bold text-[#fffffe]">
//                   AI-Powered Processing
//                 </h3>
//               </div>
//               <p className="text-[#fffffe]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Capabilities;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRightLeft,
//   BrainCircuit,
//   SearchCode,
//   ShieldCheck,
//   CheckCircle2,
// } from "lucide-react";

// // Preloader Component
// const Preloader = () => (
//   <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50">
//     <motion.div
//       animate={{
//         scale: [1, 1.2, 1],
//         rotate: [0, 360],
//       }}
//       transition={{
//         duration: 1.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="w-16 h-16 border-4 border-[#B100FF] border-t-transparent rounded-full"
//     />
//   </div>
// );

// // Section Component
// const Section = ({
//   title,
//   content,
//   image,
//   imageLeft = false,
//   items = [],
//   icon: Icon,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//     className="py-16 bg-black/40"
//   >
//     <div
//       className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col  ${
//         imageLeft ? "md:flex-row" : "md:flex-row-reverse"
//       } gap-12 items-center`}
//     >
//       <motion.div whileHover={{ scale: 1.05 }} className="md:w-1/2">
//         <img
//           src={image}
//           alt={title}
//           className="rounded-lg shadow-2xl w-full hover:shadow-[#B100FF]/20 transition-shadow duration-300"
//         />
//       </motion.div>
//       <div className="md:w-1/2">
//         <div className="flex items-center gap-4 mb-6">
//           <Icon className="text-[#B100FF] w-12 h-12" />
//           <h2 className="text-3xl font-bold text-[#fffffe]">{title}</h2>
//         </div>
//         <p className="text-[#fffffe]/90 mb-8 text-lg">{content}</p>
//         {items.length > 0 && (
//           <ul className="space-y-4">
//             {items.map((item, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center text-[#fffffe]/80 hover:text-[#fffffe] transition-colors duration-300"
//               >
//                 <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
//                 <span className="text-lg">{item}</span>
//               </motion.li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   </motion.div>
// );

// const Capabilities = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Preloader />;

//   return (
//     <div className="bg-[#1a1a1a] min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-32 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage:
//               'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#1a1a1a]"></div>
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <BrainCircuit className="w-20 h-20 text-[#B100FF] mx-auto mb-6" />
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#fffffe] mb-8 leading-tight"
//           >
//             Docuprise AI: Simplifying Document and Data Management Through
//             Innovation
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-[#fffffe]/90 max-w-4xl mx-auto leading-relaxed"
//           >
//             At Docuprise AI, we specialize in transforming how organizations
//             manage, process, and secure their documents and data. Our corporate
//             mission is to empower businesses and government agencies with
//             cutting-edge AI-driven solutions that streamline workflows, reduce
//             costs, and enhance compliance. Our solutions offer a comprehensive
//             suite of features designed to digitize, organize, and automate
//             document processing with precision and security.
//           </motion.p>
//         </div>
//       </section>

//       {/* Capabilities Sections */}
//       <Section
//         icon={ArrowRightLeft}
//         title="Secure Document Ingestion"
//         content="Our advanced document ingestion system ensures secure and efficient processing of your documents."
//         image="https://i.ibb.co.com/xfZfrsJ/Whats-App-Image-2025-01-27-at-11-45-17-PM-removebg-preview.png"
//         items={[
//           "Field-Driven Uploads: Securely upload documents with advanced encryption (AES-256)",
//           "Email Integration: Accept encrypted email attachments, automate processing",
//           "Batch Uploads: Handle high-volume uploads with secure cloud storage",
//           "Mobile App Scanning: Securely capture and upload documents from job sites",
//           "Live Streaming Ingestion: Process real-time data securely with continuous compliance",
//         ]}
//       />

//       {/* <Section
//         icon={BrainCircuit}
//         title="Intelligent AI-Driven OCR and Data Extraction"
//         content="Transform your document processing with our state-of-the-art OCR and data extraction capabilities."
//         image="https://i.ibb.co.com/jw3wtVx/OCR-1.png"
//         imageLeft={true}
//         items={[
//           "AI-Driven OCR: Extract data from intricate layouts with superior accuracy",
//           "Role-Based Data Access: Automate data entry with strict access controls",
//           "Document Correlation: Link related data points across multiple documents securely",
//         ]}
//       /> */}

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="py-16 bg-black/40"
//       >
//         <div
//           className={`max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center`}
//         >
//           <motion.div whileHover={{ scale: 1.05 }} className="md:w-1/2">
//             <img
//               src="https://i.ibb.co.com/vhzvjmX/Whats-App-Image-2025-01-27-at-11-46-36-PM.jpg"
//               alt="alt"
//               className="rounded-lg shadow-2xl w-full hover:shadow-[#B100FF]/20 transition-shadow duration-300"
//             />
//           </motion.div>
//           <div className="md:w-1/2">
//             <div className="flex items-center gap-4 mb-6">
//               <BrainCircuit className="text-[#B100FF] w-12 h-12" />
//               <h2 className="text-3xl font-bold text-[#fffffe]">{`Intelligent AI-Driven OCR and Data Extraction`}</h2>
//             </div>
//             <p className="text-[#fffffe]/90 mb-8 text-lg">{`Transform your document processing with our state-of-the-art OCR and data extraction capabilities.`}</p>
//             <ul className="space-y-4">
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center text-[#fffffe]/80 hover:text-[#fffffe] transition-colors duration-300"
//               >
//                 <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
//                 <span className="text-lg">
//                   AI-Driven OCR: Extract data from intricate layouts with
//                   superior accuracy
//                 </span>
//               </motion.li>
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center text-[#fffffe]/80 hover:text-[#fffffe] transition-colors duration-300"
//               >
//                 <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
//                 <span className="text-lg">
//                   Role-Based Data Access: Automate data entry with strict access
//                   controls
//                 </span>
//               </motion.li>
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center text-[#fffffe]/80 hover:text-[#fffffe] transition-colors duration-300"
//               >
//                 <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
//                 <span className="text-lg">
//                   Document Correlation: Link related data points across multiple
//                   documents securely
//                 </span>
//               </motion.li>

//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center text-[#fffffe]/80 hover:text-[#fffffe] transition-colors duration-300"
//               >
//                 <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
//                 <span className="text-lg">
//                   Multi-Module LLM Capability: Harness the power of multiple
//                   specialized LLM modules to analyze, process, and generate
//                   insights across various document types, ensuring scalable,
//                   context-aware, and highly tailored results for clients in
//                   diverse industries.
//                 </span>
//               </motion.li>
//             </ul>
//           </div>

//           <motion.div whileHover={{ scale: 1.05 }} className="md:w-1/2">
//             <img
//               src="https://i.ibb.co.com/5F4PGpM/Whats-App-Image-2025-01-27-at-11-45-37-PM.jpg"
//               alt="alt"
//               className="rounded-lg shadow-2xl w-full hover:shadow-[#B100FF]/20 transition-shadow duration-300"
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       <Section
//         icon={SearchCode}
//         title="Powerful, Secure Search Capabilities"
//         content="Find what you need instantly with our advanced search features."
//         image="https://i.ibb.co.com/5Rr50Kb/Whats-App-Image-2025-01-28-at-12-24-04-AM-removebg-preview.png"
//         items={[
//           "Full-Text Search: Retrieve documents or data points securely from large datasets",
//           "AI-Powered Contextual Search: Deliver precise results with role-based access controls",
//           "Encrypted Search Operations: Protect search and indexing activities",
//         ]}
//       />

//   <Section
//     icon={ShieldCheck}
//     title="End-to-End Secure Archiving and Records Management"
//     content="Ensure your documents are securely stored and easily accessible when needed."
//     image="https://i.ibb.co.com/wCr14PS/Whats-App-Image-2025-01-28-at-12-40-37-AM.jpg"
//     imageLeft={true}
//     items={[
//       "Encrypted Archiving: Store records securely meeting stringent security standards",
//       "Automated Retention Policies: Ensure compliance with retention and destruction guidelines",
//       "Compliance-Ready Storage: Maintain long-term secure access to essential records",
//     ]}
//   />
// </div>
//   );
// };

// export default Capabilities;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  BrainCircuit,
  SearchCode,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Consultant from "@/components/Consultant";

const Preloader = () => (
  <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 border-4 border-[#B100FF] border-t-transparent rounded-full"
    />
  </div>
);

const Section = ({
  title,
  content,
  image,
  imageLeft = false,
  items = [],
  icon: Icon,
  CustomClass,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-16 bg-gradient-to-b from-[#1E1E2E] to-[#2D2D2D]"
  >
    <div
      className={`max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col  ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-12 items-center`}
    >
      <motion.div whileHover={{ scale: 1.05 }} className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className={`rounded-lg shadow-2xl w-full  ${
            CustomClass ? CustomClass : "h-[24rem]"
          } hover:shadow-[#B100FF]/20 transition-shadow duration-300`}
        />
      </motion.div>
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <Icon className="text-[#B100FF] w-12 h-12" />
          <h2 className="text-4xl font-bold text-[#f5f5f5]">{title}</h2>
        </div>
        <p className="text-[#f5f5f5]/90 mb-8 text-lg sm:text-xl lg:text-2xl">
          {content}
        </p>
        {items.length > 0 && (
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-[#f5f5f5]/80 hover:text-[#f5f5f5] transition-colors duration-300"
              >
                <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">{item}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </motion.div>
);

const Capabilities = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#1a1a1a]"></div>
        <div className="relative z-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <BrainCircuit className="w-20 h-20 text-[#B100FF] mx-auto mb-6" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#fffffe] mb-8 leading-tight"
          >
            Docuprise AI: Simplifying Document and Data Management Through
            Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#fffffe]/90 max-w-4xl mx-auto leading-relaxed"
          >
            At Docuprise AI, we specialize in transforming how organizations
            manage, process, and secure their documents and data. Our corporate
            mission is to empower businesses and government agencies with
            cutting-edge AI-driven solutions that streamline workflows, reduce
            costs, and enhance compliance. Our solutions offer a comprehensive
            suite of features designed to digitize, organize, and automate
            document processing with precision and security.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Sections */}
      <Section
        icon={ArrowRightLeft}
        title="Secure Document Ingestion"
        CustomClass="h-[35rem] object-contain"
        content="Our advanced document ingestion system ensures secure and efficient processing of your documents."
        image="https://i.ibb.co/xfZfrsJ/Whats-App-Image-2025-01-27-at-11-45-17-PM-removebg-preview.png"
        items={[
          "Field-Driven Uploads: Securely upload documents with advanced encryption (AES-256)",
          "Email Integration: Accept encrypted email attachments, automate processing",
          "Batch Uploads: Handle high-volume uploads with secure cloud storage",
          "Mobile App Scanning: Securely capture and upload documents from job sites",
          "Live Streaming Ingestion: Process real-time data securely with continuous compliance",
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-b from-[#1E1E2E] to-[#2D2D2D]"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <img
              src="https://i.ibb.co/vhzvjmX/Whats-App-Image-2025-01-27-at-11-46-36-PM.jpg"
              alt="OCR"
              className="rounded-lg shadow-2xl w-full h-[22rem] hover:shadow-[#B100FF]/20 transition-shadow duration-300"
            />
          </motion.div>
          <div className="col-span-1 text-center md:text-left">
            <div className="flex items-center gap-4 mb-6">
              <BrainCircuit className="text-[#B100FF] w-12 h-12" />
              <h2 className="text-4xl font-bold text-[#f5f5f5]">
                Intelligent AI-Driven OCR and Data Extraction
              </h2>
            </div>
            <p className="text-[#f5f5f5]/90 mb-8 text-lg sm:text-xl lg:text-2xl">
              Transform your document processing with our state-of-the-art OCR
              and data extraction capabilities.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">
                  AI-Driven OCR: Extract data from intricate layouts with
                  superior accuracy
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">
                  Role-Based Data Access: Automate data entry with strict access
                  controls
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">
                  Document Correlation: Link related data points across multiple
                  documents securely
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-[#B100FF] mr-3 w-6 h-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl">
                  Multi-Module LLM Capability: Harness specialized LLMs to
                  analyze, process, and generate tailored insights.
                </span>
              </li>
            </ul>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <img
              src="https://i.ibb.co/5F4PGpM/Whats-App-Image-2025-01-27-at-11-45-37-PM.jpg"
              alt="OCR"
              className="rounded-lg shadow-2xl w-full h-[22rem] hover:shadow-[#B100FF]/20 transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </motion.div>

      <Section
        icon={SearchCode}
        title="Powerful, Secure Search Capabilities"
        CustomClass="h-[20rem] object-contain"
        content="Find what you need instantly with our advanced search features."
        image="https://i.ibb.co/5Rr50Kb/Whats-App-Image-2025-01-28-at-12-24-04-AM-removebg-preview.png"
        items={[
          "Robust Document Tagging",
          "Granular Search Permissions",
          "Hierarchical Data Relationships",
        ]}
      />

      <Section
        icon={ShieldCheck}
        title="End-to-End Secure Archiving and Records Management"
        content="Ensure your documents are securely stored and easily accessible when needed."
        image="https://i.ibb.co.com/wCr14PS/Whats-App-Image-2025-01-28-at-12-40-37-AM.jpg"
        imageLeft={true}
        items={[
          "Encrypted Archiving: Store records securely meeting stringent security standards",
          "Automated Retention Policies: Ensure compliance with retention and destruction guidelines",
          "Compliance-Ready Storage: Maintain long-term secure access to essential records",
        ]}
      />

      <Consultant />
    </div>
  );
};

export default Capabilities;
