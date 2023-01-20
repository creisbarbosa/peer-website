import Image from "next/image";

import HeroBackground from "../../../public/img/SectionImage01.png"

import { Button } from "../../components/Button";

export default function IndexHero() {
  return (
    <section className='bg-white-30 h-full w-full relative'>
      <Image src={HeroBackground} alt="" className="w-full h-full object-cover absolute mix-blend-overlay"/>
      <div className="px-32 py-24 space-y-8 border-solid border-b border-stroke-40 relative">
        <div className="flex space-x-4">
          <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5" className="fill-blue-600"/>
          </svg>
          <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  className="fill-blue-600"/>
          </svg>
        </div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold font-display text-blue-600 w-2/4 xl:w-2/3 2xl:w-2/3">Compre peças usinadas em menos de 24h, sem se preocupar com cotação</h1>
        <p className="text-blue-600 w-1/2">Através de uma plataforma digital com <strong>centenas de fornecedores de usinagem</strong> , a Peerdustry possibilita comprar peças usinadas em poucos cliques, além de garantir o prazo de entrega acordado e qualidade das peças adquiridas.</p>
        <a 
          href="https://www.peerdustry.com/comprar-pecas-usinadas/#contact" 
          target="blank">
        <Button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white border-blue-400 mt-6">
          Comprar peças usinadas
        </Button></a>
      </div>
    </section>
  )
}