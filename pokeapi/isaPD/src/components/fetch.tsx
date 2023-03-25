
export const getPokemons = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
};

export const getCurrentPokemon = (currentPokemon) => {
    return fetch(currentPokemon);
};