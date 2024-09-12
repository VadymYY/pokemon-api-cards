import { Dispatch } from 'react';
import { batch } from 'react-redux';

import axios, { AxiosResponse } from 'axios';

import { PokemonItem, PokemonResponse, RequestData } from '../../../constants/pokemonTypes';

import { getMapedPokemonList, getMapedRequestData } from '../../../helpers/requestMapping';

import {
    addPokemons,
    setNextPreviousData,
    setPokemons,
} from '../../../redux/pokemon-store/pokemon.actions';

const useGetPokemonListData = () => {
    const getPokemonData = (url: string | null = null, isNextData: boolean = false): any => {
        // TODO: improve return
        return async (dispatch: Dispatch<any>) => {
            await axios
                .get<PokemonResponse>(url || 'https://pokeapi.co/api/v2/pokemon')
                .then((response: AxiosResponse<any>) => {
                    const mappedPokemonList: PokemonItem[] = getMapedPokemonList(
                        response?.data?.results
                    );

                    const mappedRequestData: RequestData = getMapedRequestData(response?.data);

                    return batch(() => {
                        isNextData
                            ? dispatch(addPokemons(mappedPokemonList))
                            : dispatch(setPokemons(mappedPokemonList));
                        dispatch(setNextPreviousData(mappedRequestData));
                    });
                });
        };
    };

    return [getPokemonData];
};

export default useGetPokemonListData;
