import BrunoAvatar from "../../public/img/p_img_1.png";
import ThiagoAvatar from "../../public/img/p_img_2.png";
import PauloAvatar from "../../public/img/p_img_3.png";

import AboutTopicCard from "../components/AboutTopicCard";
import FoundersCard from "../components/FoundersCard";

import AboutHero from "./sections/AboutHero";

const topics = [
  {
    id: 1,
    content: "Somos um empresa de tecnologia"
  },
  {
    id: 2,
    content: "Conectamos empresas que compram/ vendem peças usinadas por meio de uma inovadora plataforma digital"
  },
  {
    id: 3,
    content: "Nossas soluções tornam o mercado de usinagem mais eficiente e menos burocrático"
  },
  {
    id: 4,
    content: "Nossos Parceiros de Manufatura fabricam peças, utilizando sua capacidade produtiva ociosa, cumprindo todas as especificações técnicas e prazos de entrega"
  },
  {
    id: 5,
    content: "Nossos clientes podem comprar, em poucos cliques, peças usinadas sem a necessidade de cotação com fornecedores especialistas"
  },
  {
    id: 6,
    content: "Gerenciamos de ponta a ponta os processos de compra e venda dos nossos parceiros comerciais"
  },
  {
    id: 7,
    content: "Formamos a maior rede digital de usinagem conectada da América Latina"
  }
]

const founders = [
  {
    name: "Bruno Gallert",
    role: "CEO",
    avatar: BrunoAvatar,
  },
  {
    name: "Paulo Navarro",
    role: "COO",
    avatar: PauloAvatar,
  },
  {
    name: "Thiago Petrone",
    role: "CTO",
    avatar: ThiagoAvatar,
  },
]

export default function About() {
  return(
    <>
      <AboutHero />

      <section className="bg-blue-50 grid grid-cols-4 gap-6 px-40 pt-32">
          <div className="space-y-6">
            <h3 className="font-bold text-2xl text-blue-500">Conheça a Peer em 7 tópicos →</h3>
            <svg width="33" height="12" viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2794 10.8449C24.4179 11.4989 25.6679 11.9793 26.9628 11.9779C30.2227 11.915 32.7585 9.25283 32.6477 5.9822C32.5368 2.71157 29.8207 0.0560127 26.5568 0C25.2619 0.00138502 24.0445 0.483412 22.9504 1.13976C20.9985 2.31076 18.7008 2.98357 16.2234 2.98617C13.7195 2.98884 11.3526 2.3065 9.3064 1.11634C8.21364 0.480775 7.00957 0.0196803 5.76288 0.0211046C2.4672 0.0446244 -0.108206 2.7213 0.0035007 6.0168C0.115218 9.31229 2.8719 11.9834 6.16896 12C7.41564 11.9987 8.58835 11.5351 9.63792 10.8972C11.6033 9.70283 13.9238 9.01551 16.4277 9.01284C18.905 9.01024 21.2482 9.67809 23.2794 10.8449Z" fill="#00437F"/>
            </svg>
          </div>

          {topics.map((topic) => {
            return (
              <AboutTopicCard 
                key={topic.id}
                id={topic.id}
                content={topic.content}
              />
            )
          })}

      </section>

      <section className="bg-blue-50">
        <div className="px-16 xl:px-40 pt-32 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-blue-500 w-1/2 xl:w-1/3">Transformando o mercado de usinagem</h2>
          <p className="text-blue-500 w-2/3">Fundada em 2016, a Peerdustry foi criada com uma missão: <strong>transformar, de forma inovadora, a compra e a venda de peças usinadas sob demanda.</strong> Como uma empresa de tecnologia, nascemos para simplificar a vida de fornecedores e compradores, que podem contar com a Peerdustry de ponta a ponta em seus projetos.</p>
        </div>
      </section>
      
      <section className="bg-blue-50 px-16 xl:px-40 pt-8 pb-32">

        <div className="space-y-2">
          <h2 className="text-3xl font-bold font-display text-blue-500">Fundadores</h2>
          <svg width="164" height="16" viewBox="0 0 164 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#E3E8EF"/>
            <circle cx="32" cy="8" r="8" fill="#E3E8EF"/>
            <path d="M79.0392 14.4598C80.5572 15.3318 82.2239 15.9724 83.9504 15.9706C88.297 15.8867 91.678 12.3371 91.5302 7.97626C91.3824 3.61543 87.761 0.0746835 83.4091 0C81.6826 0.00184669 80.0593 0.644549 78.6005 1.51968C75.998 3.08102 72.9343 3.97809 69.6313 3.98156C66.2927 3.98512 63.1368 3.07533 60.4085 1.48846C58.9515 0.641033 57.3461 0.0262405 55.6838 0.0281395C51.2896 0.0594991 47.8557 3.6284 48.0047 8.0224C48.1536 12.4164 51.8292 15.9778 56.2253 16C57.8875 15.9983 59.4511 15.3801 60.8506 14.5296C63.4711 12.9371 66.5651 12.0207 69.9036 12.0171C73.2067 12.0137 76.3309 12.9041 79.0392 14.4598Z" fill="#E3E8EF"/>
            <circle cx="107.535" cy="8" r="8" fill="#E3E8EF"/>
            <circle cx="131.535" cy="8" r="8" fill="#E3E8EF"/>
            <circle cx="155.535" cy="8" r="8" fill="#E3E8EF"/>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-6 px-8 xl:px-32 py-16">
          
          {founders.map((founder) =>{
            return (
              <FoundersCard 
                key={founder.name}
                name={founder.name}
                role={founder.role}
                avatar={founder.avatar}
              />
            )
          })}

        </div>

      </section>
    </>
  )
}