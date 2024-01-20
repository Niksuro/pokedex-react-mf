import { TEXT_SIGN_IN_TITLE, TEXT_SIGN_IN_SUBTITLE } from '@/app/_constants/constants'
import LoginForm from '../../molecules/LoginForm/LoginForm'
import { Container, Subtitle, Title } from './LoginContainer.style'

const LoginContainer = () => {
  return (
    <Container>
      <Title>{TEXT_SIGN_IN_TITLE}</Title>
      <Subtitle>{TEXT_SIGN_IN_SUBTITLE}</Subtitle>
      <LoginForm />
    </Container>
  )
}

export default LoginContainer
