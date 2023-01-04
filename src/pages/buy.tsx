import { Button } from "../components/Button";

import Img4 from "../../public/img/p_img_4.png";
import Img5 from "../../public/img/p_img_5.png";
import Img6 from "../../public/img/p_img_6.png";
import Img7 from "../../public/img/p_img_7.png";
import Img8 from "../../public/img/p_img_8.png";
import Img9 from "../../public/img/p_img_9.png";``
import Img10 from "../../public/img/p_img_10.png";
import Img11 from "../../public/img/p_img_11.png";
import Image from "next/image";

import { CheckSquare, Timer, ToggleRight, Vault } from "phosphor-react";

export default function Buy() {
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
          <h1 className="text-4xl xl:text-5xl font-bold font-display text-blue-50 w-2/4 xl:w-4/5 2xl:w-2/3">Compre peças usinadas<br /> sem necessidade de cotação</h1>
          <p className="text-blue-50 leading-7 w-2/5">A Peerdustry produz as suas demandas com prazos de entrega curtos e garantia de qualidade. Compre peças usinadas economizando tempo e dinheiro.</p>
          <a href="https://www.peerdustry.com/comprar-pecas-usinadas/#contact" target="blank"><Button type="submit" className="bg-red-600 hover:bg-red-700 text-white border-red-800 mt-6">Converse com nossos consultores ↗</Button></a>
        </div>
      </section>
      {/*Second section */}
      <section className="bg-gradient-to-r from-slate-300 to-white border-solid border-b-[1px] border-stroke-40">
        <div className="flex flex-col items-center gap-8 py-32">
          <h1 className="text-5xl font-bold font-display text-blue-500 text-center">Tenha acesso à <br />centenas de fornecedores</h1>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9989 14.1934C27.5074 13.7783 28.9638 13.1189 30.0524 12.0082C32.7429 9.16102 32.6366 4.70723 29.7907 1.99983C26.9449 -0.707557 22.4242 -0.655731 19.6301 2.09292C18.5415 3.20361 17.9226 4.65979 17.5542 6.15961C16.897 8.83545 15.5295 11.3807 13.4468 13.5056C11.3417 15.6533 8.77553 17.0967 6.05181 17.8302C4.59726 18.222 3.19587 18.8586 2.14786 19.928C-0.605966 22.772 -0.520741 27.2722 2.34674 30.0002C5.21423 32.7281 9.78219 32.6548 12.571 29.844C13.6191 28.7747 14.2159 27.3726 14.5623 25.9268C15.2112 23.2193 16.5857 20.6422 18.6907 18.4944C20.7734 16.3695 23.3075 14.9341 25.9989 14.1934Z" fill="#00437F"/>
            <path d="M11.4222 5.84615C11.4222 9.07489 8.86528 11.6923 5.71112 11.6923C2.55696 11.6923 0 9.07489 0 5.84615C0 2.61741 2.55696 0 5.71112 0C8.86528 0 11.4222 2.61741 11.4222 5.84615Z" fill="#00437F"/>
            <path d="M31.862 26.1538C31.862 29.3826 29.3051 32 26.1509 32C22.9968 32 20.4398 29.3826 20.4398 26.1538C20.4398 22.9251 22.9968 20.3077 26.1509 20.3077C29.3051 20.3077 31.862 22.9251 31.862 26.1538Z" fill="#00437F"/>
          </svg>
          <p className="w-2/3 2xl:w-1/3 text-center text-blue-500">A Peer conta com <strong>centenas de Parceiros de Manufatura homologados</strong> em nossa plataforma digital. Portanto, os nossos clientes têm acesso a um grande volume de fornecedores em um só canal. <strong>Economize tempo na busca por novos fornecedores!</strong></p>
          <a href="" className="text-xl text-blue-500 hover:text-slate-500 font-bold">Comprar peças usinadas ↗</a>
          <div className="grid grid-cols-4 gap-4 px-32 xl:px-64 2xl:px-80">
            <Image src={Img4} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img5} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img6} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img7} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img8} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img9} alt="" className="rounded-2xl aspect-square object-cover"/>
            <Image src={Img10} alt="" className="rounded-2xl aspect-square object-cover"/>
          </div>
        </div>
      </section>
      {/*Third Section*/}
      <section className="flex gap-6 bg-blue-50 py-32 px-16 xl:px-32 2xl:px-48">
        <div className="basis-2/5 xl:basis-1/2 flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-blue-500">Como a Peer ajuda<br /> seus clientes?</h1>
          <svg width="98" height="24" viewBox="0 0 98 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#003362"/>
            <path d="M78.5588 21.6897C80.8358 22.9977 83.3358 23.9586 85.9256 23.9559C92.4455 23.83 97.517 18.5057 97.2953 11.9644C97.0736 5.42315 91.6415 0.112025 85.1136 0C82.5239 0.00277004 80.0889 0.966823 77.9008 2.27951C73.9969 4.62152 69.4015 5.96714 64.4469 5.97234C59.4391 5.97767 54.7053 4.613 50.6128 2.23268C48.4273 0.96155 46.0191 0.0393607 43.5258 0.0422092C36.9344 0.0892487 31.7836 5.4426 32.007 12.0336C32.2304 18.6246 37.7438 23.9667 44.3379 24C46.8313 23.9974 49.1767 23.0702 51.2758 21.7945C55.2066 19.4057 59.8476 18.031 64.8554 18.0257C69.8101 18.0205 74.4964 19.3562 78.5588 21.6897Z" fill="#003362"/>
          </svg>
          <p className="text-blue-500 xl:w-3/4">Nosso cadastro detalhado de fornecedores, com informações do <strong>mapeamento da rede de fornecedores, características construtivas e habilidades técnicas</strong>, garantem a produção do seu lote de peças por especialistas.</p>
          <a href="" className="text-xl text-blue-500 hover:text-slate-500 font-bold">Fale com a Peer ↗</a>
        </div>
        <div className="grid grid-cols-2 gap-6 basis-3/5 xl:basis-1/2">
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl border-solid border border-stroke-40">
            <div className="flex bg-black-5 justify-between items-center px-5 py-4">
              <h3 className="text-blue-500 font-bold">Otimização<br /> de tempo</h3>
              <Timer size={24} className="fill-blue-500" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Reduza o processo de compras de semanas para horas. Use seu tempo para focar no core business</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl border-solid border border-stroke-40">
            <div className="flex bg-black-5 justify-between items-center px-5 py-4">
              <h3 className="text-blue-500 font-bold">Qualidade dos<br /> produtos</h3>
              <CheckSquare size={24} className="fill-blue-500" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">A gestão da produção reflete na melhoria da qualidade das peças. Geramos valor por meio de operações otimizadas e eficientes</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl border-solid border border-stroke-40">
            <div className="flex bg-black-5 justify-between items-center px-5 py-4">
              <h3 className="text-blue-500 font-bold">Redução<br /> de custos</h3>
              <Vault size={24} className="fill-blue-500" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">A Peer resolve todas as etapas do processo de compras de peças usinadas, gerando economia e mais tempo para as empresas</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-3xl border-solid border border-stroke-40">
            <div className="flex bg-black-5 justify-between items-center px-5 py-4">
              <h3 className="text-blue-500 font-bold">Novas<br /> possibilidades</h3>
              <ToggleRight size={24} className="fill-blue-500" weight="fill" />
            </div>
            <p className="p-5 text-sm leading-relaxed text-blue-500">Amplie sua planta digitalmente. Tenha acesso a uma fábrica infinita sob demanda e evite altos investimentos em novos equipamentos</p>
          </div>
        </div>
      </section>
      {/*Fourth Section */}
      <section className="flex flex-row gap-6 bg-blue-50 px-16 xl:px-32 2xl:px-48 py-16 ">
        <div className="basis-1/4">
          <h2 className="font-bold text-xl text-blue-500">Métodos de compra</h2>
          <strong className="font-normal text-slate-500">Principais diferenças →</strong>
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
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Homologação de fornecedores</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Solicitação de cotação</td>
              <td className="px-4 py-3 text-sm text-blue-500">Envio de Desenho Técnico</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Cobrança de resposta da solicitação</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Equalização das propostas</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Seleção do fornecedor ideal</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Confirmação do recebimento do pedido de compra</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Acompanhamento de produção</td>
              <td className="px-4 py-3 text-sm text-blue-500">Processo de produção</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Alinhamento de logística</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Execução de pagamentos</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Análise do desempenho e manutenção de registros</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm text-slate-500">Apontamento de não conformidades</td>
              <td className="px-4 py-3 text-sm text-blue-500">-</td>
            </tr>
            <tr className="border-solid border-b border-b-stroke-40">
              <td className="px-4 py-3 text-sm font-bold text-red-600">12 etapas</td>
              <td className="px-4 py-3 text-sm font-bold text-green-600">2 etapas</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/*Fifth Section */}
      <section className="flex flex-col gap-16 px-16 xl:px-32 2xl:px-48 pt-16 pb-32 bg-blue-50">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-4xl font-bold text-blue-500 text-center">Simplifique a compra <br /> de peças usinadas spot</h2>
          <svg width="164" height="16" viewBox="0 0 164 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.23242" cy="8" r="8" fill="#00437F"/>
            <circle cx="32.2324" cy="8" r="8" fill="#00437F"/>
            <circle cx="56.2324" cy="8" r="8" fill="#00437F"/>
            <circle cx="80.2324" cy="8" r="8" fill="#00437F"/>
            <circle cx="104.232" cy="8" r="8" fill="#00437F"/>
            <path d="M151.272 14.4598C152.79 15.3318 154.456 15.9724 156.183 15.9706C160.529 15.8867 163.91 12.3371 163.763 7.97626C163.615 3.61543 159.993 0.0746835 155.642 0C153.915 0.00184669 152.292 0.644549 150.833 1.51968C148.23 3.08102 145.167 3.97809 141.864 3.98156C138.525 3.98512 135.369 3.07533 132.641 1.48846C131.184 0.641033 129.579 0.0262405 127.916 0.0281395C123.522 0.0594991 120.088 3.6284 120.237 8.0224C120.386 12.4164 124.062 15.9778 128.458 16C130.12 15.9983 131.684 15.3801 133.083 14.5296C135.704 12.9371 138.797 12.0207 142.136 12.0171C145.439 12.0137 148.563 12.9041 151.272 14.4598Z" fill="#00437F"/>
          </svg>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <div className="basis-1/3 rounded-2xl overflow-hidden">
              <Image src={Img11} alt="" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-6 text-blue-500 basis-2/3 p-8">
              <p>As empresas que precisam adquirir peças usinadas enfrentam diariamente os altos custos dos processos de compras e de acompanhamento da produção.</p>
              <p>Homologação de fornecedores, cotação, cobrança por respostas, sanar dúvidas técnicas, equalização de propostas, pedido, acompanhar produção. Nenhum desses processos é necessário com a Peerdstry.</p>
              <p>Comprando peças usinadas em nossa plataforma, você deixa de se preocupar com todas as dificuldades e custos da gestão da cadeia de fornecedores. Além disso, é a oportunidade de simplificar o processo de compras utilizando um novo modelo de negócios e estar em alinhamento com as melhores práticas do mercado.</p>
            </div>
          </div>
          <div className="flex flex-col mt-2 2xl:-mt-8 gap-4">
            <p className="bg-white p-4 rounded-2xl shadow-3xl text-blue-500 w-2/6">Com a Peer, você evita falhas de qualidade e atraso nos pedidos. <strong> Nós resolvemos 100% dos problemas das empresas compradoras!</strong></p>
          </div>
          <div className="flex flex-col gap-2 -mt-40">
            <div className="flex flex-row gap-2">
              <strong className="text-white bg-blue-500 px-6 py-2 rounded-full">↑ garantia de qualidade</strong>
              <strong className="text-white bg-blue-500 px-6 py-2 rounded-full">↑ redução de prazos</strong>
            </div>
            <div className="flex flex-row gap-2">
              <strong className="text-white bg-blue-500 px-6 py-2 rounded-full">↑ confidencialidade dos desenhos técnicos</strong>
            </div>
            <div className="flex flex-row gap-2">
              <strong className="text-white bg-blue-500 px-6 py-2 rounded-full">↓ tempo e energia desperdiçados</strong>
              <strong className="text-white bg-blue-500 px-6 py-2 rounded-full">↑ capacidade produtiva</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}