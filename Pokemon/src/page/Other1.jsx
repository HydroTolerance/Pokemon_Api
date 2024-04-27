import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Other1() {
  const { name } = useParams();
  const [diary, setDiary] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [eggGroup, setEggGroup] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonData = response.data;
      setDiary(pokemonData);

      const speciesUrl = pokemonData.species.url;
      const speciesResponse = await axios.get(speciesUrl);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
      const evolutionChainResponse = await axios.get(evolutionChainUrl);
      setEvolutionChain(evolutionChainResponse.data);

      const eggGroupsUrl = speciesResponse.data.egg_groups.map(eggGroup => eggGroup.url);
        const eggGroupsResponses = await Promise.all(eggGroupsUrl.map(url => axios.get(url)));
        const eggGroupsData = eggGroupsResponses.map(response => response.data);
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

  return (
    <div>
      {diary ? (
        <div>
          <h2>{diary.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${diary.id}.png`}
            alt={diary.name}
          />
          <h3>Evolution Chain:</h3>
          {renderEvolutionChain()}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        {eggGroup ? (
            <ul>
                {eggGroup.map((egg, index) => (
                    <li key={index}>
                                        {eggGroup.name}
                    </li>
                ))}

            </ul>
        )
        : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  );
}

export default Other1;
