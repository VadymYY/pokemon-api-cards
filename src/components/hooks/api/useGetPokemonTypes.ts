import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

import { PokemonResponse, PokemonTypeItem } from '../../../constants/pokemonTypes';

const useGetPokemonTypes = () => {
    const [pokemonTypes, setPokemonTypes] = useState<PokemonTypeItem[]>([]);

    useEffect(() => {
        getPokemonsTypes();
    }, []);

    const getPokemonsTypes = (): void => {
        axios
            .get<PokemonResponse>(`https://pokeapi.co/api/v2/type/`)
            .then((response: AxiosResponse<any>) => {
                const mapedPokemonTypes = response?.data?.results?.map(
                    (type: { name: string; url: string }) => {
                        const parts = type?.url?.split('/');
                        const value = parts[parts.length - 2];

                        return {
                            label: type?.name?.charAt(0).toUpperCase() + type?.name?.slice(1),
                            value: value,
                            key: value,
                        };
                    }
                );

                setPokemonTypes(mapedPokemonTypes);
            });
    };

    return [pokemonTypes];
};

export default useGetPokemonTypes;
