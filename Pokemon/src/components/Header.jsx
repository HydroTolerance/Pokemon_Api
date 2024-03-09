import React from "react";
import { Link } from "react-router-dom";
import { FaFire, FaBaby } from "react-icons/fa";

export default function Header() {
  let imgs = [
    'https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9',
  ];
  return (
    <div className=" bg-red-500 sticky top-0 z-50">
              <div className="py-3">
      <div className="flex justify-between mx-14">
          <div>
            <img src={imgs[0]} className="h-15 w-36"/>
          </div>
          <ul className="flex items-center justify-center text-white">
            <li className="flex items-center mr-5">
              <Link to="/Home" className="flex items-center">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/About" className="flex items-center">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const SidebarIcon = ({ icon }) => <div>{icon}</div>;
