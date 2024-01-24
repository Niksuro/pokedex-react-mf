import { useEffect, useState } from 'react'
import Icon from '../../atoms/Icon/Icon'
import {
  DetailUserClose,
  DetailUserContainer,
  DetailUserContainerImage,
  DetailUserEmail,
  DetailUserImageContainer,
  DetailUserLabel,
  DetailUserName,
} from './DetailUser.style'
import { UserData } from '@/app/_interfaces/UserData'
import { getSessionData } from '@/app/_helpers/getSessionData'
import {
  ICON_CLOSE,
  ICON_USER,
  TEXT_EMAIL_USER,
  TEXT_USERNAME_USER,
} from '@/app/_constants/constants'
import { Background } from '../DetailPokemon/DetailPokemon.style'
import Spinner from '../../atoms/Spinner/Spinner'

interface DetailUserProps {
  onClickClose: () => void
}

const DetailUser = ({ onClickClose }: DetailUserProps) => {
  /**
   * State that contains the user data
   */
  const [user, setUser] = useState<UserData>()
  /**
   * State that change the loader until the user data is loaded from cookie
   */
  const [show, setShow] = useState<boolean>(false)
  /**
   * State that helps to initiate the animation of the card
   */
  const [animation, setAnimation] = useState<boolean>(false)
  /**
   * UseEffect that load the user data on the first render
   */
  useEffect(() => {
    getSessionData()
      .then((data: UserData) => {
        setUser(data)
        setShow(true)
        setTimeout(() => {
          setAnimation(true)
        }, 100)
      })
      .catch((error) => {})
  }, [])
  return (
    <>
      {!show && <Spinner />}
      {show && (
        <>
          <Background onClick={() => onClickClose()} />
          <DetailUserContainer $show={animation}>
            {user?.profileImage && (
              <DetailUserImageContainer
                src={user?.profileImage}
                alt="profile"
                width={150}
                height={150}
              />
            )}
            {!user?.profileImage && (
              <DetailUserContainerImage data-test="profile-image">
                <Icon icon={ICON_USER} clickeable={false} />
              </DetailUserContainerImage>
            )}
            <DetailUserLabel>{TEXT_USERNAME_USER}</DetailUserLabel>
            <DetailUserName>{user?.name}</DetailUserName>
            <DetailUserLabel>{TEXT_EMAIL_USER}</DetailUserLabel>
            <DetailUserEmail>{user?.email}</DetailUserEmail>
            <DetailUserClose>
              <Icon
                icon={ICON_CLOSE}
                clickeable={true}
                onClick={() => onClickClose()}
              />
            </DetailUserClose>
          </DetailUserContainer>
        </>
      )}
    </>
  )
}

export default DetailUser
