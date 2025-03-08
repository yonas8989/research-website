"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "../Types";

const testimonials: Testimonial[] = [
  {
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    author: "Imran Khan",
    role: "Software Engineer",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/36622178a61c40bb8946695e97818f547f97fd908247a6ecb0fcd7c6785f1638?placeholderIfAbsent=true",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/79f8567d2cb7d9d8814df2d7630196075f27733585c3af1541ad53f270149b72?placeholderIfAbsent=true",
  },
  {
    quote:
      "Alcaline Solutions delivered exceptional results for our project. Their team is highly skilled and professional. I would highly recommend them to anyone looking for top-notch web development services.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/36622178a61c40bb8946695e97818f547f97fd908247a6ecb0fcd7c6785f1638?placeholderIfAbsent=true",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/79f8567d2cb7d9d8814df2d7630196075f27733585c3af1541ad53f270149b72?placeholderIfAbsent=true",
  },
  {
    quote:
      "The team at Alcaline Solutions is amazing! They understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommended!",
    author: "Michael Brown",
    role: "CTO",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/36622178a61c40bb8946695e97818f547f97fd908247a6ecb0fcd7c6785f1638?placeholderIfAbsent=true",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/79f8567d2cb7d9d8814df2d7630196075f27733585c3af1541ad53f270149b72?placeholderIfAbsent=true",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="z-10 self-stretch px-5 md:px-20 mt-32 w-full text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-between items-center self-stretch min-h-[627px] max-md:max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-full text-4xl font-bold text-gray-900 leading-[55px] w-[474px]"
        >
          <div className="bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] min-h-[5px] w-[69px]" />
          <h2 className="mt-5 max-md:max-w-full">
            <span className="font-normal">Why customers love</span>
            <br />
            working with us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center w-full md:w-[30%] p-6 rounded-lg shadow-lg bg-neutral-50"
            >
              <div className="flex flex-col items-center w-full">
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/2e44da2c1e41298ef1e0e7176c45d60126599d9a19999c26ef46d655b2b2b082?placeholderIfAbsent=true"
                  alt="Quote start"
                  className="object-contain shrink-0 w-10 aspect-square"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <blockquote className="mt-5 text-lg leading-9 text-slate-500 text-center">
                  {testimonial.quote}
                </blockquote>
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/b46fb5e2a0b42951bbb9f27c2504b47a4c90a7949d29fc2290fddebec0d03cc1?placeholderIfAbsent=true"
                  alt="Quote end"
                  className="object-contain shrink-0 w-10 aspect-square mt-5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </div>

              <div className="flex flex-col items-center mt-6">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="object-contain max-w-full aspect-square w-[100px] rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <motion.img
                  src={testimonial.rating}
                  alt="Rating"
                  className="object-contain mt-4 max-w-full aspect-[5.95] w-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.div
                  className="flex flex-col justify-center items-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-lg font-bold tracking-normal text-purple-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm leading-loose text-black">
                    {testimonial.role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};