import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Other = ({ post, onClose }) => {
  const getColorText = (type) => {
    switch (type) {
      case "fire":
        return "bg-orange-500";
      case "water":
        return "bg-blue-500";
      case "grass":
        return "bg-green-500";
      case "bug":
        return "bg-lime-500";
      case "normal":
        return "bg-gray-500";
      case "poison":
        return "bg-purple-500";
      case "electric":
        return "bg-yellow-500";
      case "ground":
        return "bg-yellow-700 ";
      case "psychic":
        return "bg-pink-500";
      case "ghost":
        return "bg-violet-600";
      case "rock":
        return "bg-stone-500";
      case "fighting":
        return "bg-red-600";
      case "ice":
        return "bg-cyan-500";
      case "flying":
        return "bg-gray-200 !text-black";
      case "fairy":
        return "bg-red-400 text-black";
      case "steel":
        return "bg-slate-500";
      case "dragon":
        return "bg-indigo-600";
      case "dark":
        return "bg-zinc-600";
    }
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 z-50  flex flex-col mx-2"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <img
          src={post.sprites.other.home.front_default}
          alt=""
          className="w-40 h-40 mx-auto"
        />
        <p className="text-center text-2xl">
          {post.name.charAt(0).toUpperCase() + post.name.slice(1)}
        </p>
        <div
          className={`flex justify-center align-center w-1/4 gap-5 mx-auto `}
        >
          {post.types.map((type) => (
            <p
              className={`mx-auto text-center rounded mb-3 px-3 text-white ${getColorText(
                type.type.name
              )}`}
            >
              <div key={type.type.name}>
                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
              </div>
            </p>
          ))}
        </div>
        <div className="grid mx-auto md:grid-cols-2">
          <p className="text-center px-5">Weight: {post.weight}</p>
          <p className="text-center px-5">Height: {post.height}</p>
        </div>
      </div>
    </div>
  );
};

export default Other;
