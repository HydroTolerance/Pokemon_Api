import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Header({ handleSearch }) {

  return (
    <div className="bg-white sticky top-0 z-20 shadow-2xl">
      <div className="py-1">
        <div className="flex justify-between md:mx-8 max-md:mx-6">
          <div>
            <div className=" relative">
              <IoSearch
                className="w-8 h-8 absolute ml-72 flex bottom-10 top-3 right-3 justify-end items-end text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                onChange={handleSearch}
                className="border rounded p-1 my-3 min-w-80  focus:outline-none"
                placeholder="Search Pokemon.."
              />
            </div>
          </div>
          <div className="my-auto text-gray-500 text-4xl max-md:hidden">PokéDex</div>
        </div>
      </div>
    </div>
  );
}
