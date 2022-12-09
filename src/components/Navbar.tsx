import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { SignIn, CaretDown } from "phosphor-react"
import { Container, ButtonContainer } from "../../styles/components/Navbar"
import { Button, IconButton } from "../../styles/components/Button"

export default function Navbar() {

  function openPeerApp() {
    window.open('https://usinagem.peerdustry.com/', '_blank')
  }

  return(
    <Container>
      <a href="http://peerdustry.com"><Image src={logoImg} alt="Company logo" /></a>
      <div>
        <ul>
          <li><a className="menu" href="https://www.peerdustry.com/comprar-pecas-usinadas/" target="blank">Compre</a></li>
          <li><a className="menu" href="https://www.peerdustry.com/parceiro-de-manufatura/" target="blank">Seja parceiro</a></li>
          <li><a className="menu" href="https://www.peerdustry.com/materiais/" target="blank">Recursos</a></li>
          <li><a className="menu" href="https://www.peerdustry.com/sobre-peerdustry/" target="blank">A Peerdustry <CaretDown size={15} weight="bold" /> </a></li>
        </ul>
      </div>
      <ButtonContainer>
        <IconButton onClick={openPeerApp}>
          <strong>Entrar</strong>
          <SignIn size={20} weight="bold" />
        </IconButton>
        <a href="https://wa.me/5511960840395" target="blank">
          <Button color="blue">
            Fale com um consultor
          </Button>
        </a>
      </ButtonContainer>
    </Container>
  )
}