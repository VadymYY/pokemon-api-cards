import { Navigate, Route, Routes } from 'react-router-dom';

import PokemonDataMainPage from '../pages/pokemon-data-page/PokemonDataMainPage';
import PokemonListPage from '../pages/pokemons-list-page/PokemonListPage';

const PokemonRouter = () => {
    return (
        <Routes>
            <Route path={`/pokemon/`} element={<PokemonListPage />} />

            <Route
                path={`/pokemon/:pokemonId`}
                element={<PokemonDataMainPage />}
            />

            <Route path='*' element={<Navigate to={`pokemon`} />} />
        </Routes>
    );
};

export default PokemonRouter;
