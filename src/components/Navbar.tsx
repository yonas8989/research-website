"use client";
import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Case Studies", href: "#" },
];

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      <div className="flex flex-wrap flex-auto gap-10 justify-between items-center px-6 py-2.5 w-full max-md:px-5 max-md:max-w-full">
        {/* Logo */}
        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/71e76feacf6295b7536f4b2dea5d412c8096cf9e6b8e737475db2bc0abce180e?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.05] w-[180px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Nav Links */}
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch py-2.5 my-auto text-base font-medium leading-loose min-w-60 text-slate-600 w-[645px] max-md:max-w-full">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="gap-2.5 self-stretch my-auto whitespace-nowrap hover:text-purple-900 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          className="gap-2.5 self-stretch px-6 py-3.5 my-auto text-sm font-semibold leading-none bg-blue-600 rounded-md text-neutral-50 hover:bg-blue-700 transition-colors max-md:px-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          Contact us
        </motion.button>
      </div>
    </motion.nav>
  );
};
