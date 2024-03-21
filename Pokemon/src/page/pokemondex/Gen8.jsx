import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../layout/Layout";
import { IoSearch } from "react-icons/io5";
import { FaFire, FaLeaf, FaSkullCrossbones, FaRegDotCircle, FaStar, FaFistRaised, FaSnowflake, FaDragon} from "react-icons/fa";
import { GiFluffyWing, GiWaterDrop,GiElectric, GiFallingRocks, GiStoneSphere } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { IoIosBug } from "react-icons/io";
import { BsHypnotize } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

export default function Gen8() {
  const [posts, setPosts] = useState([]);
  const [postSearch, setSearch] = useState("");
  const [postDropdown, setdropDown] = useState("");
  const [loading, setloading] = useState(true)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=96&offset=809`
      );
      const pokemonDetails = await Promise.all(
        response.data.results.map((result) =>
          axios.get(result.url).then((response) => response.data)
        )
      );

      setPosts(pokemonDetails);
      setloading()
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
    (post.name.toLowerCase().includes(postSearch.toLowerCase()) || post.id.toString().includes(postSearch)) &&
      (postDropdown === "" ||
        post.types.some((type) => type.type.name === postDropdown))
  );
    
  useEffect(() => {
    fetchData();
  }, []);

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
        return "bg-zinc-500 text-white";
        case "fighting":
          return "bg-red-400 text-white";
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
    steel: <FaGear className="w-4 h-4"/>,
    dark: <MdDarkMode className="w-4 h-4" />
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
        return "bg-violet-600";
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
        return "bg-indigo-600";
      case "dark":
        return "bg-zinc-600";
    }
  };
  return (
    <>
      <Layout>
      {loading ? (
          <div className="fixed top-72 left-1/2 mx-auto">
            <img src="https://media.tenor.com/SH31iAEWLT8AAAAj/pikachu-running.gif" alt="" />
            <p className="text-center my-3 ml-12 text-xl">Loading ...</p>
          </div>
        ) : (
        <div className="p-4 md:ml-64">
          <div className="flex justify-end mb-8">
            <div className="hover:border-red-500 relative mx-3">
              <select
                value={postDropdown}
                onChange={hanldeDropdown}
                className="border rounded p-[9px] my-3 min-w-80 focus:border-red-500 focus:outline-none "
              >
                <option value="" hidden>Filter Type...</option>
                <option value=""><span><SidebarIcon icon={<IoSearch size={"28"} />}/></span>All Pokemon</option>
                <option value="bug">Bug</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="electric">Electric</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="fire">Fire</option>
                <option value="flying">Flying</option>
                <option value="ghost">Ghost</option>
                <option value="poison">Grass</option>
                <option value="ground">Ground</option>
                <option value="ice">Ice</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="steel">Steel</option>
                <option value="water">Water</option>
              </select>
            </div>
            <div className=" hover:border-red-500 relative">
              <SidebarIcon icon={<IoSearch size={"28"} className=" w-8 h-8 absolute ml-72 flex bottom-10 top-4 right-3 justify-end items-end text-gray-400 pointer-events-none" />}/>
              <input type="text" value={postSearch} onChange={handleSearch} className="border rounded p-[7.6px] my-3 min-w-80 focus:border-red-500 focus:outline-none" placeholder="Search Pokemon.."/>
            </div>
          </div>

          {filteredPokemon.length === 0 && (
            <div>
              <h3 className="text-center text-gray-600">No pokemon found</h3>
            </div>
          )}
          {filteredPokemon.length > 0 && (
            <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {filteredPokemon.map((post, index) => (
                <div
                  key={index}
                  className={`border  text-center rounded-lg relative  my-5 shadow-lg ${getColorBackground(post.types[0].type.name )} `}
                >
                  <img
                    src={post.sprites.other.home.front_default}
                    alt=""
                    className="h-48 w-48 absolute mx-auto bottom-32 right-0 left-0 z-10"
                    />
                  <div className="relative py-7 overflow-hidden">
                  <CgPokemon className="h-80 w-80 absolute opacity-20 text-white mx-auto top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                  <div dir="rtl"></div>
                  <div className="pt-24 pb-3 z-10">
                    
                    <p className="text-xl font-medium mb-2">
                      •{post.name.charAt(0).toUpperCase() + post.name.slice(1)}•
                    </p>
                    <p className="">#{("00" + post.id).slice(-3)}</p>
                  </div>
                  <div
                    className={`flex justify-center align-center text-center text-nowrap `}
                  >
                    {post.types.map((post) => (
                      
                      <p className={`${getColorText(post.type.name)} flex justify-center items-center rounded text-white px-4 mx-3 py-1 z-10 shadow-md`}>
                        <span className="mr-1">{iconTypes[post.type.name]}</span>
                        {post.type.name.charAt(0).toUpperCase() + post.type.name.slice(1)}
                      </p>
                    ))}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        )}
      </Layout>
    </>
  );
}

const SidebarIcon = ({ icon }) => <div className="text-black">{icon}</div>;
