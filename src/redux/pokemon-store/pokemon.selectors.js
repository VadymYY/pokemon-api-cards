export const selectPokemonsList = (state) => state?.pokemon?.pokemons;

export const selectPokemonsCount = (state) => state?.pokemon?.count;
export const selectPokemonsNext = (state) => state?.pokemon?.next;
export const selectPokemonsPrevious = (state) => state?.pokemon?.previous;

export const selectFilteredPokemons = (state) =>
    state?.pokemon?.filteredPokemons;

export const selectCurrentPokemonData = (state) =>
    state?.pokemon?.currentPokemonData;
