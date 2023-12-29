import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import { IoSearch } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";

export default function Gen1() {
  const [posts, setPosts] = useState([]);
  const [postSearch, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const pokemonDetails = await Promise.all(
        response.data.results.map((result) =>
          axios.get(result.url).then((response) => response.data)
        )
      );

      setPosts(pokemonDetails);
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
  const filteredPokemon = posts.filter((post) =>
    post.name.toLowerCase().includes(postSearch.toLowerCase())
    
  );
  
  useEffect(() => {
    fetchData();
  }, []);

  const getColorBackground = (type) => {
    switch (type) {
      case 'fire':return 'bg-orange-300 hover:bg-orange-500 hover:';
      case 'water':return 'bg-blue-300';
      case 'grass':return 'bg-green-300';
      case 'bug':return 'bg-lime-300';
      case 'normal':return 'bg-gray-300';
      case 'poison':return 'bg-purple-300';
      case 'electric':return 'bg-yellow-300';
      case 'ground':return 'bg-yellow-600';
      case 'psychic':return 'bg-red-300';
      case 'ghost':return 'bg-violet-400';
      case 'rock':return 'bg-stone-400';
      case 'fairy':return 'bg-red-200 text-black';
    }
  }

  const getColorText = (type) => {
    switch (type) {
      case 'fire':return 'bg-orange-500';
      case 'water':return 'bg-blue-500';
      case 'grass':return 'bg-green-500';
      case 'bug':return 'bg-lime-500';
      case 'normal':return 'bg-gray-500';
      case 'poison':return 'bg-purple-500';
      case 'electric':return 'bg-yellow-500';
      case 'ground':return 'bg-yellow-700 ';
      case 'psychic':return 'bg-red-500';
      case 'ghost':return 'bg-violet-500';
      case 'rock' :return 'bg-stone-500';
      case 'fighting':return 'bg-red-500';
      case 'flying':return 'bg-gray-200 text-black';
      case 'fairy':return 'bg-red-400 text-black';
    }
  }
  return (
    <>
      <Layout>
        <div className="p-4 md:ml-64">
          <div className=" flex justify-end items-end hover:border-red-500 relative">
          <SidebarIcon icon={<IoSearch size={'28'} className=" w-8 h-8 absolute ml-72 flex bottom-10 top-4 right-3 justify-end items-end text-gray-400"/>}/>
            <input
              type="text"
              value={postSearch}
              onChange={handleSearch}
              className="border rounded p-2 my-3 min-w-80 focus:border-red-500 focus:outline-none focus:ring-0"
              placeholder="Search Pokemon.."/>
          </div>
          {filteredPokemon.length === 0 && (
            <div>
              <h3 className="text-center text-gray-600">No pokemon found</h3>
            </div>
          )}
          {filteredPokemon.length > 0 && (
          <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {filteredPokemon.map((post, index) => (
              <div key={index} className={`border py-7 text-center rounded-lg relative my-5 shadow-lg ${getColorBackground(post.types[0].type.name)}`}>
                <div dir="rtl">
                </div>
                <div className="pt-24 pb-3">
                  <img
                    src={post.sprites.other.dream_world.front_default}
                    alt=""
                    className="h-36 w-36 absolute mx-auto bottom-36 right-0 left-0"
                  />
                  <p className="text-xl font-medium mb-2">•{post.name.charAt(0).toUpperCase() + post.name.slice(1)}•</p>
                  <p className="">#{("00" + (post.id)).slice(-3)}</p>
                </div>
                <div className={`flex justify-center align-center text-center`}>
                {post.types.map((post) => (
                  <p className={`${getColorText(post.type.name)} rounded text-white px-4 mx-3 py-1`}>
                      <SidebarIcon/>{post.type.name.charAt(0).toUpperCase() + post.type.name.slice(1)}
                  </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </Layout>
    </>
  );
}

const SidebarIcon = ({icon}) => (
  <div className="text-black">
  {icon}
  </div>

)