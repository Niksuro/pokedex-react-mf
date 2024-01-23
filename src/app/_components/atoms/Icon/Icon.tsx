import { IconStyle } from './Icon.style'

interface IconProps {
  icon: string
  id?: string
  clickeable?: boolean
  onClick?: () => void
}

const Icon = ({ icon, clickeable, id, onClick }: IconProps) => {
  return <IconStyle id={id} $icon={icon} $clickeable={clickeable} onClick={onClick} />
}

export default Icon
