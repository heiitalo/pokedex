import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    console.log("props", props)
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClick = () => {
        if(page >0){
            setPage(page-1)
        }
    }
    const onRightClick = () => {
        if(page+1 != totalPages) {
            setPage(page+1)
            console.log("avançar", page)
        }
    }
    console.log("pokemons", pokemons)
    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex!</h1>
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClick}
                    onRightClick={onRightClick}
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default Pokedex;