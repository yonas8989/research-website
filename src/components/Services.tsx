"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServiceCard as ServiceCardType } from "../Types";

const services: ServiceCardType[] = [
  {
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/7a0ba4969dc3b72d6dd900a1166c1875486dd1381845150aaf7356a52117c525?placeholderIfAbsent=true",
  },
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/6208850f2d5c3fdf40f696234c0ce1361cac68f42d220fcf5cf08eb0a634b6df?placeholderIfAbsent=true",
    gradient: "bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/0c540e477a082f5ec4980f122186312c6d6ab7368202fbf97f83230c6b57bd4f?placeholderIfAbsent=true",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/0c540e477a082f5ec4980f122186312c6d6ab7368202fbf97f83230c6b57bd4f?placeholderIfAbsent=true",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/0c540e477a082f5ec4980f122186312c6d6ab7368202fbf97f83230c6b57bd4f?placeholderIfAbsent=true",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/0c540e477a082f5ec4980f122186312c6d6ab7368202fbf97f83230c6b57bd4f?placeholderIfAbsent=true",
  },
];

const ServiceCard: React.FC<ServiceCardType> = ({
  title,
  description,
  icon,
  gradient,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex py-9 px-4 rounded-lg shadow-lg bg-neutral-50 transition-transform ${
        gradient ? "border border-solid border-[#F76680]" : ""
      }`}
    >
      <div className="mr-0">
        {icon && (
          <motion.img
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[58px] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}
        <h3
          className={`text-xl font-semibold leading-none ${
            gradient
              ? "bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] text-transparent"
              : "text-gray-700"
          }`}
        >
          {title}
        </h3>
        <motion.p
          className="mt-5 text-sm leading-6 text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
};

export const Services: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col self-stretch py-14 w-full bg-slate-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="self-center text-4xl font-bold leading-loose text-gray-900"
      >
        Services we offer
      </motion.h2>
      <div className="flex flex-wrap gap-5 justify-center mt-16 max-md:mt-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="w-full md:w-[calc(33.333%-1.25rem)]"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
