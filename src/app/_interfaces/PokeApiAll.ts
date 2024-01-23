import { PokemonShortData } from "./PokemonShortData";

export interface PokeApiAll {
    count: number;
    next: string;
    previous: string;
    results: PokemonShortData[];
}