'use client'
import BannerPage from "@/components/HomePage/BannerPage";
import Footer from "@/components/HomePage/Footer";
import Navbar from "@/components/HomePage/Navbar";
import WhyChooseUs from "@/components/HomePage/WhyChoseUs";
import WhatWeDo from "./../components/HomePage/OurService";
import ContactUsSection from "@/components/HomePage/ContuctUs";

export default function Home() {
  return (
    <div className="w-full mx-auto bg-[#110717] ">
      <div className="w-full mx-auto">
      <Navbar></Navbar>
      <BannerPage></BannerPage>
     <WhatWeDo></WhatWeDo>
     <WhyChooseUs></WhyChooseUs>
     <ContactUsSection></ContactUsSection>
    <Footer></Footer>
      </div>

    </div>
  );
}
