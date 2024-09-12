export const pokemonActions = {
    SET_POKEMONS: 'SET_POKEMONS',
    ADD_POKEMONS: 'ADD_POKEMONS',
    CLEAR_POKEMONS: 'CLEAR_POKEMONS',

    SET_NEXT_PREVIOUS_DATA: 'SET_NEXT_PREVIOUS_DATA',

    SET_FILTERED_POKEMONS: 'SET_FILTERED_POKEMONS',

    SET_CURRENT_POKEMON_DATA: 'SET_CURRENT_POKEMON_DATA',
    CLEAR_CURRENT_POKEMON_DATA: 'CLEAR_CURRENT_POKEMON_DATA',
};

export const clearCurrentPokemonData = (payload) => ({
    type: pokemonActions.CLEAR_CURRENT_POKEMON_DATA,
    payload,
});

export const setCurrentPokemonData = (payload) => ({
    type: pokemonActions.SET_CURRENT_POKEMON_DATA,
    payload,
});

export const setFilteredPokemons = (payload) => ({
    type: pokemonActions.SET_FILTERED_POKEMONS,
    payload,
});

export const setNextPreviousData = (payload) => ({
    type: pokemonActions.SET_NEXT_PREVIOUS_DATA,
    payload,
});

export const addPokemons = (payload) => ({
    type: pokemonActions.ADD_POKEMONS,
    payload,
});

export const setPokemons = (payload) => ({
    type: pokemonActions.SET_POKEMONS,
    payload,
});

export const clearPokemons = () => ({
    type: pokemonActions.CLEAR_POKEMONS,
});
