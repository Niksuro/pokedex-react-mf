import { PokemonShortData } from '@/app/_interfaces/PokemonShortData'
import { ContainerShortCard, Title } from './PokemonShortCard.style'
import Icon from '../../atoms/Icon/Icon'
import { ICON_RIGHT } from '@/app/_constants/constants'

interface PokemonShortCardProps {
  key?: string
  data: PokemonShortData
  onClick?: () => void
}

const PokemonShortCard = ({ key, data, onClick }: PokemonShortCardProps) => {
  return (
    <ContainerShortCard key={key} onClick={onClick}>
      <Title>{data.name}</Title>
      <Icon
        icon={ICON_RIGHT}
      />
    </ContainerShortCard>
  )
}

export default PokemonShortCard
