import { Dispatch } from 'react';

import axios, { AxiosResponse } from 'axios';

import { CurrentPokemon, PokemonResponse } from '../../../constants/pokemonTypes';

import { setCurrentPokemonData } from '../../../redux/pokemon-store/pokemon.actions';

const useGetCurrentPokemonData = () => {
    const getCurrentPokemonData = (pokemonId: string): any => {
        // TODO: improve return
        return async (dispatch: Dispatch<any>) => {
            await axios
                .get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then((response: AxiosResponse<any>) => {
                    const currentPokemon: CurrentPokemon = {
                        id: response?.data?.id,
                        name: response?.data?.name,
                        moves: response?.data?.moves?.map((move: { move: { name: string } }) => {
                            return move?.move?.name;
                        }),
                        stats: response?.data?.stats?.map(
                            (stat: { base_stat: number; stat: { name: string } }) => {
                                return {
                                    baseStat: stat?.base_stat,
                                    name: stat?.stat?.name,
                                };
                            }
                        ),
                    };

                    return dispatch(setCurrentPokemonData(currentPokemon));
                });
        };
    };

    return [getCurrentPokemonData];
};

export default useGetCurrentPokemonData;
