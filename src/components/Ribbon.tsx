import { RibbonContainer } from "../../styles/components/Ribbon"

import { WhatsappLogo } from "phosphor-react"

export default function Ribbon() {
  return (
    <RibbonContainer href="https://wa.me/5511960840395" target="blank">
      <WhatsappLogo size={13} weight="fill" />
      <p>Para qualquer dúvida, contate nossos serviços através do telefone <strong>+ 55 11 96084 0395</strong></p>
    </RibbonContainer>
  )
}