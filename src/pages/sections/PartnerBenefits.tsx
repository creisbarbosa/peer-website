import Image from "next/image";

import Image01 from "../../../public/img/exemple.png";
import PartnerBenefitsCard from "../../components/PrtnerBenefitsCard";

export default function PartnerBenefits() {
  return (
    <section className="bg-blue-50 pl-0 pr-32 py-32 flex items-center gap-28">
      <div className="basis-1/2 overflow-hidden rounded-r-3xl border-y-2 border-r-2 border-stroke-40 shadow-3xl">
        <Image src={Image01} alt="" className="object-cover"/>
      </div>
      <div className="basis-1/2 flex flex-col gap-8 text-blue-500">
        <h2 className="text-4xl font-bold leading-[52px] w-4/5">Ajudamos nossos Parceiros a usinar mais peças</h2>
        <hr className="w-32 border-solid border-2 rounded border-red-700"/>
        <p className="w-2/3">A Peerdustry cuida das operações comerciais dos seus fornecedores de ponta a ponta.</p>
        <div className="flex gap-6">
          <PartnerBenefitsCard 
            content="+60h"
            subtitle="Abertura de novos clientes"
          />
          <PartnerBenefitsCard 
            content="+70h"
            subtitle="Elaboração de orçamentos"
          />
          <PartnerBenefitsCard 
            content="+10h"
            subtitle="Compra de MP + Fretes"
          />
        </div>
        <a 
          href="https://usinagem.peerdustry.com/signup" 
          target="blank" 
          className="text-white flex items-center justify-center w-52 bg-red-700 hover:bg-red-600 py-3 font-bold text-base rounded-lg border-solid border-2 border-red-600 hover:border-red-500"
        >
          Seja um parceiro →
        </a>
      </div>
    </section>
  )
}