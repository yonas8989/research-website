"use client";
import React from "react";
import type { CaseStudy } from "../Types";

const caseStudies: CaseStudy[] = [
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/71521d006e35683f208afb2025553b5904fd19e4867872d451c8ca412a6cd17d?placeholderIfAbsent=true",
    backgroundColor: "bg-indigo-50"
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/bc180df9609d6a78c8d14b93a2007d38024c1e72deb42f2acad6a15dd5d7eb7d?placeholderIfAbsent=true",
    backgroundColor: "bg-green-50"
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/c0522b600ba59092bfb66ffc8884a296ed3bf2a657d2571a54627333e1e8ed28?placeholderIfAbsent=true",
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
                <article className={`flex flex-col grow justify-center items-end px-20 py-20 w-full ${study.backgroundColor} rounded-none border border-solid border-[color:var(--Shade-Primary-lite-bg,#E7DAED)] max-md:px-5 max-md:max-w-full`}>
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
