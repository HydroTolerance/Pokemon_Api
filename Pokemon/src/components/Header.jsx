import React from "react";
import { Link } from "react-router-dom";
import { FaFire, FaBaby } from "react-icons/fa";

export default function Header() {
  let imgs = [
    "https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9",
  ];
  return (
    <div className=" bg-red-500 sticky top-0 z-20">
      <div className="py-3">
        <div className="flex justify-between md:mx-14 max-md:mx-6">
          <div>
            <img src={imgs[0]} className="h-15 w-36" />
          </div>
          <div className="my-auto font-bold text-white">
            POKEMON API
          </div>
        </div>
      </div>
    </div>
  );
}

const SidebarIcon = ({ icon }) => <div>{icon}</div>;
