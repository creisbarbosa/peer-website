import Image from "next/image"
import Logo from "../../public/logo_white.svg"
import Background from "../../public/img/Footer_bg.png"
import Link from "next/link"
import { LinkedinLogo, InstagramLogo, FacebookLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-8 bg-blue-700 text-white relative overflow-hidden h-[92vh]">
        <Image src={Background} alt="" className="h-full w-full object-cover absolute"/>
        <div className="flex flex-col justify-between relative h-full">
          <div className="flex items-center gap-4 p-20">
            <a href="https://www.linkedin.com/company/peerdustry/" target="blank"><LinkedinLogo size={38} weight="fill" className="text-blue-50 hover:text-blue-900"/></a>
            <a href="https://www.instagram.com/peerdustry/" target="blank"><InstagramLogo size={38} weight="fill" className="text-blue-50 hover:text-blue-900"/></a>
            <a href="https://www.facebook.com/peerdustry/" target="blank"><FacebookLogo size={38} weight="fill" className="text-blue-50 hover:text-blue-900"/> </a>
            <Image src={Logo} alt="Peerdustry Logo" className="h-8 animate-spin-slow"/>
          </div>
          <div className="flex w-full justify-between px-48 py-32 border-b border-t border-solid border-white-10">
          
            <ul className="flex flex-col gap-4">
              <li className="font-bold font-display text-lg text-blue-50">NAVEGUE</li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="/buy">Compre peças usinadas</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="/partners">Seja um Parceiro da Peer</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="/about">Sobre a Peerdustry</Link></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold font-display text-lg text-blue-50">RECURSOS</li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="https://www.peerdustry.com/blog/">Blog da usinagem</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="https://www.peerdustry.com/academia-peerdustry/">Academia Peerdustry</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="https://www.peerdustry.com/materiais/">Materiais educativos</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="https://conteudo.peerdustry.com/bate-papo">Bate Papo</Link></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><Link href="https://www.peerdustry.com/faq-peerdustry/">FAQ</Link></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold font-display text-lg text-blue-50">CONTATO</li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><a href="">contatos@peerdustry.com</a></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><a href="">+ 55 11 96084 0395</a></li>
              <li className="font-light text-base text-blue-50 hover:text-slate-300"><a href="">Av. Paulista, 171 <br /> 4º Andar Sala 289 <br /> Bela Vista, São Paulo - SP <br /> 01311-000</a></li>
            </ul>

          </div>
          <div className="flex items-center justify-center h-full font-display text-blue-50">
            <p>©2023 Peerdustry Todos os direitos reservados</p>
          </div>
        </div>
        
      </footer>
    </>
  )
}