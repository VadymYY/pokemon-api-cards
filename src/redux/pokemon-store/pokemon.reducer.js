import { pokemonActions } from './pokemon.actions';

const pokemonInitialState = {
    pokemons: [],
    count: 0,
    next: null,
    previous: null,

    filteredPokemons: [],

    currentPokemonData: null,
};

export const pokemonReducer = (
    state = pokemonInitialState,
    { type, payload }
) => {
    switch (type) {
        case pokemonActions.CLEAR_CURRENT_POKEMON_DATA: {
            return {
                ...state,
                currentPokemonData: null,
            };
        }
        case pokemonActions.SET_CURRENT_POKEMON_DATA: {
            return {
                ...state,
                currentPokemonData: payload,
            };
        }

        case pokemonActions.SET_FILTERED_POKEMONS: {
            return {
                ...state,
                filteredPokemons: payload,
            };
        }

        case pokemonActions.SET_NEXT_PREVIOUS_DATA: {
            return {
                ...state,
                ...payload,
            };
        }

        case pokemonActions.ADD_POKEMONS: {
            return {
                ...state,
                pokemons: [...state?.pokemons, ...payload],
            };
        }

        case pokemonActions.SET_POKEMONS: {
            return {
                ...state,
                pokemons: payload,
            };
        }

        default: {
            return state;
        }
    }
};
