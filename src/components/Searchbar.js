import React, { useState } from "react";
import { searchPokemon } from "./Api";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onButtonClickHandler = () => {
    onSearchHandler(search);
    setPokemon("");
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="Searchbar-container">
      <div className="Searchbar">
        <input
          name="navBar"
          placeholder="Buscas o Pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <Link to="/PokemonTela" state={pokemon}>
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
              </div>
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Searchbar;
