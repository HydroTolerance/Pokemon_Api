import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import Header from "../../components/Header";

import {
  FaFire,
  FaLeaf,
  FaSkullCrossbones,
  FaRegDotCircle,
  FaStar,
  FaFistRaised,
  FaSnowflake,
  FaDragon,
} from "react-icons/fa";
import {
  GiFluffyWing,
  GiWaterDrop,
  GiElectric,
  GiFallingRocks,
  GiStoneSphere,
} from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { IoIosBug } from "react-icons/io";
import { BsHypnotize } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import Other from "../Other";
import { FaGhost } from "react-icons/fa6";

export default function Gen1({ post }) {
  const [posts, setPosts] = useState([]);
  const [postSearch, setSearch] = useState("");
  const [postDropdown, setdropDown] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1030`
      );
      const pokemonDetails = await Promise.all(
        response.data.results.map((result) =>
          axios.get(result.url).then((response) => response.data)
        )
      );
      setPosts(pokemonDetails);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSearch = (e) => {
    try {
      const searchPokemons = e.target.value;
      setSearch(searchPokemons);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };
  const hanldeDropdown = (e) => {
    const dropdownPokemons = e.target.value;
    setdropDown(dropdownPokemons);
  };
  const filteredPokemon = posts.filter(
    (post) =>
      (post.name.toLowerCase().includes(postSearch.toLowerCase()) ||
        post.id.toString().includes(postSearch)) &&
      (postDropdown === "" ||
        post.types.some((type) => type.type.name === postDropdown))
  );


  useEffect(() => {
    fetchData();
  }, []);

  const iconTypes = {
    fire: <FaFire className="w-4 h-4" />,
    water: <GiWaterDrop className="w-4 h-4" />,
    flying: <GiFluffyWing className="w-4 h-4" />,
    grass: <FaLeaf className="w-4 h-4" />,
    poison: <FaSkullCrossbones className="w-4 h-4" />,
    bug: <IoIosBug className="w-4 h-4" />,
    normal: <FaRegDotCircle className="w-4 h-4" />,
    electric: <GiElectric className="w-4 h-4" />,
    ground: <GiFallingRocks className="w-4 h-4" />,
    fairy: <FaStar className="w-4 h-4" />,
    fighting: <FaFistRaised className="w-4 h-4" />,
    ice: <FaSnowflake className="w-4 h-4" />,
    rock: <GiStoneSphere className="w-4 h-4" />,
    psychic: <BsHypnotize className="w-4 h-4" />,
    dragon: <FaDragon className="w-4 h-4" />,
    steel: <FaGear className="w-4 h-4" />,
    dark: <MdDarkMode className="w-4 h-4" />,
    ghost: <FaGhost className="w-4 h-4" />,
  };
  const getColorText = (type) => {
    switch (type) {
      case "fire":
        return "bg-orange-500 customFireShadow";
      case "water":
        return "bg-blue-500 customWaterShadow";
      case "grass":
        return "bg-green-500 customGrassShadow";
      case "bug":
        return "bg-lime-500 customBugShadow";
      case "normal":
        return "bg-gray-500 customNormalShadow";
      case "poison":
        return "bg-purple-500 customPoisonShadow";
      case "electric":
        return "bg-yellow-500 customElectricShadow";
      case "ground":
        return "bg-yellow-700 customGroundShadow";
      case "psychic":
        return "bg-pink-500 customPsychicShadow";
      case "ghost":
        return "bg-violet-600 customGhostShadow";
      case "rock":
        return "bg-stone-500 customRockShadow";
      case "fighting":
        return "bg-red-600 customFightShadow";
      case "ice":
        return "bg-cyan-500 customIceShadow";
      case "flying":
        return "bg-gray-400 customFlyShadow";
      case "fairy":
        return "bg-red-400 customFairyShadow";
      case "steel":
        return "bg-slate-500 customSteelShadow";
      case "dragon":
        return "bg-indigo-600 customDragonShadow";
      case "dark":
        return "bg-zinc-600 customDarkShadow";
    }
  };
  return (
    <>
      <Layout>
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <img
              src="https://media.tenor.com/SH31iAEWLT8AAAAj/pikachu-running.gif"
              alt=""
              className="h-20 w-30"
            />
          </div>
        ) : (
          <div>
            <Header handleSearch={handleSearch}></Header>
              {filteredPokemon.length === 0 && (
                <div>
                  <h3 className="text-center mt-80 text-gray-600 ">No pokemon found</h3>
                </div>
              )}
            <div className="flex flex-wrap justify-center">

              {filteredPokemon.length > 0 && (
                <>
                  {filteredPokemon.map((post, index) => (
                    <div
                      key={index}
                      className={`block px-3 py-3 w-42 border relative cursor-pointer transition-colors hover:bg-gray-400 hover:bg-opacity-50 duration-700  `}
                    >
                      <Link to={`/pokemon/${post.name}`} className="relative ">
                        <div className="flex justify-between ">
                          <div className="text-gray-600">
                            <p className="text-2xl ">{post.id}</p>
                            <p className=" ">
                              {post.name.charAt(0).toUpperCase() +
                                post.name.slice(1)}
                            </p>
                          </div>
                          <div
                            className={`flex flex-col`}
                          >
                            {post.types.map((post) => (
                              <div
                                className={`${getColorText(
                                  post.type.name
                                )} rounded-full text-white shadow-md p-1 mb-1`}
                              >
                                <span className="">
                                  {iconTypes[post.type.name]}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
                        alt=""
                        className="h-32 w-32 mx-auto"
                      />
                        
                      </Link>
                    </div>
                  ))}
                  </>
              )}
            </div>
            </div>
        )}
        
      </Layout>
    </>
  );
}

const SidebarIcon = ({ icon }) => <div className="text-black">{icon}</div>;
