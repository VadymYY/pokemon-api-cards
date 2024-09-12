import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PokemonItem } from '../../../constants/pokemonTypes';

import { setFilteredPokemons } from '../../../redux/pokemon-store/pokemon.actions';
import {
    selectFilteredPokemons,
    selectPokemonsList,
    selectPokemonsNext,
} from '../../../redux/pokemon-store/pokemon.selectors';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import useGetPokemonListData from '../../hooks/api/useGetPokemonListData';

import PokemonListItem from './PokemonListItem';

const PokemonViewSection = () => {
    const dispatch = useAppDispatch();

    const pokemonList = useAppSelector(selectPokemonsList);
    const filteredPokemonList = useAppSelector(selectFilteredPokemons);
    const nextPokemonUrl = useAppSelector(selectPokemonsNext);

    const [getPokemonData] = useGetPokemonListData();

    const fetchMoreData = () => {
        if (nextPokemonUrl && filteredPokemonList?.length <= 0) {
            dispatch(getPokemonData(nextPokemonUrl, true));
        }
    };

    const pokemonsForView = filteredPokemonList?.length > 0 ? filteredPokemonList : pokemonList;

    useEffect(() => {
        return () => {
            dispatch(setFilteredPokemons([]));
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className='pokemon-list'>
            <InfiniteScroll
                dataLength={pokemonList.length}
                next={fetchMoreData}
                hasMore={nextPokemonUrl && filteredPokemonList?.length <= 0}
                loader={<h4>Loading pokemons...</h4>}
            >
                {pokemonsForView?.map((pokemon: PokemonItem) => {
                    return <PokemonListItem key={pokemon.id} pokemonItem={pokemon} />;
                })}
            </InfiniteScroll>
        </div>
    );
};

export default PokemonViewSection;
