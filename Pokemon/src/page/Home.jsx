import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import charizard from "../assets/charizard.webp";

export default function Home() {
  return (
    <>
      {/* <img
          src={charizard}
          alt=""
          width={"200px"}
          height={"200px"}
        /> */}
      <Header />
      <div className="relative">
        <div className="bg-lime-300 relative">
          <div className="relative w-1/2 bg-gradient-to-r from-white  to-bg-white  h-screen">
            <div className="absolute left-0 w-1/2 h-full bg-white"></div>
            <div className="absolute left-0 w-full h-full bg-white -skew-x-12"></div>
          </div>
          <div className="left-1/3 absolute top-1/2 tranform -translate-y-1/2 translate-x-3/4 ">
            <div>asdfasdf</div>
          </div>
          <div className="right-1/3 absolute top-1/2 tranform -translate-y-1/2 translate-x-3/4 ">
            <div className="flex items-center">
              <div className=" flex right-0">
                <img src={charizard} alt="" className="w-[650px] h-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
