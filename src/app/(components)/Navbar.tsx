"use client";
import { Bell, BellIcon, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={() => {}}
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className=" relative ">
          <input
            type="search"
            placeholder="search products"
            className="pl-10 pr-4 py-2 w-50 md:w-80 bottom-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className=" absolute inset-y-0 left-0 pointer-events-none pl-3 flex items-center">
            <BellIcon size={20} className=" text-gray-500" />
          </div>
        </div>
      </div>
      {/*Right*/}
      <div className=" justify-between flex items-center gap-5 ">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className=" cursor-pointer text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative ">
            <Bell className=" cursor-pointer text-gray-500" />
            <span className=" absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className=" w-0 h-7 border border-solid border-1 border-gray-300 mx-3" />
          <div className=" flex gap-3 cursor-pointer items-center ">
            <div className="w-9 h-9">image</div>
            <span className=" font-semibold">Ed ros</span>
          </div>
        </div>
        <Link href="/setting">
          <Settings className=" cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
