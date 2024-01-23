import { PokemonShortData } from '@/app/_interfaces/PokemonShortData'
import PokemonShortCard from '../../molecules/PokemonShortCard/PokemonShortCard'
import {
  ContainerCards,
  Skeleton,
  Subtitle,
  Title,
} from './CatalogContainer.style'
import { useEffect, useState } from 'react'
import DetailPokemon from '../DetailPokemon/DetailPokemon'
import {
  TEXT_SUBTITLE_DASHBOARD,
  TEXT_TITLE_DASHBOARD,
} from '@/app/_constants/constants'
import axios from 'axios'
import { PokeApiAll } from '@/app/_interfaces/PokeApiAll'

const CatalogContainer = () => {
  /**
   * State that store the detail of the pokemon if the user click on the card
   */
  const [detail, setDetail] = useState<PokemonShortData | undefined>(undefined)
  /**
   * State that store the list of the pokemon
   */
  const [pokemonList, setPokemonList] = useState<PokemonShortData[]>([])
  /**
   * Effect that get the list of the pokemon
   */
  useEffect(() => {
    const getPokemonList = async () => {
      await axios
        .get(
          process.env.NEXT_PUBLIC_BACKEND_URL + 'pokemon?offset=0&limit=10',
          {}
        )
        .then((response) => {
          const data: PokeApiAll = response.data
          setPokemonList(data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getPokemonList()
  }, [])
  /**
   * Function that open the detail of the pokemon
   * @param data - PokemonShortData to send into the detail modal
   */
  const openDetailedCard = (data: PokemonShortData) => {
    setDetail(data)
  }
  return (
    <>
      <Title>{TEXT_TITLE_DASHBOARD}</Title>
      <Subtitle>{TEXT_SUBTITLE_DASHBOARD}</Subtitle>
      {pokemonList.length === 0 && (
        <ContainerCards>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </ContainerCards>
      )}
      {pokemonList.length > 0 && (
        <ContainerCards>
          {pokemonList.map((card, index) => (
            <PokemonShortCard
              key={`pokecard-short-${index}`}
              data={card}
              onClick={() => openDetailedCard(card)}
            />
          ))}
        </ContainerCards>
      )}
      {detail && (
        <DetailPokemon
          data={detail}
          onClickOutside={() => setDetail(undefined)}
        />
      )}
    </>
  )
}

export default CatalogContainer
