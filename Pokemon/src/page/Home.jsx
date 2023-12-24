import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
      const results = response.data.results;
      const pokemonDetails = await Promise.all(results.map(async (result) => 
        axios.get(result.url).then(response => response.data)
      ));

      setPosts(pokemonDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
      <div class="grid grid-cols-5 gap-5 py">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 text-center">
            <div >ID: {index + 1}</div>
            <div>Name: {post.name}</div>
            <div>
              Types: {post.types.map((post, i) => (
                <span key={i}>{post.type.name} </span>
              ))}
            </div>
            <div>
                Abilites: {
                    post.abilities.map((post, i) =>(
                        <span key={i}>{post.ability.name}</span>
                    ))
                }
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
      </Layout>
    </>
  );
}
