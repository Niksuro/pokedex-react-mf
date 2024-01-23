import { PokemonData } from '@/app/_interfaces/PokemonData'
import {
  ContainerPokemonMoves,
  DescriptionContainer,
  ImageCard,
  ImageCardBackground,
  PokemonCardContainer,
  PokemonMoves,
  PokemonName,
  TagWeight,
} from './PokemonCard.style'
import { TEXT_WEIGHT_CARD } from '@/app/_constants/constants'
import { useEffect, useState } from 'react'

interface PokemonCardProps {
  key?: string
  data: PokemonData
}

const PokemonCard = ({ key, data }: PokemonCardProps) => {
  /**
   * State that helps to initiate the animation of the card
   */
  const [show, setShow] = useState<boolean>(false)
  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <PokemonCardContainer $variant={data.types} $show={show}>
      <ImageCardBackground
        src="/images/bg-pokemon.png"
        alt={`sprite-${data.name}`}
        width={500}
        height={500}
      />
      <ImageCard
        src={data.sprite}
        alt={`sprite-${data.name}`}
        width={500}
        height={500}
      />
      <DescriptionContainer>
        <PokemonName>{data.name}</PokemonName>
        <ContainerPokemonMoves>
          {data.moves.length > 0 &&
            data.moves
              .slice(0, 4)
              .map((move, index) => (
                <PokemonMoves key={`move-${index}`}>{`#${move}`}</PokemonMoves>
              ))}
        </ContainerPokemonMoves>
      </DescriptionContainer>
      <TagWeight>
        {TEXT_WEIGHT_CARD.replace('${weight}', data.weight.toString())}
      </TagWeight>
    </PokemonCardContainer>
  )
}

export default PokemonCard
