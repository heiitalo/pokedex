import React from "react";
import {useLocation } from "react-router-dom";
import { getPokemonMove } from "./Api";




const PokemonMoveTela = () => {
const move = useLocation();
console.log(getPokemonMove(move.state.move.url))

    return(
        <div>
            
        </div>
    )

}

export default PokemonMoveTela