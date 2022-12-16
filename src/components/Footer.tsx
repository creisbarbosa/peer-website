import Image from "next/image"
import Logo from "../../public/logo_white.svg"
import AribaLogo from "../assets/companies/ariba.svg"
import Background from "../../public/img/Footer_bg.png"

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-8 bg-blue-800 text-white relative overflow-hidden">
        <Image src={Background} alt="" className="h-full w-full object-cover absolute"/>
        <div className="flex flex-row gap:6 xl:gap-32 justify-between xl:justify-center p-32 relative">
          <div className="flex flex-col">
            <ul className="z-10 flex flex-col gap-4 bg-white-10 p-8 backdrop-blur-sm rounded-2xl shadow-xl border border-white-10">
              <li><Image src={Logo} alt="Peerdustry Logo" className="h-6 w-40 xl:h-8 xl:w-52"/></li>
              <hr className="border-white-10"/>
              <li><p className="text-sm font-light font-display">©2022 Peerdustry</p></li>
              <li><p className="text-sm font-light font-display"> Todos os direitos reservados</p></li>
            </ul>
            <ul className="z-20">
              <li>
                <a href="https://service.ariba.com/Discovery.aw/ad/profile?key=AN01469516646" target="_blank" className="flex bg-black-30 p-6 -mt-6 ml-6 -mr-6 z-10 gap-2 items-center rounded-2xl border border-white-20 backdrop-blur-md shadow-xl justify-between" rel="noreferrer">
                  <p className="text-xs">Encontre-nos no <br /> Ariba Network</p>
                  <Image src={AribaLogo} alt="Peerdustry Logo"/>
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold font-display">NAVEGUE</li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Compre peças usinadas</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Seja um Parceiro da Peer</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Sobre</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold font-display">RECURSOS</li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Blog da usinagem</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Academia Peerdustry</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">FAQ</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold font-display">CONTATO</li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">contatos@peerdustry.com</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">+ 55 11 96084 0395</a></li>
            <li className="font-light text-sm hover:text-slate-300"><a href="">Av. Paulista, 171 <br /> 4º Andar Sala 289 <br /> Bela Vista, São Paulo - SP <br /> 01311-000</a></li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}