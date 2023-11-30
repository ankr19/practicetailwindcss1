import React from "react";
import { FaAngleDown } from "react-icons/fa";
const MainNavbar = () => {
  // this part is important 
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sticky w-full flex text-white bg-[black] p-[30px]">
      <div className="container flex mx-[150px]">
        <div className="mx-[20px] text-[20px]">
          <a className="font-semibold">
            Mega
            <span className="text-[#f75757]">kit.</span>
          </a>
        </div>
        <ul className="flex justify-center items-center ms-[300px] text-[15px] font-poppins font-medium">
          <li className="tracking-wide ms-[45px] cursor-pointer transition-all duration-250 ease hover:text-[#f75757] uppercase">
            Home
          </li>
          {/* dropdown menu */}
          <div
            className="relative bg-black"
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <li
              onMouseOver={() => {
                setOpen(true);
              }}
              className="flex tracking-wide ms-[45px] bg-black uppercase transition-all duration-250 ease hover:text-[#f75757]"
            >
              <span className="mr-1">About</span>
              <FaAngleDown className="mt-1" />
            </li>
            <ul
              className={`absolute w-40 py-2 rounded-lg bg-black shadow-xl ${
                open ? "block" : "hidden"
              }`}
            >
              <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:border-l-black border-l-4 border-l-black border-r-black hover:border-r-black border-r-4 hover:bg-gray-100 hover:text-black cursor-pointer">
                Our Company
              </li>
              <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:border-l-black border-l-4 border-l-black border-r-black hover:border-r-black border-r-4 hover:bg-gray-100 hover:text-black cursor-pointer">
                Pricing
              </li>
              <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:border-l-black border-l-4 border-l-black border-r-black hover:border-r-black border-r-4 hover:bg-gray-100 hover:text-black cursor-pointer">
                Menu
              </li>
            </ul>
          </div>
          <li className="tracking-wide ms-[45px] cursor-pointer transition-all duration-250 ease hover:text-[#f75757] uppercase">
            Service
          </li>
          <li className="tracking-wide ms-[45px] cursor-pointer transition-all duration-250 ease hover:text-[#f75757] uppercase">
            Portfolio
          </li>
          <li className="tracking-wide ms-[45px] cursor-pointer transition-all duration-250 ease hover:text-[#f75757] uppercase">
            Blog
          </li>
          <li className="tracking-wide ms-[45px] cursor-pointer transition-all duration-250 ease hover:text-[#f75757] uppercase">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
