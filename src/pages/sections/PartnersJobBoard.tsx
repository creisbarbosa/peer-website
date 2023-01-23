import Image from "next/image";

import Engagement from "../../../public/engagement_card.svg";
import Board from "../../../public/job_board.svg";

export default function JobBoard() {
  return (
    <section className="bg-blue-50 flex gap-16 px-16 xl:px-40 py-40">
      <div className="basis-2/3 space-y-10">
        <div className="space-y-8">
          <h3 className="text-4xl font-display font-bold text-blue-500">Mural de trabalho</h3>
          <div className="space-y-3">
            <svg width="66" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.0588 21.6897C49.3358 22.9977 51.8358 23.9586 54.4256 23.9559C60.9455 23.83 66.017 18.5057 65.7953 11.9644C65.5736 5.42315 60.1415 0.112025 53.6136 0C51.0239 0.00277004 48.5889 0.966823 46.4008 2.27951C42.4969 4.62152 37.9015 5.96714 32.9469 5.97234C27.9391 5.97767 23.2053 4.613 19.1128 2.23268C16.9273 0.96155 14.5191 0.0393607 12.0258 0.0422092C5.43441 0.0892487 0.283588 5.4426 0.507001 12.0336C0.730436 18.6246 6.24379 23.9667 12.8379 24C15.3313 23.9974 17.6767 23.0702 19.7758 21.7945C23.7066 19.4057 28.3476 18.031 33.3554 18.0257C38.3101 18.0205 42.9964 19.3562 47.0588 21.6897Z" fill="url(#paint0_linear_1000_683)"/>
              <path d="M54.4205 23.4559C51.9545 23.4574 49.5445 22.541 47.3078 21.2562C43.1727 18.8808 38.4007 17.5204 33.3549 17.5257C28.2546 17.5311 23.5241 18.9315 19.5162 21.3672L19.7615 21.7709L19.5162 21.3672C17.4621 22.6155 15.2078 23.4971 12.839 23.5C6.5133 23.4673 1.22101 18.338 1.00671 12.0167C0.792872 5.70801 5.71793 0.588044 12.0278 0.542207C14.3987 0.539869 16.7174 1.41793 18.8614 2.66489C23.0271 5.0878 27.8474 6.47777 32.9474 6.47234C37.9935 6.46704 42.6775 5.09627 46.658 2.70828C48.8022 1.42198 51.1454 0.503767 53.6096 0.500006C59.8705 0.609883 65.083 5.70891 65.2956 11.9813C65.5078 18.2416 60.6599 23.333 54.4205 23.4559Z" stroke="black" stroke-opacity="0.1"/>
              <defs>
              <linearGradient id="paint0_linear_1000_683" x1="0.5" y1="12" x2="65.5" y2="12.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#032340"/>
              <stop offset="0.401807" stop-color="#155453"/>
              <stop offset="0.625069" stop-color="#298D69"/>
              <stop offset="1" stop-color="#34AD75"/>
              </linearGradient>
              </defs>
            </svg>
            <p className="text-slate-600">No Mural de Trabalhos são oferecidos <b>trabalhos cotados</b>, com <b>prazos de entrega definidos</b> e todas  as informações necessárias para os nossos Parceiros de Manufatura decidirem quais peças e lotes desejam fabricar. →</p>
            <p className="text-slate-600">Os trabalhos ficam <b>disponíveis por um tempo determinado</b>, informado na oferta e por e-mail, para que todos os Parceiros de Manufatura possam <b>analisar a oportunidade</b>.</p>
            <p className="text-slate-600">Após o término deste período, o sistema da Plataforma da Peer <b>elege o melhor fornecedor para a peça</b>, baseado na <b>reputação</b> da plataforma. Quanto mais engajado com as ofertas de trabalho você for, maior será sua reputação.</p>
          </div>
          <div>
            <Image src={Engagement} alt="Cartão de Engajamento da plataforma da Peerdustry" className="float-right"/>
          </div>
        </div>
      </div>
      <div className="basis-1/3">
          <Image src={Board} alt="" className="w-full h-full object-contain"/>
      </div>
    </section>
  )
}