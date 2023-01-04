import { WhatsappLogo } from "phosphor-react"

export default function Ribbon() {
  return (
    <a href="https://wa.me/5511960840395" target="blank" className="flex justify-center items-center py-2 gap-2 bg-gradient-to-r from-slate-300 via-white to-slate-300 border-solid border-b border-stroke-40 hover:from-white hover:via-slate-300 hover:to-white">
      <WhatsappLogo size={16} weight="fill" className="fill-green-700"/>
      <p className="text-sm text-blue-600">Para qualquer dúvida, <strong> cliquei aqui </strong> para falar com nossos consultores, ou ligue <strong>+ 55 11 96084 0395</strong></p>
    </a>
  )
}