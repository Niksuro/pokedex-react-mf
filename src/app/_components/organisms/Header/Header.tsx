import UserOption from '../UserOption/UserOption'
import { HeaderStyle, Logo } from './Header.style'

const Header = () => {
  return (
    <HeaderStyle>
      <Logo src="/images/logo-monoma.png" alt="logo" width={200} height={43} />
      <UserOption />
    </HeaderStyle>
  )
}

export default Header
