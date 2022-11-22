import React from "react";
import { Link, useLocation } from "react-router-dom";

const PokemonTela = () => {
  const pokemon = useLocation();
  const pokemontypeArray = pokemon.state.types.map((type) => {
    return type.type.name;
  });
  const pokemontype = pokemontypeArray[0];
  if (pokemontype == "fire") {
    return (
      <div className="pokemon-tela-fire">
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
                  <div key={type.type.name} className="pokemon-type-text-tela">
                    <h3>{type.type.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pokemon-tela-moves">
          {pokemon.state.moves.map((move, index) => {
            return (
              <Link to="/PokemonMoveTela" state={move}>
                <div key={index} className="pokemon-tela-move">
                  <h3>{move.move.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "grass") {
    return (
      <div className="pokemon-tela-grass">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "water") {
    return (
      <div className="pokemon-tela-water">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "steel") {
    return (
      <div className="pokemon-tela-steel">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "dragon") {
    return (
      <div className="pokemon-tela-dragon">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "electric") {
    return (
      <div className="pokemon-tela-electric">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "fairy") {
    return (
      <div className="pokemon-tela-fairy">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "ghost") {
    return (
      <div className="pokemon-tela-ghost">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "ice") {
    return (
      <div className="pokemon-tela-ice">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "bug") {
    return (
      <div className="pokemon-tela-bug">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "fighting") {
    return (
      <div className="pokemon-tela-fighting">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "normal") {
    return (
      <div className="pokemon-tela-normal">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "rock") {
    return (
      <div className="pokemon-tela-rock">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "psychic") {
    return (
      <div className="pokemon-tela-psychic">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "dark") {
    return (
      <div className="pokemon-tela-dark">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "ground") {
    return (
      <div className="pokemon-tela-ground">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "poison") {
    return (
      <div className="pokemon-tela-poison">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (pokemontype == "flying") {
    return (
      <div className="pokemon-tela-flying">
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
          {pokemon.state.moves.map((move, index) => {
            return (
              <div key={index} className="pokemon-tela-move">
                <h3>{move.move.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default PokemonTela;
