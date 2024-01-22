'use state'
import { ICON_USER } from '@/app/_constants/constants'
import Icon from '../../atoms/Icon/Icon'
import { Container, ImageContainer } from './UserOption.style'
import { useEffect, useState } from 'react'
import UserMenu from '../../molecules/UserMenu/UserMenu'
import { getSessionData } from '@/app/_helpers/getSessionData'
import { UserData } from '@/app/_interfaces/UserData'

const UserOption = () => {
  /**
   * State that contains the visibility of the user menu
   */
  const [visible, setVisible] = useState(false)
  /**
   * State that contains the user data
   */
  const [user, setUser] = useState<UserData>()
  /**
   * UseEffect that load the user data on the first render
   */
  useEffect(() => {
    getSessionData()
      .then((data: UserData) => {
        setUser(data)
      })
      .catch((error) => {})
  }, [])
  return (
    <>
      {user?.profileImage && (
        <ImageContainer
          src={user?.profileImage}
          alt="profile"
          width={50}
          height={50}
          onClick={() => setVisible(!visible)}
        />
      )}
      {!user?.profileImage && (
        <Container>
          <Icon
            icon={ICON_USER}
            clickeable={true}
            onClick={() => setVisible(!visible)}
          />
        </Container>
      )}
      {visible && <UserMenu user={user} />}
    </>
  )
}

export default UserOption
