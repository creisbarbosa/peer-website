import Image from "next/image";

import Background from "../../../public/img/Section_bg.png"
import Illustration from "../../../public/il_bg_01.svg"
import Link from "next/link";

export default function PartnerHero() {
  return (
    <section 
        className='bg-gradient-to-r relative border-solid border-b border-stroke-40 h-[88vh]'
      >
        <Image src={Background} alt="" className="h-full w-full object-cover absolute"/>
        <Image src={Illustration} alt="" className="right-16 top-32 object-cover absolute"/>
        <div className="px-16 xl:px-40 2xl:px-60 py-32  space-y-12  relative">
          <div className="flex space-x-4">
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5" className="fill-white-10"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  className="fill-white-10"/>
            </svg>
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold font-display text-blue-50 w-3/4 xl:w-4/5 2xl:w-2/3">Adquira mais clientes, <br />projetos e receita através de <br />uma plataforma de manufatura</h1>
          <p className="text-blue-50 leading-7 w-[45%]">
            Na plataforma da Peerdustry vários projetos são ofertados todos os dias, uma vez homologado você tem acesso ao Mural de Trabalhos, com diversas demandas de peças usinadas. 
          </p>
          <Link href="https://usinagem.peerdustry.com/signup">
            <button 
              type="submit"
              className="flex items-center px-8 py-4 rounded-lg font-semibold  transition-colors bg-blue-800 hover:bg-blue-500 text-white mt-12 uppercase text-xl font-display tracking-wider"
            >
              Iniciar inscrição
            </button>
          </Link> 
        </div>
      </section>
  )
}