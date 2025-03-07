"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { CaseStudies } from "./CaseStudy";
import { Testimonials } from "./Testimonial";
import { TechStack } from "./TechStack";
import { Footer } from "./Footer";

export const ResearchGroup: React.FC = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <div className="flex shrink-0 mt-16 rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10" />

      <Services />
      <CaseStudies />
      <div className="flex shrink-0 mt-16 rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10" />


      <Testimonials />

      <TechStack />

      <Footer />
    </main>
  );
};

export default ResearchGroup;
