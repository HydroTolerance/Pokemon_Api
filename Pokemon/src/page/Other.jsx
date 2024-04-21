import React from "react";
import { useState, useEffect } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";

const Other = ({ post, onClose }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const speciesResponse = await axios.get(post.species.url);
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        const { chain } = evolutionChainResponse.data;
        setEvolutionChain(parseEvolutionChain(chain));
      } catch (error) {
        console.error("Error fetching evolution chain:", error);
      }
    };

    fetchEvolutionChain();
  }, [post.species.url]);

  const parseEvolutionChain = (chain) => {
    let evolution = [];
    while (chain) {
      evolution.push({
        name: chain.species.name,
        id: chain.species.url.split("/")[6],
      });
      chain = chain.evolves_to[0];
    }
    return evolution;
  };
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
  
  const [activeTab, setActiveTab] = useState(0);
  const TabLink = (index) => {
    setActiveTab(index);
  };
  const Measurement  = (base_stat) => {
    if (base_stat > 100){
      return '100';
    } else {
      return base_stat;
    }
  }
  const Ranking = (index) => {
    if (index === 0){
      return `First Evolution`
    } else if (index === 1){
      return 'Second Evolution'
    } else if (index === 2) {
      return 'Final Evolution'
    } else {
      return 'No Evolution'
    }
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative w-[600px] max-w-full h-[600px] bg-white rounded-xl p-4 z-50  flex flex-col mx-2"
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
        <p className="text-center text-2xl my-2">
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
        <div>
        <Tabs >
          <TabList className={'flex mt-4 justify-center'} >
            <Tab className={`border-0 rounded-none me-2 focus:outline-none ${activeTab === 0 ? 'text-blue-500 font-bold border-b mb-3 border-blue-500' : 'text-gray-500'}`} onClick={() => TabLink(0)}>About</Tab>
            <Tab className={`border-0 rounded-none mx-2 focus:outline-none ${ activeTab === 1 ? 'text-blue-500 font-bold border-b mb-3 border-blue-500' : 'text-gray-500'}`} onClick={() => TabLink(1)}>Base Stats</Tab>
            <Tab className={`border-0 rounded-none mx-2 focus:outline-none ${ activeTab === 2 ? 'text-blue-500 font-bold border-b mb-3 border-blue-500' : 'text-gray-500'}`} onClick={() => TabLink(2)}>Evolution</Tab>
            <Tab className={`border-0 rounded-none mx-2 focus:outline-none ${ activeTab === 3 ? 'text-blue-500 font-bold border-b mb-3 border-blue-500' : 'text-gray-500'}`} onClick={() => TabLink(3)}>Moves</Tab>
          </TabList>
          <TabPanel className={`px-10 mt-4`}>
          <div className="flex justify-evenly">
            <p className="flex flex-col">
              <span className="text-gray-500 mb-1">Weight</span>
              <span className="text-gray-500  mb-1">Height</span>
              <span className="text-gray-500  mb-1">Abilities:</span>
            </p>
            <p className="grid">
              <span >{Math.round((post.weight * 2.20462262185)* 100) / 100 } lbs ({(parseInt(post.weight) / 10).toFixed(1)} kg)</span>
              <span>{parseFloat((post.height *  3.28 /10)).toFixed(1).slice(0, 1) + `'` + parseFloat((post.height *  3.28 /10)).toFixed(1).slice(2) } Feet ({post.height / 10} m)</span>
              <span>
      {post.abilities.map((ability, index) => (
        <span key={index}>
          {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
          {index !== post.abilities.length - 1 && ', '}
        </span>
      ))}
    </span>
            </p>

          </div>
          </TabPanel>
          <TabPanel className={`mx-10`}>
            <div className="grid md:grid-cols-2">
              <div className=" text-gray-500">
                <p>HEALTH:</p>
              </div>
                <div class=" max-md:w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className={`bg-green-600 h-3.5 rounded-full relative`} style={{ width: `${Measurement(post.stats[0].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]"> {post.stats[0].base_stat} </div>
                  </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="me-3 text-gray-500">
                <p>ATTACK:</p>
              </div>
                <div class=" max-md:w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className={`bg-red-600 h-3.5 rounded-full relative`} style={{ width: `${Measurement(post.stats[1].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]"> {post.stats[1].base_stat} </div>
                  </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="me-3 text-gray-500">
                <p>SPECIAL ATTACK:</p>
              </div>
                <div class=" max-md:w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className={`bg-red-600 h-3.5 rounded-full relative`} style={{ width: `${Measurement(post.stats[2].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]"> {post.stats[2].base_stat} </div>
                  </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="me-3 text-gray-500">
                <p>SPECIAL DEFENSE:</p>
              </div>
                <div class=" max-md:w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className={`bg-blue-600 h-3.5 rounded-full relative`} style={{ width: `${Measurement(post.stats[3].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]"> {post.stats[3].base_stat} </div>
                  </div>
              </div>
            </div><div className="grid md:grid-cols-2">
              <div className="me-3 text-gray-500">
                <p>SPEED:</p>
              </div>
                <div class=" max-md:w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className={`bg-blue-600 h-3.5 rounded-full relative`} style={{ width: `${Measurement(post.stats[4].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]"> {post.stats[4].base_stat} </div>
                  </div>
              </div>
            </div>

          </TabPanel>
          <TabPanel>
              {/* Evolution panel */}
              <div className="flex flex-row justify-evenly ">
                {evolutionChain.map((evolution, index) => (
                  <div key={index}>
                    <div className="text-center">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${evolution.id}.png`}
                        alt=""
                        className="w-20 h-20 mx-auto mb-3"
                      />
                      <p className="font-bold">{evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</p>
                      <p>{evolution.description}</p>
                    </div>
                    <div>
                      {Ranking(index)}
                    </div>
                    
                  </div>
                ))}
              </div>
            </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
    </div>
      </div>
      
    </div>
  );
};

export default Other;
