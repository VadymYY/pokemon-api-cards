import { Dispatch } from 'react';

import axios, { AxiosResponse } from 'axios';

import { PokemonItem, PokemonResponse } from '../../../constants/pokemonTypes';

import { getMapedPokemonList } from '../../../helpers/requestMapping';

import { setFilteredPokemons } from '../../../redux/pokemon-store/pokemon.actions';

const useGetFilteredByTypePokemons = () => {
    const getPokemonsByType = (pokemonType: number): any => {
        // TODO: improve return
        return async (dispatch: Dispatch<any>) => {
            await axios
                .get<PokemonResponse>(`https://pokeapi.co/api/v2/type/${pokemonType}`)
                .then((response: AxiosResponse<any>) => {
                    const getPokemonList: any[] = response?.data?.pokemon?.map(
                        (pokemonWrapper: { pokemon: PokemonItem }) => {
                            return {
                                ...pokemonWrapper?.pokemon,
                            };
                        }
                    );

                    const mappedPokemonList: PokemonItem[] = getMapedPokemonList(getPokemonList);

                    return dispatch(setFilteredPokemons(mappedPokemonList));
                });
        };
    };

    return [getPokemonsByType];
};

export default useGetFilteredByTypePokemons;
