import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Other1() {
  const { name } = useParams();
  const [posts, setPosts] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [colorGroup, setColorGroups] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonData = response.data;
      setPosts(pokemonData);

      const speciesUrl = pokemonData.species.url;
      const speciesResponse = await axios.get(speciesUrl);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      const evolutionChainResponse = await axios.get(evolutionChainUrl);
      setEvolutionChain(evolutionChainResponse.data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderEvolutionChain = () => {
    if (!evolutionChain) {
      return <p>What to Render the Pokemon</p>;
    }
    const renderChain = (chain) => {
      const { species } = chain;
      const pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        species.url.split("/")[6]
      }.png`;

      return (
        <div key={species.name}>
          <img src={pokemonImgUrl} alt={species.name} />
          <p>{species.name}</p>
          {chain.evolves_to.length > 0 && (
            <div style={{ marginLeft: "20px" }}>
              {chain.evolves_to.map((subChain) => renderChain(subChain))}
            </div>
          )}
        </div>
      );
    };

    return renderChain(evolutionChain.chain);
  };
  const Measurement = (base_stat) => {
    if (base_stat > 100) {
      return "100";
    } else {
      return base_stat;
    }
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
  return (
    <>
      {posts ? (
        <div className="mx-10">
          <h2 className="text-center text-4xl text-gray-500">
            {posts.name.toUpperCase()}
          </h2>

          <div className="grid md:grid-cols-3 text-sm">
            <div className="m-auto">
              <table>
              <tr className="">
                <td className="pb-3"><span className="text-gray-500">ID</span></td>
                <td className="ps-10 pb-3 whitespace-nowrap"><span># {posts.id} </span></td>
              </tr>
              <tr className="">
                <td className="pb-3"><span className="text-gray-500">WEIGHT</span></td>
                <td className="ps-10 pb-3 whitespace-nowrap"><span> {(Math.round(posts.weight * 2.20462262185 * 100) / 1000).toFixed(1)}lbs ( {(parseInt(posts.weight) / 10).toFixed(1)} kg) </span></td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500">HEIGHT</span> </td>
                <td className="ps-10 pb-3 whitespace-nowrap"> <span> {parseFloat((posts.height * 3.28) / 10).toFixed(1).slice(0, 1) +`'` + parseFloat((posts.height * 3.28) / 10) .toFixed(1) .slice(2)}{" "} Feet ({posts.height / 10} m) </span> </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500  mb-1">ABILITIES</span> </td>
                <td className="ps-10 pb-3 "> <span>
                  
                   {posts.abilities.map((ability, index) => ( <span key={index}> {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)} {index !== posts.abilities.length - 1 && ", "} </span> ))} </span> </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500  mb-1">TYPE</span> </td>
                <td className="ps-10 pb-3 whitespace-nowrap">
                  <div className="flex">
                    {posts.types.map((type) => (
                      <p
                        className={` text-center rounded px-2 me-3 text-white ${getColorText(
                          type.type.name
                        )}`}
                      >
                        <div key={type.type.name}>
                          {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </div>
                      </p>
                    ))}
                  </div>

                </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500 whitespace-nowrap mb-1">BASE EXP</span> </td>
                <td className="ps-10 pb-3 whitespace-nowrap"> <span>{posts.base_experience}</span> </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500  mb-1">FORMS</span> </td>
                <td className="ps-10 pb-3 whitespace-nowrap"> <span className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} text-white px-3 rounded text-center`}>{posts.name.charAt(0).toUpperCase() + posts.name.slice(1)}</span> </td>
              </tr>
            </table>
          </div>
          <div className="mx-auto">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${posts.id}.png`}
              
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center flex-1">
              <div className="">
                    <p className="mb-3 me-9">HEALTH</p>
                    <p className="mb-4">ATTACK</p>
                    <p className="mb-4">DEFENCE</p>
                    <p className="mb-4">SP. ATTACK</p>
                    <p className="mb-4">SP. DEFENCE</p>
                    <p className="mb-4">SPEED</p>

                </div>
              <div className="flex-1">
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[0].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[0].base_stat}{" "}
                    </div>
                  </div>
                </div>
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[1].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[1].base_stat}{" "}
                    </div>
                  </div>
                </div>
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[2].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[2].base_stat}{" "}
                    </div>
                  </div>
                </div>
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[3].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[3].base_stat}{" "}
                    </div>
                  </div>
                </div>
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[4].base_stat)}%`, backgroundColor: `${colorGroup}` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[4].base_stat}{" "}
                    </div>
                  </div>
                </div>
                <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                  <div className={`${posts.types.map((type) => getColorText(type.type.name)).join(" ")} h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[5].base_stat)}%` }}>
                    <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                      {" "}
                      {posts.stats[5].base_stat}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          <div>
          </div>
            
          </div>
{/*           <div>
          <h3>Evolution Chain:</h3>
            {renderEvolutionChain()}
          </div> */}
        </div>


      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Other1;
