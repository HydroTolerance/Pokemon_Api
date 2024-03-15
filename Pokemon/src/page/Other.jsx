import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Other = ({ post, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 z-50  flex flex-col "
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <p>ID: {post.id}</p>
        <p>Name: {post.name}</p>
        <p>
          Type:
          {post.types[0].type.name.charAt(0).toUpperCase() +
            post.types[0].type.name.slice(1)}
        </p>
        <p>
          Abilities:
          {post.abilities[0].ability.name}
          {post.abilities[1].ability.name}
        </p>
        <img
          src={post.sprites.other.dream_world.front_default}
          alt=""
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default Other;
