/* eslint-disable react/jsx-key */
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
import Paginator from '../../molecules/Paginator/Paginator'

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
   * State that store the actual page of the paginator
   */
  const [page, setPage] = useState<number>(1)
  /**
   * State that store the total results of the paginator
   */
  const [totalResults, setTotalResults] = useState<number>(0)
  /**
   * Constant that store the number of pokemon per page
   */
  const perPage = 10
  /**
   * Effect that get the list of the pokemon
   */
  useEffect(() => {
    const getPokemonList = async () => {
      setPokemonList([])
      await axios
        .get(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            `pokemon?offset=${(page - 1) * perPage}&limit=${perPage}`,
          {}
        )
        .then((response) => {
          const data: PokeApiAll = response.data
          setPokemonList(data.results)
          setTotalResults(data.count)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getPokemonList()
  }, [page])
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
              cardKey={`pokecard-short-${index}`}
              data={card}
              onClick={() => openDetailedCard(card)}
            />
          ))}
        </ContainerCards>
      )}
      {totalResults > 0 && (
        <Paginator
          page={page}
          perPage={perPage}
          totalResults={totalResults}
          setActualPage={(page) => setPage(page)}
        />
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
