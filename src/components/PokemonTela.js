import React from "react";
import { useLocation } from "react-router-dom";

const PokemonTela = () => {
  const pokemon = useLocation();
  return (
    <div>
        {pokemon.state.name}
    </div>
  )
};

export default PokemonTela;
