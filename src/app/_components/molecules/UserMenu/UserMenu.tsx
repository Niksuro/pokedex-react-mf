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
import { useEffect, useRef } from 'react'

interface UserMenuProps {
  user?: UserData
  outClick: () => void
}

const UserMenu = ({ user, outClick }: UserMenuProps) => {
  /**
   * Ref that contains the container of the user menu
   */
  const container = useRef<HTMLDivElement>(null)
  /**
   * UseEffect that helps to close the user menu when the user clicks outside the menu
   */
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      try {
        if (
          container.current &&
          !container.current.contains(event.target as Node)
        ) {
          outClick()
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [container])

  return (
    <Container ref={container}>
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
