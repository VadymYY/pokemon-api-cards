import { ChangeEvent, useState } from 'react';

import { Col, Input, Row, Select } from 'antd';

import { setFilteredPokemons } from '../../../redux/pokemon-store/pokemon.actions';
import { useAppDispatch } from '../../../redux/store';

import useFilteredPokemons from '../../hooks/api/useFilteredPokemons';
import useGetFilteredByTypePokemons from '../../hooks/api/useGetFilteredByTypePokemons';
import useGetPokemonTypes from '../../hooks/api/useGetPokemonTypes';

const { Search } = Input;

const PokemonToolbarSection = () => {
    const dispatch = useAppDispatch();

    const [pokemonName, setPokemonName] = useState<string | undefined>('');
    const [pokemonType, setPokemonType] = useState<string | undefined>('');

    const [pokemonTypes] = useGetPokemonTypes();
    const [getPokemonByName] = useFilteredPokemons();
    const [getPokemonsByType] = useGetFilteredByTypePokemons();

    const handlePokemonSearch = (searchValue?: string): void => {
        if (searchValue) {
            setPokemonName(searchValue);
            setPokemonType('');
            dispatch(getPokemonByName(searchValue));
        }
    };

    const handlePokemonSearchChange = (event?: ChangeEvent<HTMLInputElement>): void => {
        if (!event?.target?.value) {
            setPokemonName('');
            setPokemonType('');
            dispatch(setFilteredPokemons([]));
        }
    };

    const handleSelectChange = (value?: string | undefined): void => {
        if (value) {
            setPokemonName('');
            setPokemonType(value);
            dispatch(getPokemonsByType(parseInt(value)));
        } else {
            setPokemonName('');
            setPokemonType('');
            dispatch(setFilteredPokemons([]));
        }
    };

    return (
        <div className='pokemon-toolbar-section'>
            <Row>
                <Col span={16} offset={0}>
                    <Search
                        value={pokemonName || undefined}
                        onChange={handlePokemonSearchChange}
                        placeholder='Search by full name'
                        onSearch={handlePokemonSearch}
                        enterButton
                        allowClear
                    />
                </Col>
                <Col span={6} offset={2}>
                    <Select
                        value={pokemonType || undefined}
                        placeholder='Chooze pokemon type'
                        onChange={handleSelectChange}
                        options={pokemonTypes}
                        allowClear
                    />
                </Col>
            </Row>
        </div>
    );
};

export default PokemonToolbarSection;
