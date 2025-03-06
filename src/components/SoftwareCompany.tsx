"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { CaseStudies } from "../components/CaseStudy";
import { Testimonials } from "../components/Testimonial";
import { TechStack } from "./TechStack";
import { Footer } from "./Footer";

export const SoftwareCompanyWebsite: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-11 bg-white">
      <header className="flex self-stretch">
        <Navbar />
        <h1 className="flex-auto self-start mt-6 text-2xl text-black w-[1094px] max-md:max-w-full">
          Ik developers
        </h1>
      </header>
      {/* <Navbar/> */}

      <Hero />

      <div className="flex shrink-0 mt-16 rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10" />

      <Services />

      <CaseStudies />

      <Testimonials />

      <TechStack />

      <Footer />
    </main>
  );
};

export default SoftwareCompanyWebsite;
