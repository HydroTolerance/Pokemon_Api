import React, { useEffect, useState, version } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function PokemonCard() {
  const { name } = useParams();
  const [posts, setPosts] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [flavor, setFlavor] = useState(null);
  const [moves, setMoves] = useState(null);

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

      const movesData = await Promise.all(
        pokemonData.moves.map(async (move) => {
          const moveResponse = await axios.get(move.move.url);
          return moveResponse.data;
        })
      );
      setMoves(movesData);

      const flavorText = speciesResponse.data.flavor_text_entries[8].flavor_text;
      setFlavor(flavorText);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderEvolutionChain = (chain) => {
    if (!chain) return null;
    return (
      <div className="md:flex items-center">
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chain.species.url.split("/")[6]}.png`}
            alt={chain.species.name}
            className="w-40 h-40 mx-auto"
          />
          <p className="mx-2 text-center">
            {chain.species.name.charAt(0).toUpperCase() +
              chain.species.name.slice(1)}
          </p>
        </div>

        {chain.evolves_to.length > 0 &&
          chain.evolves_to.map((evolution, index) => (
            <div key={index} className="md:ms-10">
              <div></div>
              {renderEvolutionChain(evolution)}
            </div>
          ))}
      </div>
    );
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
        return "bg-orange-400";
      case "water":
        return "bg-blue-400";
      case "grass":
        return "bg-green-400";
      case "bug":
        return "bg-lime-400";
      case "normal":
        return "bg-gray-400";
      case "poison":
        return "bg-purple-400";
      case "electric":
        return "bg-yellow-400";
      case "ground":
        return "bg-yellow-600 ";
      case "psychic":
        return "bg-pink-400";
      case "ghost":
        return "bg-violet-400";
      case "rock":
        return "bg-stone-400";
      case "fighting":
        return "bg-red-500";
      case "ice":
        return "bg-cyan-400";
      case "flying":
        return "bg-gray-200 !text-black";
      case "fairy":
        return "bg-red-400 text-black";
      case "steel":
        return "bg-slate-400";
      case "dragon":
        return "bg-indigo-400";
      case "dark":
        return "bg-zinc-400";
    }
  };
  return (
    <>
      {posts ? (
        <div>
              <div className={`${posts.types .map((type) => getColorText(type.type.name)) .join(" ")} sticky top-0 z-20 shadow-2xl`}>
      <div className="py-1">
        <div className="flex justify-between md:mx-8 max-md:mx-6 items-center">
          <div>
            <div className=" relative">
              <Link to={`/Gen1`}><IoArrowBack className="text-2xl text-white"/></Link>
            </div>
          </div>
          <div className="my-auto text-white text-4xl max-md:hidden">PokéDex</div>
        </div>
      </div>
    </div>

        <div className="mx-10">
          <h2 className="text-center text-4xl mb-10 text-gray-600">
            {posts.name.toUpperCase()}
          </h2>
          <div className="grid md:grid-cols-3 text-sm">
            <div className="m-auto">
              <table>
                <tbody>
                  <tr>
                    <td className="pb-3">
                      <span className="">ID</span>
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap">
                      <span># {posts.id} </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      <span className="">WEIGHT</span>
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap">
                      <span>
                        {" "}
                        {(
                          Math.round(posts.weight * 2.20462262185 * 100) / 1000
                        ).toFixed(1)}
                        lbs ( {(parseInt(posts.weight) / 10).toFixed(1)} kg){" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      {" "}
                      <span className="">HEIGHT</span>{" "}
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap">
                      {" "}
                      <span>
                        {" "}
                        {parseFloat((posts.height * 3.28) / 10)
                          .toFixed(1)
                          .slice(0, 1) +
                          `'` +
                          parseFloat((posts.height * 3.28) / 10)
                            .toFixed(1)
                            .slice(2)}{" "}
                        Feet ({posts.height / 10} m){" "}
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      {" "}
                      <span className=" mb-1">ABILITIES</span>{" "}
                    </td>
                    <td className="ps-10 pb-3 ">
                      {" "}
                      <span>
                        {posts.abilities.map((ability, index) => (
                          <div key={index}>
                            {" "}
                            {ability.ability.name.charAt(0).toUpperCase() +
                              ability.ability.name.slice(1)}{" "}
                            {index !== posts.abilities.length - 1 && ", "}{" "}
                          </div>
                        ))}{" "}
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      {" "}
                      <span className=" mb-1">TYPE</span>{" "}
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap">
                      <div className="flex">
                        {posts.types.map((type, index) => (
                          <div
                            className={` text-center rounded px-2 me-3 text-white ${getColorText(
                              type.type.name
                            )}`}
                          >
                            <div key={type.type.name}>
                              {type.type.name.charAt(0).toUpperCase() +
                                type.type.name.slice(1)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      {" "}
                      <span className="whitespace-nowrap mb-1">
                        BASE EXP
                      </span>{" "}
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap">
                      {" "}
                      <span>{posts.base_experience}</span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-3">
                      {" "}
                      <span className=" mb-1">FORMS</span>{" "}
                    </td>
                    <td className="ps-10 pb-3 whitespace-nowrap text-white">
                      {" "}
                      <span
                        className={`${posts.types
                          .map((type) => getColorText(type.type.name))
                          .join(" ")} px-3 rounded text-center`}
                      >
                        {posts.name.charAt(0).toUpperCase() + posts.name.slice(1)}
                      </span>{" "}
                    </td>
                  </tr>
                </tbody>
                
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
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[0].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[0].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[1].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[1].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[2].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[2].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[3].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[3].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[4].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[4].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" max-md:w-full bg-gray-200 rounded h-3.5 dark:bg-gray-700 mb-5">
                    <div
                      className={`${posts.types
                        .map((type) => getColorText(type.type.name))
                        .join(" ")} h-3.5 rounded relative`}
                      style={{
                        width: `${Measurement(posts.stats[5].base_stat)}%`,
                      }}
                    >
                      <div className="text-xs text-white absolute right-0 pe-2 top-[-1px]">
                        {" "}
                        {posts.stats[5].base_stat}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <div className="flex justify-center mb-3">
                <h3 className={`text-xl px-3 rounded !text-white ${posts.types .map((type) => getColorText(type.type.name)) .join(" ")}`}>DESCRIPTION</h3>
              </div>
              <div className="lg:px-52 text-center">
                <h2>{flavor}</h2>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex justify-center`}>
              <h3 className={`text-xl text-center px-3 rounded !text-white mb-2 ${posts.types .map((type) => getColorText(type.type.name)) .join(" ")}`}>EVOLUTION CHAIN</h3>
            </div>
          {evolutionChain && (
            <div className="mt-4">
              <div className="flex justify-center">
                {renderEvolutionChain(evolutionChain.chain)}
              </div>
            </div>
          )}
          </div>
          <div className="mb-10 mt-10">
          <div className={`flex justify-center mb-3`}>
              <h3 className={`text-xl text-center px-3 rounded !text-white mb-2 ${posts.types .map((type) => getColorText(type.type.name)) .join(" ")}`}>MOVE POOL</h3>
            </div>
          <table className="text-left w-full">
              <thead className={` ${posts.types .map((type) => getColorText(type.type.name)) .join(" ")} bg-gray-400 flex text-white w-full rounded-t-lg`}>
                <tr  class="flex w-full p-2 !text-white">
                  <th className=" w-1/2">Move</th>
                  <th className="w-1/4"><span className="max-lg:hidden">Level Up Acquired</span><span className="lg:invisible">Level...</span></th>
                  <th className="w-1/4">PP</th>
                  <th className="w-1/4">Power</th>
                  <th className="w-1/4"><span className="max-lg:hidden">Priority</span><span className="lg:invisible">Pri...</span></th>
                  <th className="w-1/4"><span className="max-lg:hidden">Accuracy</span><span className="lg:invisible">Acc...</span></th>
                </tr>
              </thead>
              <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: '40vh'}}>
                {posts.moves.sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at).filter(move => move.version_group_details.length > 0 && move.version_group_details[0].level_learned_at > 0).map((move, index) => (
                  <tr key={index} className="flex w-full mb-4">
                    <td className="p-2 w-1/2 max-md:text-xs">{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</td>
                    <td className="p-2 w-1/4 max-md:text-xs">
                      {move.version_group_details[0].level_learned_at}
                    </td>
                    <td  className="p-2 w-1/4 max-md:text-xs">
                    {moves && moves[index] && (
                        <div>
                          <span>{moves[index].pp}</span>
                        </div>
                      )}
                    </td>
                    <td  className="p-2 w-1/4 max-md:text-xs">
                    {moves && moves[index] && (
                        <div>
                          <span>{moves[index].power || '-'}</span>
                        </div>
                      )}
                    </td>
                    <td  className="p-2 w-1/4 max-md:text-xs">
                    {moves && moves[index] && (
                        <div>
                          <span>{moves[index].priority || '-'}</span>
                        </div>
                      )}
                    </td>
                    <td  className="p-2 w-1/4 max-md:text-xs">
                    {moves && moves[index] && (
                        <div>
                          <span>{moves[index].accuracy || '-'}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                
                </tbody>
            </table>
          </div>
        </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs"
            alt=""
            className="h-40 w-40"
          />
        </div>
      )}
    </>
  );
}

export default PokemonCard;
