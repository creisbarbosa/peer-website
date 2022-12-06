import Image from "next/image";
import { FooterContainer } from "../../styles/components/Footer"
import LogoWhite from "../assets/logo_white.svg";

export default function Footer () {
  return (
    <FooterContainer>
      <div className="header">
        <Image src={LogoWhite} alt="" />
        <div>
          <h2>Acompanhe as novidades do mercado de usinagem</h2>
          <form action="" >
            <input type="text" placeholder="Insira seu e-mail corporativo"/>
            <button>Assinar newsletter</button>
          </form>
        </div>
      </div>
      <div className="links">
        <ul>
          <h3>NAVEGUE</h3>
          <li><a href="">Comprar peças usinadas</a></li>
          <li><a href="">Seja um parceiro de manufatura</a></li>
          <li><a href="">Sobre nós</a></li>
        </ul>
        <ul>
          <h3>CONHECIMENTO</h3>
          <li><a href="">Blog da usinagem</a></li>
          <li><a href="">Academia Peerdustry</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
        <ul>
          <h3>CONTATO</h3>
          <li><a href="">contato@peerdustry.com</a></li>
          <li><a href="">+ 55 11 96084 0395</a></li>
          <li><a href="">Avenida Paulista,171 - 10º Andar <br /> Bela VistaSão Paulo - SP <br /> CEP 01311-000</a></li>
        </ul>
      </div>
      <div className="copyright">
        <strong>©2021 Peerdustry. Todos os direitos reservados</strong>
      </div>
    </FooterContainer>
  )
}