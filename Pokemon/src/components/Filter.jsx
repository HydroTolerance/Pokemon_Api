import React from 'react'
import { IoIosBug } from "react-icons/io";
import { BsHypnotize } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { FaFire, FaLeaf, FaSkullCrossbones, FaRegDotCircle, FaStar, FaFistRaised, FaSnowflake, FaDragon} from "react-icons/fa";
import { GiFluffyWing, GiWaterDrop,GiElectric, GiFallingRocks, GiStoneSphere } from "react-icons/gi";

export default function Filter() {
    const getColorBackground = (type) => {
        switch (type) {
          case "fire":
            return "bg-orange-300 hover:bg-orange-500";
          case "water":
            return "bg-blue-300";
          case "grass":
            return "bg-green-300";
          case "bug":
            return "bg-lime-300";
          case "normal":
            return "bg-gray-300";
          case "poison":
            return "bg-purple-300";
          case "electric":
            return "bg-yellow-300";
          case "ground":
            return "bg-yellow-600";
          case "psychic":
            return "bg-red-300";
          case "ghost":
            return "bg-violet-400";
          case "rock":
            return "bg-stone-400";
          case "fairy":
            return "bg-red-200 text-black";
          case "ice":
            return "bg-cyan-200";
          case "steel":
            return "bg-slate-400";
          case "dragon":
            return "bg-indigo-400";
          case "dark":
            return "bg-stone-500";
        }
      };
    
      const iconTypes = {
        fire: <FaFire className="w-4 h-4" />,
        water: <GiWaterDrop className="w-4 h-4" />,
        flying: <GiFluffyWing className="w-4 h-4" />,
        grass: <FaLeaf className="w-4 h-4" />,
        poison: <FaSkullCrossbones className="w-4 h-4" />,
        bug: <IoIosBug className="w-4 h-4" />,
        normal: <FaRegDotCircle className="w-4 h-4" />,
        electric: <GiElectric className="w-4 h-4"/>,
        ground: <GiFallingRocks className="w-4 h-4"/>,
        fairy: <FaStar className="w-4 h-4"/>,
        fighting: <FaFistRaised className="w-4 h-4"/>,
        ice: <FaSnowflake className="w-4 h-4"/>,
        rock: <GiStoneSphere className="w-4 h-4"/>,
        psychic: <BsHypnotize className="w-4 h-4"/>,
        dragon: <FaDragon className="w-4 h-4"/>,
        steel: <FaGear className="w-4 h-4"/>
      }
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
            return "bg-red-500";
          case "ghost":
            return "bg-violet-500";
          case "rock":
            return "bg-stone-500";
          case "fighting":
            return "bg-red-500";
          case "ice":
            return "bg-cyan-500";
          case "flying":
            return "bg-gray-200 !text-black";
          case "fairy":
            return "bg-red-400 text-black";
          case "steel":
            return "bg-slate-500";
          case "dragon":
            return "bg-zinc-600";
        }
      };
  return (
    <>
    </>
  )
}
