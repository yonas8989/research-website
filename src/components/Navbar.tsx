"use client";
import React from "react";

const navItems = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Blog", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Hire", href: "#" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex self-stretch">
      <div className="flex flex-wrap flex-auto gap-10 justify-between items-center px-6 py-2.5 w-full bg-white shadow-2xl max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/57008dd1d75646d791eed9e7fd6ed313/71e76feacf6295b7536f4b2dea5d412c8096cf9e6b8e737475db2bc0abce180e?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.05] w-[180px]"
        />
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch py-2.5 my-auto text-base font-medium leading-loose min-w-60 text-slate-600 w-[645px] max-md:max-w-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="gap-2.5 self-stretch my-auto whitespace-nowrap hover:text-purple-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="gap-2.5 self-stretch px-6 py-3.5 my-auto text-sm font-semibold leading-none bg-blue-600 rounded-md text-neutral-50 hover:bg-blue-700 transition-colors max-md:px-5">
          Contact us
        </button>
      </div>
    </nav>
  );
};
