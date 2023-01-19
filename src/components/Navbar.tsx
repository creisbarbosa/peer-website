import Image from "next/image";
import { Button } from "./Button";
import Logo from "../../public/logo.svg"
import { WhatsappLogo, SignIn } from "phosphor-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-16 py-1 items-center bg-slate-200 border-solid border-b border-stroke-40 sticky top-0 z-10">
      <Link href="/"><Image src={Logo} alt="Peerdustry Logo" className="h-6 w-40 xl:h-8 xl:w-52"/></Link>
      <div className="flex">
        {[
          ['Compre', '/buy'],
          ['Seja Parceiro', '/partners'],
          ['Sobre nós', '/about'],
          ['Contato', '/contact'],
        ].map(([title, url]) => (
          <Link href={url} className="px-4 xl:px-6 py-6 text-blue-500 text-xs xl:text-base transition duration-300 hover:text-slate-500 font-medium" key="">{title}</Link>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href="https://usinagem.peerdustry.com/" target="blank"><Button className="bg-blue-50 hover:bg-white text-blue-500 border-solid border-stroke-40 text-xm xl:text-sm">Entrar<SignIn className="fill-blue-500" weight="fill" size={20}/></Button></a>
        <a href="https://api.whatsapp.com/send/?phone=5511960840395&text&type=phone_number&app_absent=0" target="blank"><Button className="bg-blue-500 hover:bg-blue-400 text-white border-blue-400 text-xs xl:text-sm">  Fale com um consultor<WhatsappLogo className="fill-white-30" weight="fill" size={20}/></Button></a>
      </div>
    </nav>
  )
}