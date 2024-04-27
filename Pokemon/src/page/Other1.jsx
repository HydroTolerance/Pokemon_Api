import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Other1() {
  const { name } = useParams();
  const [posts, setPosts] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [eggGroup, setEggGroup] = useState(null);

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

      const eggGroupsUrl = speciesResponse.data.egg_groups.map(
        (eggGroup) => eggGroup.url
      );
      const eggGroupsResponses = await Promise.all(
        eggGroupsUrl.map((url) => axios.get(url))
      );
      const eggGroupsData = eggGroupsResponses.map((response) => response.data);
      setEggGroup(eggGroupsData);
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
  return (
    <>
      {posts ? (
        <div>
          <h2 className="text-center text-4xl text-gray-500">
            {posts.name.toUpperCase()}
          </h2>
          <div className="grid md:grid-cols-3 text-sm">
            <div className="m-auto">
              <table>
              <tr className="">
                <td className="pb-3"><span className="text-gray-500">WEIGHT</span></td>
                <td className="ps-10 pb-3 text-xs whitespace-nowrap"><span> {(Math.round(posts.weight * 2.20462262185 * 100) / 1000).toFixed(1)}lbs ( {(parseInt(posts.weight) / 10).toFixed(1)} kg) </span></td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500">HEIGHT</span> </td>
                <td className="ps-10 pb-3  text-xs whitespace-nowrap"> <span> {parseFloat((posts.height * 3.28) / 10).toFixed(1).slice(0, 1) +`'` + parseFloat((posts.height * 3.28) / 10) .toFixed(1) .slice(2)}{" "} Feet ({posts.height / 10} m) </span> </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500  mb-1">ABILITIES</span> </td>
                <td className="ps-10 pb-3 text-xs whitespace-nowrap"> <span> {posts.abilities.map((ability, index) => ( <span key={index}> {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)} {index !== posts.abilities.length - 1 && ", "} </span> ))} </span> </td>
              </tr>
              <tr>
                <td className="pb-3 text-xs"> <span className="text-gray-500  mb-1">BASE EXP</span> </td>
                <td className="ps-10 pb-3 text-xs whitespace-nowrap"> <span>{posts.base_experience}</span> </td>
              </tr>
              <tr>
                <td className="pb-3"> <span className="text-gray-500  mb-1">FORMS</span> </td>
                <td className="ps-10 pb-3 text-xs whitespace-nowrap"> <span>{posts.name.charAt(0).toUpperCase() + posts.name.slice(1)}</span> </td>
              </tr>
            </table>
          </div>
          <div className="mx-auto">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${posts.id}.png`}
              
            />
          </div>
          <div className="my-auto w-auto mx-4">
            <div className="">
              <p>HEALTH</p>
              <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700">
                <div className={`bg-green-600 h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[0].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                    {" "}
                    {posts.stats[0].base_stat}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>HEALTH</p>
              <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700">
                <div className={`bg-green-600 h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[1].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                    {" "}
                    {posts.stats[1].base_stat}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>HEALTH</p>
              <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700">
                <div className={`bg-green-600 h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[2].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                    {" "}
                    {posts.stats[2].base_stat}{" "}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p>HEALTH</p>
              <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700">
                <div className={`bg-green-600 h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[3].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                    {" "}
                    {posts.stats[3].base_stat}{" "}
                  </div>
                </div>
              </div>
            </div>

            <div>
            <span>HEALTH</span>
              <div class=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700">
                <div className={`bg-green-600 h-3.5 rounded relative`} style={{ width: `${Measurement(posts.stats[4].base_stat)}%` }}>
                  <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                    {" "}
                    {posts.stats[4].base_stat}{" "}
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
      <div>
        {eggGroup ? (
          <ul>
            {eggGroup.map((egg, index) => (
              <li key={index}>{eggGroup.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Other1;
