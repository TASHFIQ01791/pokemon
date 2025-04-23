export const fetchPokemonData = async ({
  setPokemon,
  setLoading,
  setError,
}) => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
  try {
    const res = await fetch(API);
    const data = await res.json();
    //   console.log(data);

    //   api have inner api also
    const detailedPokemonData = data.results.map(async (currPokemon) => {
      const res = await fetch(currPokemon.url);
      const data = await res.json();
      // console.log(data);
      return data;
    });

    //   console.log(detailedPokemonData) --> Here, I fetch in details
    const detailedResponse = await Promise.all(detailedPokemonData);
    console.log(detailedResponse);
    setPokemon(detailedResponse);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
    setError(error);
  }
};
