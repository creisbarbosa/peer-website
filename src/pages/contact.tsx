import Image from "next/image"
import Background from "../../public/img/Section_bg.png"
import Illustration from "../../public/img/peer_contact_ilustra.svg"
import FormInput from "../components/Form"

export default function Contact () {
  return (
    <div className="h-[88vh] bg-blue-50 flex flex-row px-2 lg:px-32 xl:px-64">
      <section className="basis-1/2 flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-display font-bold text-blue-500">
            Entre em contato com a Peerdustry
          </h1>
          <p className="text-blue-500 ">
            Você possui duvidas para comprar suas peças usinadas? <br /> Sem problemas a nossa equipe te ajuda.
          </p>
        </div>  
        <Image src={Illustration} alt="" className="w-4/5"/>
      </section>
      <section className=" bg-blue-50/50 basis-1/2 h-full relative flex items-center justify-center">
        {/* <Image src={Background} alt="" className="h-full w-full object-cover absolute"/> */}
        <form className="relative w-96 flex flex-col gap-4">
          <FormInput
            title="Nome *"
            placeholder="Seu Nome"
            required
          />
          <FormInput
            title="Email *"
            placeholder="email@empresa.com"
            required
          />
          <FormInput
            title="Empresa *"
            placeholder="Sua Empresa LTDA"
            required
          />
          <FormInput
            title="Telefone"
            placeholder="(00) 00000 - 00000"
          />
          <textarea 
            name="Mensagem"
            placeholder="Digite aqui mensagem" 
            className="rounded-md border border-solid border-blue-200/60 placeholder-blue-200 text-sm px-4 py-2 resize-none h-24"
          />
          <button 
            type="submit"
            className="bg-blue-500 py-2 text-blue-100 font-bold uppercase rounded-lg border border-solid border-blue-400"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  )
}