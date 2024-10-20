import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams(); // отримуємо параметр з URL
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        setPokemon(res.data);
      });
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* додайте інші деталі, які ви хочете показати */}
    </div>
  );
};

export default PokemonDetail;
