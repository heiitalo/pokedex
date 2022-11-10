import React from "react";
import { useLocation } from "react-router-dom";

const PokemonTela = () => {
  const pokemon = useLocation();
  return (
    <div className="pokemon-tela">
      <div className="pokemon-card-tela">
        <div className="pokemomon-card-tela-header">
          <h1> {pokemon.state.name}</h1>
        </div>
        <div className="pokemon-card-tela-body">
          <div className="pokemon-tela-image">
            <img src={pokemon.state.sprites.other.home.front_default} />
          </div>
          <div className="pokemon-type">
            {pokemon.state.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text-tela">
                  <h3>{type.type.name}</h3>
                </div>
              );
            })}
          </div>
       </div>
      </div>
      <div className="pokemon-tela-moves">
        {pokemon.state.moves.map((move,index) =>{
            return (
                <div key={index} className="pokemon-tela-move">
                    <h3>{move.move.name}</h3>

                </div>
            )
        })}

      </div>
    </div>
  );
};

export default PokemonTela;
