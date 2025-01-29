"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Briefcase,
  BookOpen,
  Shield,
  Rocket,
  ArrowRight,
  Handshake,
  Brain,
  Database,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen mt-5 bg-[#1E1E2E]">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920"
            alt="AI Technology Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/80 to-[#1E1E2E]" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Brain className="text-[#B100FF] w-16 h-16" />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r  from-[#B100FF] to-[#c133ff] text-[#dadadb]">
              About Docuprise AI
            </h1>
            <div className="flex justify-center gap-8 mb-8 text-2xl pt-3">
              <div className="flex items-center">
                <Database className="text-[#B100FF] mr-2" />
                <span className="text-[#fffffe]">Data Processing</span>
              </div>
              <div className="flex items-center">
                <Lock className="text-[#B100FF] mr-2" />
                <span className="text-[#fffffe]">Secure Solutions</span>
              </div>
            </div>
            <p className="text-xl text-[#fffffe]">
              At Docuprise AI, we specialize in transforming how organizations
              manage, process, and secure their documents and data. Our
              corporate mission is to empower businesses and government agencies
              with cutting-edge AI-driven solutions that streamline workflows,
              reduce costs, and enhance compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image & Text Sections */}
      <section className="py-20 bg-gradient-to-b from-[#1E1E2E] to-[#2D2D2D] ">
        <div className="container mx-auto px-4 max-w-[1270px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#fffffe]">
                Innovation at Our Core
              </h2>
              <p className="text-[#dadadb] lg:text-xl">
                Our approach to innovation combines cutting-edge AI technology
                with deep industry expertise. We continuously evolve our
                solutions to meet the dynamic needs of modern businesses,
                ensuring our clients stay ahead in an ever-changing digital
                landscape.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
                alt="Innovation"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
                alt="Security"
                width={800}
                height={600}
                className="order-1 md:order-1 rounded-lg shadow-xl"
              />
            </motion.div>

            <div className="order-2 md:order-2">
              <h2 className="text-4xl font-bold mb-4 text-[#fffffe]">
                Security & Precision
              </h2>
              <p className="text-[#dadadb] lg:text-xl">
                We understand the critical nature of document security. Our
                solutions incorporate state-of-the-art security measures and
                precise processing capabilities, ensuring your sensitive
                information is handled with the utmost care and accuracy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="container mx-auto px-4 max-w-[1270px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-4xl">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                  alt="Team"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
              <div>
                <div className="flex items-center mb-4">
                  <Users className="text-[#B100FF] mr-3" size={32} />
                  <h3 className="text-3xl font-bold">Veteran-Led Excellence</h3>
                </div>
                <p className="text-[#dadadb] lg:text-xl mb-4">
                  At Docuprise AI, we are proud to be 100% military
                  veteran-owned and 40% military veteran-operated. Our roots in
                  service shape our commitment to innovation, excellence, and
                  mission-driven results.
                </p>
                <p className="text-[#dadadb] lg:text-xl">
                  We don{`'`}t just honor our Service-Disabled Veteran-Owned
                  Small Business (SDVOSB) designation; we live it by actively
                  prioritizing the hiring, mentoring, and empowerment of
                  veterans.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#2D2D2D] to-[#1E1E2E]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-4xl">
              Core Values: {`'`}Semper AIM{`'`}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#2D2D2D] rounded-lg p-6 shadow-xl"
              >
                <BookOpen className="text-[#B100FF] mb-4" size={36} />
                <h3 className="text-3xl font-bold mb-2">Adaptability</h3>
                <p className="text-[#dadadb] lg:text-lg">
                  We innovate and tailor solutions to meet our clients{`'`}{" "}
                  evolving needs with flexibility and precision.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#2D2D2D] rounded-lg p-6 shadow-xl"
              >
                <Shield className="text-[#B100FF] mb-4" size={36} />
                <h3 className="text-3xl font-bold mb-2">Integrity</h3>
                <p className="text-[#dadadb] lg:text-lg">
                  We are committed to honesty, accountability, and delivering on
                  our promises with excellence.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#2D2D2D] rounded-lg p-6 shadow-xl"
              >
                <Rocket className="text-[#B100FF] mb-4" size={36} />
                <h3 className="text-3xl font-bold mb-2">Mission-Driven</h3>
                <p className="text-[#dadadb] lg:text-lg">
                  We listen, empathize, and take ownership of our clients{"'"}
                  challenges, delivering purposeful and impactful solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E1E2E] to-[#2D2D2D]">
        <div className="container mx-auto px-4 max-w-[1270px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Commitment</h2>
              <div className="flex items-center mb-4">
                <Handshake className="text-[#B100FF] mr-3" size={36} />
                <h3 className="text-3xl font-bold">Partnership for Success</h3>
              </div>
              <p className="text-[#dadadb] lg:text-lg mb-6">
                Docuprise AI is more than a technology provider—we{`'`}re a
                partner in your success. Leveraging our military values and
                cutting-edge innovation, we aim to simplify the way
                organizations handle their most complex document management
                challenges.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800"
                alt="Partnership"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D2D2D] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1270px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center relative z-10"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Let{`'`}s Get Started Today
              </h2>
              <p className="text-[#dadadb] lg:text-lg mb-8">
                Contact us to learn more about how Docuprise AI can transform
                your workflows and help you achieve your goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#B100FF] text-white px-8 py-3 rounded-lg  text-xl font-semibold flex items-center"
              >
                Book Now
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </div>

            {/* Floating Images */}
            <div className="relative h-[400px] ">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Partnership"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-xl h-full lg:-mt-10-"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
