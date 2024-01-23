import { PokemonShortData } from '@/app/_interfaces/PokemonShortData'
import PokemonCard from '../../molecules/PokemonCard/PokemonCard'
import { Background, Container, ContainerClose } from './DetailPokemon.style'
import { useEffect, useState } from 'react'
import { PokemonData } from '@/app/_interfaces/PokemonData'
import axios from 'axios'
import { dtoPokemonData } from '@/app/_dto/dtoPokemonData'
import Spinner from '../../atoms/Spinner/Spinner'
import Icon from '../../atoms/Icon/Icon'
import { ICON_CLOSE } from '@/app/_constants/constants'

interface DetailPokemonProps {
  data: PokemonShortData
  onClickOutside?: () => void
}

const DetailPokemon = ({ data, onClickOutside }: DetailPokemonProps) => {
  /**
   * State that keep all the data after request to the API to one specific pokemon
   */
  const [pokemon, setPokemon] = useState<PokemonData>()
  /**
   * Effect that get the detail of the pokemon
   */
  useEffect(() => {
    const getPokemonList = async () => {
      await axios
        .get(data.url, {})
        .then((response) => {
          setPokemon(dtoPokemonData(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getPokemonList()
  }, [])
  return (
    <>
      {pokemon && (
        <Container>
          <PokemonCard data={pokemon} />
          <Background onClick={onClickOutside} />
          <ContainerClose>
            <Icon icon={ICON_CLOSE} clickeable onClick={onClickOutside} />
          </ContainerClose>
        </Container>
      )}
      {!pokemon && <Spinner />}
    </>
  )
}

export default DetailPokemon
