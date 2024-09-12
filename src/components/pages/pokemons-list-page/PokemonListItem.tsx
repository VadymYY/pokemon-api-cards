import { Image } from 'antd';

import { PokemonItem } from '../../../constants/pokemonTypes';
import { useNavigate } from 'react-router-dom';

type PokemonListItemProps = { pokemonItem: PokemonItem };

const PokemonListItem = ({ pokemonItem }: PokemonListItemProps) => {
    const navigate = useNavigate();

    const handleNavigation = (): void => {
        navigate(`/pokemon/${pokemonItem?.id}`);
    };

    return (
        <div className='pokemon-list-item' onClick={handleNavigation}>
            <Image
                width={150}
                preview={false}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonItem?.id}.png`}
                alt={pokemonItem?.name}
            />
            {pokemonItem?.name}
        </div>
    );
};

export default PokemonListItem;
