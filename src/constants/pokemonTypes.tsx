export type PokemonItem = {
    id: number;
    name: string;
    url: string;
};

export type RequestData = {
    count: number;
    next: string;
    previous: string;
};

export type PokemonStat = {
    name: string;
    baseStat: number;
};

export type CurrentPokemon = {
    id: number;
    name: string;
    moves: string[];
    stats: PokemonStat[];
};

export type PokemonTypeItem = {
    label: string;
    value: string;
    key: string;
};

export type PokemonResponse = {
    response: any;
};
