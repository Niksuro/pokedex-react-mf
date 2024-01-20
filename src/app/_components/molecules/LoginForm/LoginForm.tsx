import Button from '../../atoms/Button/Button'
import InputField from '../../atoms/InputField/InputField'
import { Container } from './LoginForm.style'

const LoginForm = () => {
  return (
    <Container>
      <InputField
        label="Usuario"
        type="text"
        icon="\e906"
        placeholder="Introduce tu usuario"
      />
      <InputField
        label="Contraseña"
        type="password"
        icon="\e903"
        placeholder="Introduce tu contraseña"
      />
      <Button text="Iniciar sesión" variant="primary" />
    </Container>
  )
}

export default LoginForm
