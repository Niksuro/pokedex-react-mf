'use state'
import { ICON_USER } from '@/app/_constants/constants'
import Icon from '../../atoms/Icon/Icon'
import { Container, ImageContainer } from './UserOption.style'
import { useEffect, useState } from 'react'
import UserMenu from '../../molecules/UserMenu/UserMenu'
import { getSessionData } from '@/app/_helpers/getSessionData'
import { UserData } from '@/app/_interfaces/UserData'
import DetailUser from '../DetailUser/DetailUser'

const UserOption = () => {
  /**
   * State that contains the visibility of the user menu
   */
  const [visible, setVisible] = useState(false)
  /**
   * State that contains the boolean to show or hide the user menu
   */
  const [showDetailUser, setShowDetailUser] = useState<boolean>(false)
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
          data-test="profile-image"
          onClick={() => setVisible(!visible)}
        />
      )}
      {!user?.profileImage && (
        <Container data-test="profile-image">
          <Icon
            icon={ICON_USER}
            clickeable={true}
            onClick={() => setVisible(!visible)}
          />
        </Container>
      )}
      {visible && (
        <UserMenu
          user={user}
          outClick={() => setVisible(false)}
          onClickProfileOption={() => {
            setShowDetailUser(true)
            setVisible(false)
          }}
        />
      )}
      {showDetailUser && (
        <DetailUser onClickClose={() => setShowDetailUser(false)} />
      )}
    </>
  )
}

export default UserOption
