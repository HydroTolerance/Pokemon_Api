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
      <div>
        <div className="bg-lime-300">
          <div class="relative w-1/2 bg-gradient-to-r from-white  to-bg-white  h-screen">
            <div class="absolute left-0 w-1/2 h-full bg-white"></div>
            <div class="absolute left-0 w-full h-full bg-white -skew-x-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
