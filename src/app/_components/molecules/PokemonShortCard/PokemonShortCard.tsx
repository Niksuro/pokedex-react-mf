import { PokemonShortData } from '@/app/_interfaces/PokemonShortData'
import { ContainerShortCard, Title } from './PokemonShortCard.style'
import Icon from '../../atoms/Icon/Icon'
import { ICON_RIGHT } from '@/app/_constants/constants'

interface PokemonShortCardProps {
  cardKey?: string
  data: PokemonShortData
  onClick?: () => void
}

const PokemonShortCard = ({ cardKey, data, onClick }: PokemonShortCardProps) => {
  return (
    <ContainerShortCard key={cardKey} onClick={onClick}>
      <Title>{data.name}</Title>
      <Icon
        icon={ICON_RIGHT}
      />
    </ContainerShortCard>
  )
}

export default PokemonShortCard
