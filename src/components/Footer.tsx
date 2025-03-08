import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center w-full ">
      <div className="flex flex-wrap gap-5 justify-between items-start mt-32 w-full max-w-[1230px] max-md:mt-10 max-md:max-w-full p-4 ">
        <div className="flex flex-col items-start">
          <h3 className="text-base text-black ">Ik developers</h3>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <nav className="flex flex-col">
          <h3 className="self-start text-lg font-bold tracking-normal text-slate-600">
            Links
          </h3>
          <ul className="mt-5 text-base leading-10 text-slate-500">
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>How it works</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Areas We Serve</li>
          </ul>
        </nav>

        <div className="flex flex-col items-start self-stretch text-lg text-slate-500 max-md:max-w-full">
          <h3 className="font-bold tracking-normal text-slate-600">
            Contact us
          </h3>
          <p className="mt-6 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="mt-7 leading-loose">+923183561921</p>
        </div>
      </div>

      <div className="self-stretch mt-20 w-full border border-solid bg-slate-300 border-slate-300 min-h-px max-md:mt-10 max-md:max-w-full" />
      <p className="mt-9 text-sm tracking-normal leading-none text-slate-600">
        © 2025 Copyright by yonas Fikadie. All rights reserved.
      </p>
    </footer>
  );
};
