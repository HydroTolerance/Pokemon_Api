import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Other = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [data, setPosts] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPosts(response.data);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data && (
        <div>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Other;
