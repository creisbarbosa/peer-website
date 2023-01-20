import Nestle from "../assets/companies/nestle_logo.svg";
import Scania from "../assets/companies/scania_logo.svg";
import Votorantim from "../assets/companies/votorantim_logo.svg";
import Eaton from "../assets/companies/eaton_logo.svg";
import Weg from "../assets/companies/weg_logo.svg";
import Voith from "../assets/companies/voith_logo.svg";

import Image from "next/image";

import Endeavor from "../assets/companies/endeavor.svg";
import Abdi from "../assets/companies/abdi.svg";
import Liga from "../assets/companies/liga_ventures.svg";
import Grob from "../assets/companies/grob.svg";
import Abimaq from "../assets/companies/abimaq.svg";
import Fiemg from "../assets/companies/fiemg.svg";

const clientCompanies = [
  {
    name: "Nestle",
    href: "https://www.nestle.com.br/",
    img: Nestle
  },
  {
    name: "Scania",
    href: "https://www.scania.com/br/pt/home.html",
    img: Scania
  },
  {
    name: "Votorantim",
    href: "https://www.votorantimcimentos.com.br/",
    img: Votorantim
  },
  {
    name: "Eaton",
    href: "https://www.eaton.com/br/",
    img: Eaton
  },
  {
    name: "Weg",
    href: "https://www.weg.net/institutional/BR/pt/",
    img: Weg
  },
  {
    name: "Voith",
    href: "https://voith.com/corp-en/about-us/markets-locations/brazil-pt.html",
    img: Voith
  },
]

const partnerCompanies = [
  {
    name: "Endeavor",
    href: "https://endeavor.org.br/scaleup/",
    img: Endeavor
  },
  {
    name: "Abdi",
    href: "https://www.startupindustria.com.br/",
    img: Abdi
  },
  {
    name: "Liga",
    href: "https://liga.ventures/",
    img: Liga
  },
  {
    name: "Grob",
    href: "https://www.grobgroup.com/pt/",
    img: Grob
  },
  {
    name: "Abimaq",
    href: "https://www.abimaq.org.br/",
    img: Abimaq
  },
  {
    name: "Fiemg",
    href: "https://fiemglab.com.br/aceleracaofiemglab40/",
    img: Fiemg
  },
]

export default function Slider() {
  return (

    <section className="bg-blue-50">
      <li 
        className="flex flex-row px-28 py-8 justify-between"
      >
        <a className="flex justify-center items-center w-40 h-20 text-sm text-slate-600">
          Empresas que<br/> confiam em nosso<br/> trabalho →
        </a>
        {clientCompanies.map((company) => {
          return (
            <a 
              key={company.name}
              className="flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20"
              href={company.href}
              target="blank"
            >
                <Image src={company.img} alt="" />
            </a>
          )
        })}

      </li>
    </section>
  )
}