import React, { useState } from "react";
import { searchPokemon } from "./Api";

const Searchbar = () => {
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
        setPokemon("")
 
    }

    const onSearchHandler  = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      //  console.log(result)
      }
      console.log(pokemon)
    return (
        <div className="Searchbar-container">
            <div className="Searchbar">
                <input name="navBar" placeholder="Buscas o Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar