import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { SignIn, CaretDown } from "phosphor-react"
import { Container, ButtonContainer } from "../styles/components/Navbar"
import { Button, IconButton } from "../styles/components/Button"

export default function Navbar() {

  function openPeerApp() {
    window.open('https://usinagem.peerdustry.com/', '_blank')
  }

  return(
    <Container>
      <a href="http://peerdustry.com"><Image src={logoImg} alt="Company logo" /></a>
      <div>
        <ul>
          <li><a href="">Compre</a></li>
          <li><a href="">Parceria</a></li>
          <li><a href="">Funcionamento</a></li>
          <li><a href="">Recursos</a></li>
          <li><a href="">A Peerdustry <CaretDown size={15} weight="bold" /> </a></li>
        </ul>
      </div>
      <ButtonContainer>
        <IconButton onClick={openPeerApp}>
          <strong>Entrar</strong>
          <SignIn size={20} weight="bold" />
        </IconButton>
        <Button color="blue">
          Comprar peças usinadas
        </Button>
      </ButtonContainer>
    </Container>
  )
}