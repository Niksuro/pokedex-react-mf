import { PokeAPIDetail } from '../_interfaces/PokeApiDetail'
import { PokemonData } from '../_interfaces/PokemonData'

/**
 * DTO for Pokemon Data, transform into more readable data and easy to access
 * @param apiData - Data from PokeAPI
 * @returns PokemonData transformed
 */
export const dtoPokemonData = (apiData: PokeAPIDetail) => {
  const pokemon: PokemonData = {
    name: apiData.name,
    id: apiData.id,
    types: apiData.types[0].type.name,
    moves: apiData.moves.map((move) => move.move.name),
    species: apiData.species.name,
    sprite: apiData.sprites.other?.['official-artwork'].front_default ?? apiData.sprites.front_default,
    weight: apiData.weight,
  }

  return pokemon
}
