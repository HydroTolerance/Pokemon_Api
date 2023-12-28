import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [postSearch, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=153`
      );
      const results = response.data.results;
      const pokemonDetails = await Promise.all(
        results.map(async (result) =>
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
      case 'fire':return 'bg-orange-300';
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
    }
  }
  return (
    <>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className=" flex justify-end items-end hover:border-red-500 relative">
          <SidebarIcon icon={<IoSearch size={'28'} className=" w-8 h-8 absolute ml-72 flex bottom-10 top-4 right-3 justify-end items-end text-gray-400"/>}/>
            <input
              type="text"
              value={postSearch}
              onChange={handleSearch}
              className="border rounded p-2 my-3 min-w-80 focus:border-red-500 focus:outline-none focus:ring-0"
              placeholder="Search Pokemon.."/>
          </div>
          <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-2">
            {filteredPokemon.map((post, index) => (
              <div key={index} className={`border p-4 text-center rounded-lg ${getColorBackground(post.types[0].type.name)}`}>
                <div>Pokemon Number: {index + 1}</div>
                
                <div>Name: {post.name}</div>
                <div>
                  Types:{" "}
                  {post.types.map((post, i) => (
                    <span key={i}>{post.type.name} </span>
                  ))}
                </div>
                <div>
                  Abilites:{" "}
                  {post.abilities.map((post, i) => (
                    <span key={i}>{post.ability.name}</span>
                  ))}
                </div>
                <div>
                  <img
                    src={post.sprites.other.dream_world.front_default}
                    alt=""
                    className="h-40 w-40 mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
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