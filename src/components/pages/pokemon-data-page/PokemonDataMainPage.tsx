import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Image } from 'antd';

import { PokemonStat } from '../../../constants/pokemonTypes';

import { clearCurrentPokemonData } from '../../../redux/pokemon-store/pokemon.actions';
import { selectCurrentPokemonData } from '../../../redux/pokemon-store/pokemon.selectors';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import useGetCurrentPokemonData from '../../hooks/api/useGetCurrentPokemonData';

import './PokemonDataMainPage.scss';

const PokemonDataMainPage = () => {
    const { pokemonId } = useParams<{ pokemonId: string }>();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [getCurrentPokemonData] = useGetCurrentPokemonData();

    const currentPokemonData = useAppSelector(selectCurrentPokemonData);

    useEffect(() => {
        if (pokemonId) {
            dispatch(getCurrentPokemonData(pokemonId));
        }

        // eslint-disable-next-line
    }, [pokemonId]);

    const handleBackClick = (): void => {
        navigate('/pokemon');
        dispatch(clearCurrentPokemonData());
    };

    return (
        <div className='pokemon-data-main-page'>
            <div className='pokemon-back-button-wrapper'>
                <Button onClick={handleBackClick}>BACK TO POKEMONS LIST</Button>
            </div>

            <div className='pokemon-image-section'>
                <Image
                    width={300}
                    preview={false}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonData?.id}.png`}
                    alt={currentPokemonData?.name}
                />
                <div className='pokemon-stats'>
                    <div>name: {currentPokemonData?.name}</div>

                    {currentPokemonData?.stats?.map((stat: PokemonStat) => {
                        return (
                            <div key={stat?.name + stat?.baseStat}>
                                {stat?.name}: {stat?.baseStat}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonDataMainPage;
