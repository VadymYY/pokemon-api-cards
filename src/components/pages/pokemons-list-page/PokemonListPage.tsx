import { useEffect } from 'react';

import { useAppDispatch } from '../../../redux/store';

import useGetPokemonListData from '../../hooks/api/useGetPokemonListData';

import PokemonToolbarSection from './PokemonToolbarSection';
import PokemonViewSection from './PokemonViewSection';

import './PokemonListPage.scss';

const PokemonListPage = () => {
    const dispatch = useAppDispatch();

    const [getPokemonData] = useGetPokemonListData();

    useEffect(() => {
        dispatch(getPokemonData());

        // eslint-disable-next-line
    }, []);

    return (
        <div className='pokemon-list-page'>
            <PokemonToolbarSection />
            <PokemonViewSection />
        </div>
    );
};

export default PokemonListPage;
