'use client'
import {
  ICON_LOGOUT,
  ICON_USER,
  LABEL_BUTTON_PROFILE,
  LABEL_BUTTON_SIGN_OUT,
  TEXT_WELCOME,
} from '@/app/_constants/constants'
import IconOption from '../IconOption/IconOption'
import {
  Container,
  ContainerUserData,
  EmailText,
  UserName,
} from './UserMenu.style'
import { signOut } from 'next-auth/react'
import { UserData } from '@/app/_interfaces/UserData'

interface UserMenuProps {
  user?: UserData
}

const UserMenu = ({ user }: UserMenuProps) => {
  return (
    <Container>
      <ContainerUserData>
        <UserName>
          {TEXT_WELCOME.replace('${Username}', user?.name ?? '')}
        </UserName>
        <EmailText>{user?.email}</EmailText>
      </ContainerUserData>
      <IconOption icon={ICON_USER} option={LABEL_BUTTON_PROFILE} />
      <IconOption
        icon={ICON_LOGOUT}
        option={LABEL_BUTTON_SIGN_OUT}
        onClick={() => signOut()}
      />
    </Container>
  )
}

export default UserMenu
