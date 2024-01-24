import Icon from '../../atoms/Icon/Icon'
import { Container, Text } from './IconOption.style'

interface IconOptionProps {
  icon: string
  option: string
  onClick?: () => void
}

const IconOption = ({ icon, option, onClick }: IconOptionProps) => {
  return (
    <Container data-test="icon-option" onClick={onClick} $clickeable={onClick ? true : false}>
      <Icon icon={icon} />
      <Text>{option}</Text>
    </Container>
  )
}

export default IconOption
