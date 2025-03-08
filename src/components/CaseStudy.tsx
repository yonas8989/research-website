"use client";
import React from "react";
import type { CaseStudy } from "../Types";
import ai from '../assets/ai.jpg';
import ml from '../assets/ml.jpg';
import blockChain from '../assets/blockChain.jpg';
const caseStudies: CaseStudy[] =  [
  {
    title: "Advancements in Artificial Intelligence",
    description: "This research explores the latest advancements in artificial intelligence, focusing on machine learning algorithms and their applications in various industries.",
    image: ai,
    backgroundColor: "bg-indigo-50"
  },
  {
    title: "Blockchain for Secure Data Sharing",
    description: "This study investigates the use of blockchain technology for secure and decentralized data sharing, highlighting its potential to revolutionize data privacy and integrity.",
    image: blockChain,
    backgroundColor: "bg-green-50"
  },
  {
    title: "Machine Learning in Climate Science",
    description: "This research focuses on the application of machine learning models to predict climate change impacts, using historical data to forecast future trends.",
    image: ml,
    backgroundColor: "bg-red-50"
  }
];


export const CaseStudies: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch mt-0 w-full bg-slate-50 max-md:max-w-full">
      <div className="flex z-10 flex-col self-center mt-0 w-full max-w-[1232px] max-md:max-w-full">
        <div className="flex flex-col items-center self-end mt-56 max-w-full text-4xl font-bold text-center text-gray-900 leading-[55px] max-md:mt-10">
          <div className="flex bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] min-h-[5px] w-[69px]" />
          <h2 className="mt-5 max-md:max-w-full">
            <span className="font-normal">Our recent </span>
            <br /> Case studies
          </h2>
        </div>
        <div className="flex shrink-0   rounded-full bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[72px] w-[72px] max-md:mt-10" />

        {caseStudies.map((study, index) => (
          <div key={index} className="mt-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[45%] max-md:w-full">
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-contain grow w-full rounded-xl aspect-[1.45] max-md:max-w-full"
                />
              </div>
              <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <article
                  className={`flex flex-col grow justify-center items-end px-20 py-20 w-full ${study.backgroundColor} rounded-none border border-solid border-[color:var(--Shade-Primary-lite-bg,#E7DAED)] max-md:px-5 max-md:max-w-full`}
                >
                  <div className="flex flex-col items-end max-w-full w-[529px]">
                    <div className="flex flex-col w-full">
                      <h3 className="self-start text-3xl font-semibold leading-none text-center text-gray-700 max-md:max-w-full">
                        {study.title}
                      </h3>
                      <p className="mt-8 text-sm leading-6 text-slate-600 max-md:max-w-full">
                        {study.description}
                      </p>
                    </div>
                    <button className="flex gap-4 justify-center items-center mt-16 text-sm font-semibold leading-none max-md:mt-10">
                      <span className="bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]">
                        Read more
                      </span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
