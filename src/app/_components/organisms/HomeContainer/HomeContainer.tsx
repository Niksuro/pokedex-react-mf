import LoginContainer from "../LoginContainer/LoginContainer"
import { ContainerImages, ContainerMain, CopyrigthText, ImageStyle } from "./HomeContainer.style"

const HomeContainer = () => {
  return (
    <ContainerMain>
      <LoginContainer />
      <ContainerImages>
        <ImageStyle
          src="/images/logo-monoma.png"
          alt="Login"
          width={150}
          height={0}
        />
        <ImageStyle
          src="/images/logo-nsr.png"
          alt="Security"
          width={30}
          height={30}
        />
      </ContainerImages>
      <CopyrigthText>© 2024 Pokémon. © 1995–2024 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon</CopyrigthText>
    </ContainerMain>
  )
}

export default HomeContainer
