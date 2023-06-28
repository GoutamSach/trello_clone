"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className=" max-w-7xl mx-auto ">
      <div className="   bg-slate-500/10 sm:flex sm:justify-between sm:items-center py-1">
        <div className=" absolute top-0 left-0 bg-gradient-to-br from-pink-400 to-[#0055D1] w-full h-96 opacity-50  rounded-md blur-3xl -z-50"></div>
        <Image
          src={"/Trello_logo.svg.png"}
          alt={"logo"}
          width={200}
          height={50}
          priority
          className=" flex pb-3   pt-3   mx-auto sm:ml-3   w-36 md:w-44  md:pl-3  lg:pl-4 "
        />
        <div className=" flex my-2 mr-3   items-center justify-center space-x-3">
          <form className=" flex-grow shadow-md rounded-md flex flex-row items-center space-x-4 mx-3 py-2 px-4 sm:px-6   bg-white  ">
            <AiOutlineSearch className=" text-gray-500 md:text-3xl " />
            <input
              type="text"
              placeholder="Search"
              className=" focus:outline-none md:text-xl"
            />{" "}
            <button type="submit" className="hidden"></button>
          </form>
          <Avatar
            color="#0055D1"
            size="40"
            name="goutam Sachdeva"
            className=" rounded-full "
          />
        </div>
      </div>
      <div className="flex justify-center   ">
        <div className="flex items-center space-x-3 rounded-lg   bg-white py-4 mt-2 px-3  sm:px-5  shadow-lg">
          <HiUserCircle className=" text-4xl  " color="#0055D1 " />
          <p className=" text-[#0055D1] text-md overflow-hidden">
            GPT is summarising your task for the day...
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
