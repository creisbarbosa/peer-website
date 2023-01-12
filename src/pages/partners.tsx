import Image from "next/image";
import { Button } from "../components/Button";

import Img4 from "../../public/img/p_img_4.png";
import Img5 from "../../public/img/p_img_5.png";
import Img6 from "../../public/img/p_img_6.png";
import Img7 from "../../public/img/p_img_7.png";
import Img12 from "../../public/img/p_img_12.png";
import Img13 from "../../public/img/p_img_13.png";
import Image01 from "../../public/img/exemple.png";

import Cnc from "../../src/assets/process/cnc.svg"
import Eletroesrosao from "../../src/assets/process/eletroesrosao.svg"
import Fresamento from "../../src/assets/process/fresamento.svg"
import Mandrilhadora from "../../src/assets/process/mandrilhadora.svg"
import Torneamento from "../../src/assets/process/torneamento.svg"

import { ChartPieSlice, CurrencyCircleDollar, CurrencyDollar, Cursor, Tag, ClockClockwise, TrendUp, PresentationChart, ArrowClockwise } from "phosphor-react";

export default function Partners() {
  return (
    <>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-700  to-blue-500 h-full w-full relative'>
        <div className="px-16 xl:px-40 2xl:px-60 py-16 space-y-12 border-solid border-b border-stroke-40 relative">
          <div className="flex space-x-4">
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5" className="fill-white-10"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  className="fill-white-10"/>
            </svg>
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold font-display text-blue-50 w-3/4 xl:w-4/5 2xl:w-2/3">Adquira mais clientes, <br />projetos e receita através de <br />uma plataforma de manufatura</h1>
          <p className="text-blue-50 leading-7 w-[45%]">Na plataforma da Peerdustry vários projetos são ofertados todos os dias, uma vez homologado você tem acesso ao Mural de Trabalhos, com diversas demandas de peças usinadas spot. </p>
          <a href="https://www.peerdustry.com/comprar-pecas-usinadas/#contact" target="blank"><Button type="submit" className="bg-red-600 hover:bg-red-700 text-white border-red-800 mt-6">Iniciar inscrição ↗</Button></a>
        </div>
      </section>
      {/*First Section */}
      <section className="bg-blue-50 px-16 xl:px-32 2xl:px-40 py-32 flex gap-8 xl:gap-16">
        <div className="basis-2/5 aspect-square overflow-hidden rounded-3xl border-solid border border-stroke-40">
          <Image src={Image01} alt="" className="object-cover h-full w-full"/>
        </div>
        <div className="basis-3/5 flex flex-col gap-8 text-blue-500">
          <h2 className="text-3xl font-bold  xl:w-3/4 2xl:w-2/3">Ajudamos nossos Parceiros de Manufatura a usinar mais peças</h2>
          <p className="w-2/3">A Peerdustry cuida das operações comerciais dos seus fornecedores de ponta a ponta.</p>
          <div className="flex gap-6">
            <div className="flex flex-col text-white aspect-square gap-6 basis-1/3 bg-blue-500 p-6 rounded-3xl border-solid border-2 border-stroke-40 items-end">
              <strong className="font-light text-sm">Economize</strong>
              <h4 className="text-3xl xl:text-6xl font-display font-bold">+ 60h</h4>
              <strong className="font-light text-xs xl:text-sm text-right">Abertura de novos clientes</strong>
            </div>
            <div className="flex flex-col text-white aspect-square gap-6 basis-1/3 bg-blue-500 p-6 rounded-3xl border-solid border-2 border-stroke-40 items-end">
              <strong className="font-light text-sm">Economize</strong>
              <h4 className="text-3xl xl:text-6xl font-display font-bold">+ 70h</h4>
              <strong className="font-light text-xs xl:text-sm text-right">Elaboração de orçamentos</strong>
            </div>
            <div className="flex flex-col text-white aspect-square gap-6 basis-1/3 bg-blue-500 p-6 rounded-3xl border-solid border-2 border-stroke-40 items-end">
              <strong  className="font-light text-sm">Economize</strong>
              <h4 className="text-3xl xl:text-6xl font-display font-bold">+ 10h</h4>
              <strong className="font-light text-xs xl:text-sm text-right">Compra de MP + Fretes</strong>
            </div>
          </div>
          <a href="https://usinagem.peerdustry.com/signup" target="blank" className="text-red-50 bg-red-700 hover:bg-red-600 px-9 py-3 w-52 font-bold text-sm rounded-lg border-solid border-2 border-red-600 hover:border-red-500">Seja um parceiro →</a>
        </div>
      </section>
      {/*Second section */}
      <section className="bg-gradient-to-r from-slate-300 to-white border-solid border-b border-stroke-40">
        <div className="flex flex-col items-center gap-8 py-32">
          <h1 className="text-5xl font-bold font-display text-blue-500 text-center">Venda mais com <br />menos esforço</h1>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9989 14.1934C27.5074 13.7783 28.9638 13.1189 30.0524 12.0082C32.7429 9.16102 32.6366 4.70723 29.7907 1.99983C26.9449 -0.707557 22.4242 -0.655731 19.6301 2.09292C18.5415 3.20361 17.9226 4.65979 17.5542 6.15961C16.897 8.83545 15.5295 11.3807 13.4468 13.5056C11.3417 15.6533 8.77553 17.0967 6.05181 17.8302C4.59726 18.222 3.19587 18.8586 2.14786 19.928C-0.605966 22.772 -0.520741 27.2722 2.34674 30.0002C5.21423 32.7281 9.78219 32.6548 12.571 29.844C13.6191 28.7747 14.2159 27.3726 14.5623 25.9268C15.2112 23.2193 16.5857 20.6422 18.6907 18.4944C20.7734 16.3695 23.3075 14.9341 25.9989 14.1934Z" fill="#00437F"/>
            <path d="M11.4222 5.84615C11.4222 9.07489 8.86528 11.6923 5.71112 11.6923C2.55696 11.6923 0 9.07489 0 5.84615C0 2.61741 2.55696 0 5.71112 0C8.86528 0 11.4222 2.61741 11.4222 5.84615Z" fill="#00437F"/>
            <path d="M31.862 26.1538C31.862 29.3826 29.3051 32 26.1509 32C22.9968 32 20.4398 29.3826 20.4398 26.1538C20.4398 22.9251 22.9968 20.3077 26.1509 20.3077C29.3051 20.3077 31.862 22.9251 31.862 26.1538Z" fill="#00437F"/>
          </svg>
          <a href="" className="text-lg text-blue-500 hover:text-slate-500 font-bold">Com a Peerdustry, um leque de oportunidades se abre</a>
          <p className="w-3/5 xl:w-2/5 text-center text-blue-500">Nossos Parceiros de Manufatura conseguem aumentar suas receitas significativamente sem a necessidade de acompanhamentos, visitas aos clientes e elaboração de cotações.</p>
          <div className="grid grid-cols-4 gap-4 px-32 xl:px-56 2xl:px-80">
            <Image src={Img4} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img5} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img6} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img7} alt="" className="rounded-2xl aspect-square object-cover"/>
          </div>
        </div>
      </section>
      {/* Third Section */}
      <section>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 px-16 xl:px-32 2xl:px-56 py-16 xl:py-32 bg-blue-50">
          <div className="col-span-2 space-y-4">
            <h3 className="text-blue-500 font-bold text-3xl">Vantagens de ser um <br />fornecedor Peerdustry</h3>
            <p className="text-sm leading-relaxed text-slate-500">Saiba porque seu um <br />parceiro da Peerdustry →</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-800 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Facilidade para <br />produzir</h3>
              <Cursor size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Basta demonstrar interesse em alguma oferta do nosso Mural de Trabalhos e produzir</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-700 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Agilidade nas <br />cotações</h3>
              <Tag size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">A Peerdustry resolve esta parte para você se concentrar na produção das peças</p>
          </div>
          <div className="flex gap-5 col-span-2">
            <div className="basis-1/2"></div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-3xl basis-1/2">
              <div className="flex bg-blue-800 justify-between items-center px-5 py-4">
                <h3 className="text-white font-bold">Reduza seus custos <br />de produção</h3>
                <ChartPieSlice size={24} className="fill-white" weight="fill" />
              </div>
              <p className="p-5 text-sm leading-relaxed text-blue-500">Tenha previsibilidade de tempo de execução do projeto e reduza custos</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-700 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Não tenha <br />prejuízos</h3>
              <CurrencyCircleDollar size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Evitamos que a sua empresa sofra prejuízos causados pelas oscilações do mercado</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-600 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Gere novas <br />receitas</h3>
              <CurrencyDollar size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Use máquinas ociosas para aumentar o seu faturamento</p>
          </div>
          <div className="flex gap-5 col-span-2">
            <div className="basis-1/2"></div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-3xl basis-1/2">
              <div className="flex bg-blue-700 justify-between items-center px-5 py-4">
                <h3 className="text-white font-bold">Ganhe tempo <br />e agilidade</h3>
                <ClockClockwise size={24} className="fill-white" weight="fill" />
              </div>
              <p className="p-5 text-sm leading-relaxed text-blue-500">Tenha mais tempo para se dedicar à produção</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-600 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Aumente a <br />competitividade</h3>
              <TrendUp size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Alinhe sua operação comercial às boas práticas de mercado</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl">
            <div className="flex bg-blue-500 justify-between items-center px-5 py-4">
              <h3 className="text-white font-bold">Alcance novos <br />mercados</h3>
              <PresentationChart size={24} className="fill-white" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Forneça peças para diferentes mercados e expanda os nichos de atuação da sua empresa</p>
          </div>
        </div>
      </section>
      {/* Fourth Section */}
      <section className="bg-blue-50">
        <div className="flex items-center justify-center px-16 xl:px-24 2xl:px-40 py-32">
          <p className=" text-blue-500 text-center text-4xl w-2/3 leading-normal font-display" >O maior <b>propósito</b> da Peer é que você <b>fabrique</b> e <b>fature</b> mais utilizando a <b>capacidade produtiva de <u> máquinas ociosas</u></b>.</p>
        </div>
      </section>
      {/* Fifth Section */}
      <section className="bg-blue-50">
        <div className="flex flex-col items-center gap-8 pt-32 pb-16">
          <h1 className="text-5xl font-bold font-display text-blue-500 text-center">Faça parte da nossa <br />rede de produção</h1>
          <svg width="98" height="24" viewBox="0 0 98 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.3486" cy="12" r="12" fill="#00437F"/>
            <path d="M78.9074 21.6897C81.1844 22.9977 83.6845 23.9586 86.2742 23.9559C92.7941 23.83 97.8657 18.5057 97.644 11.9644C97.4222 5.42315 91.9901 0.112025 85.4623 0C82.8725 0.00277004 80.4376 0.966823 78.2494 2.27951C74.3456 4.62152 69.7502 5.96714 64.7955 5.97234C59.7877 5.97767 55.0539 4.613 50.9614 2.23268C48.7759 0.96155 46.3678 0.0393607 43.8744 0.0422092C37.283 0.0892487 32.1322 5.4426 32.3556 12.0336C32.5791 18.6246 38.0924 23.9667 44.6865 24C47.1799 23.9974 49.5253 23.0702 51.6245 21.7945C55.5553 19.4057 60.1962 18.031 65.2041 18.0257C70.1587 18.0205 74.845 19.3562 78.9074 21.6897Z" fill="#00437F"/>
          </svg>
          <p className="w-1/2 xl:w-2/5 text-center text-blue-700"><b>Você é especialista em usinagem?</b> Na Peerdustry trabalhamos com os mais variados tipos de máquinas e processos de usinagem. Cadastre-se na nossa Plataforma e faça parte desse time de parceiros que só cresce!</p>
        </div>
        <div className="grid grid-rows-3 grid-cols-12 grid-flow-row-dense gap-6 px-16 xl:px-40">
          <div className="group col-span-4 h-32 flex gap-3 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
            <h3 className="text-slate-400 group-hover:text-slate-700 duration-300 font-bold font-display">Retífica</h3>
            <ArrowClockwise size={24} className="fill-slate-400 group-hover:fill-slate-700 duration-300 rounded-md" weight="fill"/>
          </div>
          <div className="group  col-span-5 row-span-2 flex flex-col gap-2 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
            <Image src={Cnc} alt="" className=""/>
            <h3 className="text-slate-400 group-hover:text-slate-700 duration-300 font-bold font-display">CNC</h3>
          </div>
          <div className="flex flex-col gap-6 col-span-3 row-span-2 ">
            <div className="basis-1/2 flex flex-col gap-3 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400 cursor-pointer">
              <a href="https://usinagem.peerdustry.com/signup" target="blank" className="text-slate-800 font-bold font-display">Vem para a Peer ↗</a>
            </div>
            <div className="basis-1/2 flex justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
              <Image src={Mandrilhadora} alt="" className=""/>
            </div>
          </div>
          <div className="group col-span-4 row-span-2 flex flex-col gap-8 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
            <Image src={Torneamento} alt="" className=""/>
            <h3 className="text-slate-400 group-hover:text-slate-700 duration-300 font-bold font-display">Torneamento</h3>
          </div>
          <div className="group col-span-4 flex gap-8 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
            <Image src={Eletroesrosao} alt="" className=""/>
            <h3 className="text-slate-400 group-hover:text-slate-700 duration-300 font-bold font-display">Eletroesrosão</h3>
          </div>
          <div className="group col-span-4 flex gap-8 justify-center items-center rounded-2xl bg-slate-200 hover:bg-slate-300 duration-300 border-solid border border-slate-300 hover:border-slate-400">
            <Image src={Fresamento} alt="" className=""/>
            <h3 className="text-slate-400 group-hover:text-slate-700 duration-300 font-bold font-display">Fresamento</h3>
          </div>
        </div>
      </section>
      {/* Sixth Section */}
      <section className="bg-blue-50 flex gap-16 px-16 xl:px-40 pt-32 pb-16">
        <div className="basis-1/2 space-y-8">
          <div className="flex justify-center items-center h-44 rounded-2xl bg-slate-200 border-solid border border-slate-300 overflow-hidden ">
            <Image src={Img12} alt="" className="w-full h-full object-contain"/>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-500">Mural de trabalho</h3>
            <p className="text-slate-600">No Mural de Trabalhos são oferecidos <b>trabalhos cotados</b>, e com <b>prazos de entrega definidos</b>, para os nossos Parceiros de Manufatura.</p>
            <p className="text-slate-600">Os trabalhos ficam <b>disponíveis por um tempo determinado</b>, informado na oferta e por e-mail, para que todos os Parceiros de Manufatura possam <b>analisar a oportunidade</b>.</p>
          </div>
        </div>
        <div className="basis-1/2 space-y-8">
          <div className="flex justify-center items-center h-44 rounded-2xl bg-slate-200 border-solid border border-slate-300 overflow-hidden ">
            <Image src={Img13} alt="" className="w-full h-full object-contain"/>
          </div>
          <div className="flex flex-col items-end gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-500">Seja um parceiro engajado</h3>
              <p className="text-slate-600">Após o término deste período, o sistema da Plataforma da Peer <b>elege o melhor fornecedor para a peça</b>, baseado na <b>reputação</b> da plataforma</p>
            </div>
            <a href="" className="text-blue-500 font-bold text-xl">Cadastre-se↗</a>
          </div>
        </div>
      </section>
      {/*Seventh Section */}
      <section className="flex flex-row gap-6 bg-blue-50 px-16 xl:px-40 pt-16 pb-64">
        <div className="basis-1/4 flex flex-col gap-3 pt-3">
          <h2 className="font-bold text-xl text-blue-500">Métodos de venda →</h2>
          <strong className="font-normal text-slate-500">Tradicionalmente, o caminho percorrido desde a busca por clientes até a entrega das peças usinadas é bastante atribulado.</strong>
        </div>
        <table className="basis-3/4 table-fixed">
          <thead className="border-solid border-b border-b-stroke-40">
            <tr>
              <th className="text-xl text-left px-4 py-3 text-slate-500">Método tradicional</th>
              <th className="text-xl text-left px-4 py-3 text-blue-500">Método Peerdustry</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Busca por fornecedores confiáveis</td>
              <td className="px-4 py-3 text-sm text-blue-500">Escolha da peça a ser fabricada no Mural de Trabalho</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Cadastro da empresa no novo cliente</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Aceite de condições comerciais</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Homologação pelo cliente</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Recebimento de desenhos para cotações</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Resolução de dúvidas técnicas</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Elaboração de orçamentos e detalhamento de proposta comercial</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Follow up sobre a compra das peças</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Negociação de itens das propostas comerciais</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Recebimento do pedido de compras</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Planejamento da produção</td>
              <td className="px-4 py-3 text-sm text-blue-500">Planejamento da produção</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Compra de matéria prima</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Início da produção das peças</td>
              <td className="px-4 py-3 text-sm text-blue-500">Produção da peça</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Contratação de serviços terceirizados</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Controle de qualidade</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Envio das peças</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Problemas de qualidade, devoluções e retrabalho</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm font-bold text-red-600">17 etapas</td>
              <td className="px-4 py-3 text-sm font-bold text-green-600">3 etapas</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}