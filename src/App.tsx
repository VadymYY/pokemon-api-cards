import axios from 'axios';

import PokemonRouter from './components/common/Router';

import withRouterProvider from './components/hocs/RouterProvider';
import withStoreProvider from './components/hocs/StoreProvider';

import useNotification from './components/hooks/notification/useNotification';

import { POKEMON_404, POKEMON_404_DESC } from './constants/notificationMessages';

import './App.scss';

function App() {
    const [showNotification] = useNotification();

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 404) {
                showNotification(POKEMON_404, POKEMON_404_DESC);

                return Promise.resolve([]);
            } else {
                return Promise.reject(error);
            }
        }
    );

    return <PokemonRouter />;
}

export default withStoreProvider(withRouterProvider(App));
