import React from "react";
import { Link,  } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("pokemon favoritado");
  };
  const heart = "❤";
  return (
    <Link to="/PokemonTela" state={pokemon} >
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
