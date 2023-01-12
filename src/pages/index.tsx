import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { Button } from "../components/Button";

import Nestle from "../assets/companies/nestle_logo.svg";
import Scania from "../assets/companies/scania_logo.svg";
import Votorantim from "../assets/companies/votorantim_logo.svg";
import Eaton from "../assets/companies/eaton_logo.svg";
import Weg from "../assets/companies/weg_logo.svg";
import Voith from "../assets/companies/voith_logo.svg";
import Maxion from "../assets/companies/maxion_logo.svg";
import Gobain from "../assets/companies/gobain_logo.svg";

import Endeavor from "../assets/companies/endeavor.svg";
import Abdi from "../assets/companies/abdi.svg";
import Liga from "../assets/companies/liga_ventures.svg";
import Grob from "../assets/companies/grob.svg";
import Abimaq from "../assets/companies/abimaq.svg";
import Fiemg from "../assets/companies/fiemg.svg";
import Ahk from "../assets/companies/ahk.svg";
import Hundred from "../assets/companies/100.svg";

import Img01 from "../../public/img/Image02.png";
import Img02 from "../../public/img/Machining01.png";

import Bg01 from "../../public/img/connected_bg_1.png";
import Bg02 from "../../public/img/connected_bg_2.png";

import CadImg from "../../public/img/CADSection_bg.png";

import HeroBackground from "../../public/img/SectionImage01.png"

import CNCLatheImg from "../assets/machines/CNCLathe.svg";
import ConvencionalLatheImg from "../assets/machines/ConvencionalLathe.svg";
import MillingCutterImg from "../assets/machines/MillingCutter.svg";
import MachiningCenterImg from "../assets/machines/MachiningCenter.svg";


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 9,
    },
  })

  return (
    <>
      {/* Hero Section */}
      <section className='bg-white-30 h-full w-full relative'>
        <Image src={HeroBackground} alt="" className="w-full h-full object-cover absolute mix-blend-overlay"/>
        <div className="px-16 xl:px-32 2xl:px-60 py-16 space-y-8 border-solid border-b border-stroke-40 relative">
          <div className="flex space-x-4">
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.5" cy="22" r="21.5" className="fill-blue-600"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  className="fill-blue-600"/>
            </svg>
          </div>
          <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold font-display text-blue-600 w-2/4 xl:w-2/3 2xl:w-2/3">Compre peças usinadas em menos de 24h, sem se preocupar com cotação</h1>
          <p className="text-blue-600 w-1/2">Através de uma plataforma digital com <strong>centenas de fornecedores de usinagem</strong> , a Peerdustry possibilita comprar peças usinadas spot em poucos cliques, além de garantir o prazo de entrega acordado e qualidade das peças adquiridas.</p>
          <a href="https://www.peerdustry.com/comprar-pecas-usinadas/#contact" target="blank"><Button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white border-blue-400 mt-6">Comprar peças usinadas</Button></a>
        </div>
      </section>
      {/* Client companies slider */}
      <section className="bg-blue-50">
        <div ref={sliderRef} className="keen-slider flex flex-row px-16 xl:px-32 2xl:px-60 py-8 space-x-4 overflow-y-scroll scrollbar-hide">
          <a className="keen-slider__slide number-slide1 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20 text-sm text-slate-600">Empresas que<br/> confiam em nosso<br/> trabalho →</a>
          <a className="keen-slider__slide number-slide2 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.nestle.com.br/" target="blank"><Image src={ Nestle } alt="" /></a>
          <a className="keen-slider__slide number-slide3 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.scania.com/br/pt/home.html" target="blank"><Image src={ Scania } alt="" /></a>
          <a className="keen-slider__slide number-slide4 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.votorantimcimentos.com.br/" target="blank"><Image src={ Votorantim } alt="" /></a>
          <a className="keen-slider__slide number-slide5 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.eaton.com/br/" target="blank"><Image src={ Eaton } alt="" /></a>
          <a className="keen-slider__slide number-slide6 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.weg.net/institutional/BR/pt/" target="blank"><Image src={ Weg } alt="" /></a>
          <a className="keen-slider__slide number-slide7 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://voith.com/corp-en/about-us/markets-locations/brazil-pt.html" target="blank"><Image src={ Voith } alt="" /></a>
          <a className="keen-slider__slide number-slide8 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.maxionwheels.com/" target="blank"><Image src={ Maxion } alt="" /></a>
          <a className="keen-slider__slide number-slide9 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.saint-gobain.com.br/" target="blank"><Image src={ Gobain } alt="" /></a>
        </div>
      </section>

      {/* Connected machining section */}
      <section className="px-16 xl:px-32 2xl:px-60 pt-32 pb-16 space-y-8 text-blue-600 bg-blue-50">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold font-display">Usinagem Conectada</h2>
          <hr className="w-32 border-solid border-2 rounded border-red-700"/>
          <p className="w-2/3">A Peerdustry facilita a compra e venda de peças usinadas sob demanda. Do pedido até a entrega, gerenciamos todos os processos de ponta a ponta, gerando eficiência para toda a cadeia de usinagem. Compradores reduzem seu lead time e fornecedores ganham novos pedidos, praticamente sem esforço. <strong> E o melhor, você não paga mais nada por isso!</strong></p>
          <div className="flex gap-2">
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5" className="fill-slate-200"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z" className="fill-slate-200"/>
            </svg>
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5" className="fill-slate-200"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="basis-1/4">
              <Image src={Img01} alt="" className="rounded-2xl shadow-3xl"/>
            </div>
            <div className="flex basis-3/4 rounded-2xl text-green-50 bg-green-700 shadow-3xl overflow-hidden relative">
              <Image src={Bg02} alt="" className="w-full h-full object-cover absolute"/>
              <div className="flex p-8 relative gap-8">
                <div className="basis-1/3 xl:basis-1/2 flex flex-col gap-4">
                  <strong className="font-light">Para quem compra</strong>
                  <h2 className="text-2xl xl:text-4xl font-bold font-display">Compre peças usinadas sem precisar cotar</h2>
                </div>
                <div className="basis-2/3 xl:basis-1/2 flex flex-col gap-4 justify-between place-items-end">
                  <p className="text-sm 2xl:text-base">Com a Peer você fabrica peças com especialistas e tem mais tempo para se dedicar ao seu negócio. Faremos a curadoria dos fornecedores mais adequados e capacitados para seus pedidos, eliminando longas etapas do processo de compras.</p>
                  <a href="https://www.peerdustry.com/comprar-pecas-usinadas/#contact" target="blank"><Button className="bg-red-600 hover:bg-red-500 text-white border-white-20">Compre peças usinadas →</Button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex basis-3/4 bg-blue-600 rounded-2xl text-blue-50 shadow-3xl overflow-hidden relative">
              <Image src={Bg01} alt="" className="w-full h-full object-cover absolute"/>
              <div className="flex p-8 relative gap-8">
                <div className="basis-1/3 xl:basis-1/2 flex flex-col gap-4">
                  <strong className="font-light">Para quem quer ser um parceiro de produção</strong>
                  <h2 className="text-2xl xl:text-4xl font-bold font-display">Gere receita a partir de máquinas ociosas</h2>
                </div>
                <div className="basis-2/3 xl:basis-1/2 flex flex-col gap-4 justify-between place-items-end">
                  <p className="text-sm 2xl:text-base">Com a Peerdustry, um leque de oportunidades se abre, possibilitando que fornecedores gerem receita a partir de máquinas ociosas. A plataforma também possibilita que as empresas passem a acessar mercados que não conseguiam alcançar anteriormente</p>
                  <a href="https://usinagem.peerdustry.com/signup" target="blank"><Button className="bg-red-600 hover:bg-red-500 text-white border-white-20">Seja um parceiro →</Button></a>
                </div>
              </div>
            </div>
            <div className="basis-1/4">
              <Image src={Img02} alt="" className="rounded-2xl shadow-3xl"/>
            </div>
          </div>
        </div>
      </section>
      {/* Numbers section */}
      <section  className="px-16 xl:px-32 2xl:px-60 pt-32 bg-blue-50 text-blue-600">
        <div className="flex flex-col gap-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold font-display">Em números</h2>
            <hr className="w-32 border-solid border-2 rounded border-red-700"/>
            <p className="w-1/2">Nós contamos com centenas de parceiros de manufatura homologados em nossa plataforma.  Até o momento já conseguimos ↓</p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-row gap-6">
              <article className="space-y-6 bg-white p-8 rounded-3xl shadow-3xl basis-1/2">
                <div className="flex gap-2">
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                  </svg>
                  <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#CFE2F2"/>
                  </svg>
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                  </svg>
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 place-items-end">
                  <h2 className="text-6xl 2xl:text-8xl font-display font-bold">+36.000</h2>
                  <strong>Peças usinadas</strong>
                </div>
                  <p>Por meio da tecnologia de análise de dados conseguimos entregar os pedidos certos para os parceiros de manufatura ideais, otimizando a produção de peças usinadas.</p>
              </article>
              <article className="space-y-6 bg-white p-8 rounded-3xl shadow-3xl basis-1/2">
                <div className="flex gap-2">
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                  </svg>
                  <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#CFE2F2"/>
                  </svg>
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                  </svg>
                  <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 place-items-end">
                  <h2 className="text-6xl 2xl:text-8xl font-display font-bold">+350.000 hr</h2>
                  <strong>Capacidade de usinagem / mês</strong>
                </div>
                  <p>O registro de cada uma das máquinas dos nossos parceiros de usinagem nos possibilita dimensionar nossa capacidade produtiva em horas.</p>
              </article>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-row gap-6 basis-1/2">
                <article className="text-center w-[100%] flex flex-col gap-3 justify-center items-center bg-white rounded-2xl shadow-3xl p-8">
                  <Image src={MachiningCenterImg} alt=""/>
                  <p><strong>+600</strong> Centros de Usinagem</p>
                </article>
                <article className="text-center w-[100%] flex flex-col gap-3 justify-center items-center bg-white rounded-2xl shadow-3xl p-8">
                  <Image src={CNCLatheImg} alt=""/>
                  <p><strong>+300</strong> Tornos CNC</p>
                </article>
              </div>
              <div className="flex flex-row gap-6 basis-1/2">
                <article className="text-center w-[100%] flex flex-col gap-3 justify-center items-center bg-white rounded-2xl shadow-3xl p-8">
                  <Image src={ConvencionalLatheImg} alt=""/>
                  <p><strong>+200</strong> Centros de Torneamento</p>
                </article>
                <article className="text-center w-[100%] flex flex-col gap-3 justify-center items-center bg-white rounded-2xl shadow-3xl p-8">
                  <Image src={MillingCutterImg} alt=""/>
                  <p><strong>+50</strong> Fresas CNC</p>
                </article>
              </div>
            </div>  
          </div>
        </div>
      </section>
      {/* How does it works section */}
      <section className="px-16 xl:px-32 2xl:px-60 pt-32 pb-16 bg-blue-50 text-blue-600">
        <div className="flex flex-col gap-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold font-display">Como funciona?</h2>
            <hr className="w-32 border-solid border-2 rounded border-red-700"/>
            <p className="w-2/3">A Peerdustry gerencia de ponta a ponta o processo de compra e venda de peças usinadas de baixo volume. Nossa plataforma conta atualmente com <strong> mais de 400 fornecedores </strong> e clientes nos mais diversos segmentos, o que garante um ganho de eficiência em toda a cadeia produtiva.</p>
          </div>
          <div className="flex gap-6">
            <article className="basis-1/3 flex flex-col gap-6 p-8 rounded-3xl bg-white shadow-3xl">
              <div className="flex gap-2">
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
              </div>
              <h3 className="text-base 2xl:text-xl font-bold font-display">Quem consome peças usinadas</h3>
              <p className="text-sm 2xl:text-base">O processo de compra de peças usinadas costuma ser cansativo, isso porque ele gera uma grande perda de tempo e ineficiência para quem compra: muito tempo de cotação, grande variação de preços, filas de fabricação entre outros. Nesse cenário, a plataforma da Peerdustry serve como intermediadora, eliminando várias etapas do processo e garantindo a qualidade e o prazo das peças usinadas. 
              </p>
            </article>
            <article className="basis-1/3 flex flex-col gap-6 p-8 rounded-3xl bg-white shadow-3xl">
              <div>
                <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#003362"/>
                </svg>
              </div>
              <h3 className="text-base 2xl:text-xl font-bold font-display">Peerdustry</h3>
              <p className="text-sm 2xl:text-base">Unindo compradores e fornecedores de peças usinadas está a Peerdustry, uma plataforma digital de usinagem que integra as demandas das duas pontas. Unimos empresas com capacidade produtiva ociosa com outras que apresentam demanda por fabricação e reduzimos os principais custos envolvidos no processo de compra e venda de peças usinadas, levando dinamismo e eficiência para toda a cadeira produtiva.
              </p>
            </article>
            <article className="basis-1/3 flex flex-col gap-6 p-8 rounded-3xl bg-white shadow-3xl">
              <div className="flex gap-2">
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
              </div>
              <h3 className="text-base 2xl:text-xl font-bold font-display">Parceiros de manufatura</h3>
              <p className="text-sm 2xl:text-base">Quem fornece peças usinadas costuma se deparar com grandes oscilações de mercado, ou seja, momentos de alta e baixa demanda, gerando momentos de ociosidade produtiva e instabilidade financeira. Com a plataforma da Peerdustry, as empresas podem alcançar novos mercados utilizando a capacidade produtiva em momentos de ociosidade, além de eliminar 100% o custo relacionado à aquisição de novos clientes.
              </p>
            </article>
          </div> 
        </div>
      </section>
      {/* Allied companies slider */}
      <section className="bg-blue-50">
        <div ref={sliderRef} className="keen-slider flex flex-row px-16 xl:px-32 2xl:px-60 py-8 space-x-4 overflow-y-scroll scrollbar-hide">
          <a className="keen-slider__slide number-slide1 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20 text-sm text-slate-600">Empresas que<br/> confiam em nosso<br/> trabalho →</a>
          <a className="keen-slider__slide number-slide2 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://endeavor.org.br/scaleup/" target="blank"><Image src={ Endeavor } alt="" /></a>
          <a className="keen-slider__slide number-slide3 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.startupindustria.com.br/" target="blank"><Image src={ Abdi } alt="" /></a>
          <a className="keen-slider__slide number-slide4 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://liga.ventures/" target="blank"><Image src={ Liga } alt="" /></a>
          <a className="keen-slider__slide number-slide5 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.grobgroup.com/pt/" target="blank"><Image src={ Grob } alt="" /></a>
          <a className="keen-slider__slide number-slide6 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.abimaq.org." target="blank"><Image src={ Abimaq } alt="" /></a>
          <a className="keen-slider__slide number-slide7 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://fiemglab.com.br/aceleracaofiemglab40/" target="blank"><Image src={ Fiemg } alt="" /></a>
          <a className="keen-slider__slide number-slide8 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://startupsconnected.com.br/" target="blank"><Image src={ Ahk } alt="" /></a>
          <a className="keen-slider__slide number-slide9 flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20" href="https://www.openstartups.net/site/ranking/index.html" target="blank"><Image src={ Hundred } alt="" /></a>
        </div>
      </section>
      {/* 3D download section */}
      <section className="px-16 xl:px-32 2xl:px-60 py-32 bg-blue-50  text-white">
        <div className="rounded-3xl relative overflow-hidden">
          <Image src={CadImg} alt="" className="w-full h-full object-cover absolute"/>
          <div className="relative">
            <div className="bg-cad flex flex-col px-20 py-16 rounded-3xl gap-6 shadow-3xl">
              <h2 className="text-4xl font-display font-bold">Ganhe eficiência usando a modelagem 3D em desenhos técnicos!</h2>
              <p className="w-2/3">Baixe agora o e-book <strong>&#34;Desenho Técnico: por que usar a modelagem 3D?&#34;</strong> e entenda quais são as principais vantagens do desenho 3D para o mercado de usinagem e como ele pode otimizar a sua rotina de compra de peças usinadas.</p>
              <a href="https://conteudo.peerdustry.com/desenho-tecnico-por-que-usar-modelagem-3d" target="blank"><Button className="bg-blue-50 hover:bg-white text-blue-600 border-stroke-40">Baixe agora [PDF] ↓</Button></a>
            </div>
          </div>
        </div>
      </section>
      {/* Video section */}
      <section  className="flex gap-8 px-16 xl:px-32 2xl:px-60 pb-32 bg-blue-50 text-blue-600">
        <header className="basis-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-display font-bold w-4/5">Conte com o suporte da Peerdustry de ponta a ponta</h2>
          <hr className="w-32 border-solid border-2 rounded border-red-700"/>
          <p className="text-sm xl:text-base">Na nossa visão, a compra e a venda de peças usinadas devem fazer parte de um único ecossistema, trabalhando de forma integrada e otimizada. Utilizamos tecnologia para oferecer ao mercado de peças usinadas um novo e inovador modelo de negócios, resolvendo problemas de ponta a ponta, desde o início do processo de compra/venda até a entrega dos pedidos.
          </p>
          <a href="https://www.peerdustry.com/sobre-peerdustry/" target="blank"><Button className="bg-blue-500 hover:bg-blue-400 text-white border-blue-400">Saiba mais →</Button></a>
        </header>
        <iframe src="https://www.youtube.com/embed/hZ1Y0pXYBRQ?controls=1" className="basis-1/2 aspect-video rounded-3xl border-2 border-stroke-40 shadow-3xl">
        </iframe>
      </section>
    </>
  )
}