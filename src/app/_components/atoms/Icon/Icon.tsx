import { IconStyle } from './Icon.style'

interface IconProps {
  icon: string
  clickeable?: boolean
  onClick?: () => void
}

const Icon = ({ icon, clickeable, onClick }: IconProps) => {
  return <IconStyle $icon={icon} $clickeable={clickeable} onClick={onClick} />
}

export default Icon
