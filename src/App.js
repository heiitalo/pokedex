import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { getPokemonData, getPokemons } from "./components/Api";

import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import PokemonTela from "./components/PokemonTela";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerpage = 28;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerpage, itensPerpage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerpage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  return (
    <Router>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route
          path="/"
          element={
            <Pokedex
              pokemons={pokemons}
              loading={loading}
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          }
        />
        <Route path="/PokemonTela" element={<PokemonTela />} />
      </Routes>
    </Router>
  );
}

export default App;
