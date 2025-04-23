export const PokemonCards = ({ currPokemon }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={currPokemon.sprites.other.dream_world.front_default}
            alt={currPokemon.name}
            className="pokemon-image"
          />
        </figure>
        <h1 className="pokemon-name">{currPokemon.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {currPokemon.types
              .map((currType) => {
                return currType.type.name;
              })
              .join(", ")}
            {/* {currPokemon.types.map((currType) => currType.type.name).join(", ")} */}
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info"><span>Height:</span>{currPokemon.height}</p>
          <p className="pokemon-info"><span>Weight:</span>{currPokemon.weight}</p>
          <p className="pokemon-info"><span>Speed:</span>{currPokemon.stats[5].base_stat}</p>
          <p className="pokemon-info"><span>Experience:</span>{currPokemon.base_experience}</p>
          <p className="pokemon-info"><span>Attack:</span>{currPokemon.stats[1].base_stat}</p>
          <div className="pokemon-info">
            <p>
              <span>Abilities:</span>
              {currPokemon.abilities
                .map((currAbilityInfo) => currAbilityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};
