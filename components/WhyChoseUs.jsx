import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const cardsData = [
    {
      icon: "/store.png",
      title: "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
      description:
        "Partner with a company rooted in dedication, discipline, and a mission-oriented mindset",
    },
    {
      icon: "/solutions.png",
      title: "Tailored Solutions ",
      description:
        "We don’t believe in one-size-fits-all. Our team works closely with you to deliver solutions tailored to your unique challenges",
    },
    {
      icon: "/rating.png",
      title: "Proven Expertise",
      description:
        "Founded by military veterans, machine learning experts, and seasoned software developers with years of experience serving public and private sectors",
    },
    {
      icon: "/deal.png",
      title: "Commitment to Excellnce",
      description:
        "We prioritize precision, reliability, and results in every aspect of our work",
    },
    {
      icon: "/consumer-centric.png",
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We focus on creating long-term value and building trusted partnerships",
    },
    {
      icon: "/save-the-world.png",
      title: "Social Impact",
      description:
        " By choosing Docuprise AI, you support a company dedicated to providing meaningful opportunities for returning military veterans",
    },
  ];

  return (
    <div className="why-choose-us-container md:w-[90%] mx-auto px-4 py-5  text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 text-white gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-[#131316] rounded-2xl hover:scale-105  cursor-pointer shadow-lg p-6 transition-transform  border border-[#c2268f]"
          >
            <button className="border-solid  rounded-lg p-3 hover:scale-105 text-center ">
              <Image src={card.icon} alt="icon" width={50} height={50}></Image>
            </button>
            <h3 className="card-title  text-xl font-bold mt-2  mb-3">
              {card.title}
            </h3>
            <p className="card-description font-normal text-[14px] ">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
