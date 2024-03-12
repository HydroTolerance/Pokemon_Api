import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import charizard from "../assets/charizard.webp";
import { Link } from "react-router-dom";

export default function Home() {
  let imgs = [
    "https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9",
  ];
  return (
    <>
      {/* <img
          src={charizard}
          alt=""
          width={"200px"}
          height={"200px"}
        /> */}

      <div>
        <div className="relative z-10">
          <div className="flex justify-between top-0 absolute w-full">
            <div>
              <img src={imgs} className="w-40 h-14 mx-5" />
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/Gen1"
                className="flex items-center text-xl mx-3 text-white px-4 rounded-lg bg-red-500 hover:bg-red-600 "
              >
                Pokedex
              </Link>
              <input
                type="text"
                className="border mx-5 px-3 py-1 rounded-full"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="bg-lime-300 relative">
          <div className="relative w-1/2 bg-gradient-to-r from-white  to-bg-white  h-screen block">
            <div className="absolute left-0 w-1/2 h-full bg-white"></div>
            <div className="absolute left-0 w-full h-full bg-white -skew-x-12"></div>
          </div>
          <div className="absolute tracking-wide right-[330px] top-72 tranform -translate-y-1/2 -translate-x-3/4 ">
            <label htmlFor="" className="text-7xl font-bold">
              Gotta Catch 'Em All!
            </label>
            <label htmlFor="" className="flex justify-start w-[600px] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ratione fugiat laudantium eos sapiente error ut, repellendus,
              optio facere, quidem cum? Deserunt aspernatur soluta perferendis
              sunt assumenda rerum tempora aut?
            </label>
          </div>
          <div className="left-1/3 absolute top-1/2 tranform -translate-y-1/2 translate-x-3/4 "></div>
          <div className="right-1/3 absolute top-1/2 tranform -translate-y-1/2 translate-x-3/4 ">
            <div className="items-center">
              <div className=" flex right-0">
                <img src={charizard} alt="" className="w-[650px] h-[600px]" />
              </div>
            </div>
          </div>
          <div className="absolute">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
