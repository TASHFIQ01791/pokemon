import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCards";
import { SearchPokemon } from "./SearchPokemon";
import { LoadMoreButton } from "./LoadMoreButton";
import { fetchPokemonData } from "./fetchPokemonData ";

export const Pokemon = () => {
  // declaring all states
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Handling  API configuration
  /*METHOD -1 
  const getData = async () => {
    await fetchPokemonData(setPokemon, setLoading, setError); // Call the async function
  };
  useEffect(() => {
    getData();
  }, []);
  */

  /*
  {
    setPokemon: setPokemon,
    setLoading: setLoading,
    setError: setError
  }
  */

  // method 2
  useEffect(() => {
    fetchPokemonData({ setPokemon, setLoading, setError });
  }, []);

  // Search Fucntion
  const searchData = pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  // Handle Loading state
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }
  // Handle Error state
  if (error) {
    return <h1 className="error">{error.message}</h1>;
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon </h1>
        </header>
        {/* search pokemon  */}
        <SearchPokemon search={search} setSearch={setSearch} />

        {/* Pokemon list  */}
        <div className="cards">
          {/* {searchData.map((currPokemon) => ( */}
          {searchData.slice(0, visibleCount).map((currPokemon) => (
            <PokemonCards key={currPokemon.id} currPokemon={currPokemon} />
          ))}
        </div>
        {/* load more  */}
        <LoadMoreButton
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          totalLength={searchData.length}
        />
      </section>
    </>
  );
};
