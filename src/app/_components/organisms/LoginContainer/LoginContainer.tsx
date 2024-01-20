import LoginForm from '../../molecules/LoginForm/LoginForm'
import { Container, Subtitle, Title } from './LoginContainer.style'

const LoginContainer = () => {
  return (
    <Container>
      <Title>¡Bienvenido!</Title>
      <Subtitle>Ingresa tus datos para continuar</Subtitle>
      <LoginForm />
    </Container>
  )
}

export default LoginContainer
