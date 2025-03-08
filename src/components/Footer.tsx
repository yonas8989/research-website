import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-gray-100 p-6">
      <div className="flex flex-wrap gap-5 justify-between items-start mt-16 w-full max-w-[1230px] max-md:mt-10 max-md:max-w-full">
        
        {/* Research Group Info */}
        <div className="flex flex-col items-start max-w-sm">
          <h3 className="text-lg font-bold text-gray-800">Research Group</h3>
          <p className="mt-3 text-base leading-6 text-gray-600">
            Dedicated to advancing research in AI, machine learning, and data science through collaboration and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
          <ul className="mt-4 text-base leading-8 text-gray-600">
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/research" className="hover:text-blue-500">Our Research</a></li>
            <li><a href="/publications" className="hover:text-blue-500">Publications</a></li>
            <li><a href="/members" className="hover:text-blue-500">Group Members</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="flex flex-col items-start max-w-sm">
          <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
          <p className="mt-4 text-base leading-6 text-gray-600">
            Email: <a href="mailto:research@group.com" className="text-blue-500 hover:underline">research@group.com</a>
          </p>
          <p className="mt-2 text-base text-gray-600">Phone: +251 987 654 321</p>
          <p className="mt-2 text-base text-gray-600">Address: Addis Ababa University, Ethiopia</p>
          
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <i className="fa-brands fa-facebook"></i>            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
            <i className="fa-brands fa-square-twitter"></i>            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <i className="fa-brands fa-linkedin"></i>            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
            <i className="fa-brands fa-github"></i>            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 mt-10"></div>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Research Group. All rights reserved.
      </p>
    </footer>
  );
};
