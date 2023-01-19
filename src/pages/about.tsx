import Image from "next/image";
import Background from "../../public/img/Section_bg.png"
import Img1 from "../../public/img/p_img_1.png";
import Img2 from "../../public/img/p_img_2.png";
import Img3 from "../../public/img/p_img_3.png";

export default function About() {
  return(
    <>
      {/* Hero Section */}
      <section className='w-full relative h-[88vh] border-solid border-b border-stroke-40'>
      <Image src={Background} alt="" className="h-full w-full object-cover absolute"/>
        <div className="px-16 xl:px-40 2xl:px-60 py-32 space-y-12 relative">
          <div className="flex space-x-4">
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.5" cy="22" r="21.5" className="fill-white-10"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  className="fill-white-10"/>
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl xl:text-5xl font-bold font-display text-blue-50 w-2/4 xl:w-4/5 2xl:w-2/3">Sobre a Peerdustry</h1>
            <p className="text-blue-50 text-base w-2/5">Quem somos e o que fazemos</p>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-blue-50">
        <div className="flex items-center justify-center px-32 xl:px-80 2xl:px-96 py-32">
          <p className=" text-blue-500 text-center text-3xl font-display" >O que fazemos é <strong>unir empresas com capacidade produtiva ociosa com outras que apresentam demanda por fabricação</strong>.</p>
        </div>
      </section>
      {/*Third Section*/}
      <section className="bg-blue-50">
        <div className="grid grid-cols-4 gap-6 px-16 xl:px-32 2xl:px-48 pt-16 pb-32">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-blue-500">Conheça a Peer em 7 tópicos →</h3>
            <svg width="33" height="12" viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2794 10.8449C24.4179 11.4989 25.6679 11.9793 26.9628 11.9779C30.2227 11.915 32.7585 9.25283 32.6477 5.9822C32.5368 2.71157 29.8207 0.0560127 26.5568 0C25.2619 0.00138502 24.0445 0.483412 22.9504 1.13976C20.9985 2.31076 18.7008 2.98357 16.2234 2.98617C13.7195 2.98884 11.3526 2.3065 9.3064 1.11634C8.21364 0.480775 7.00957 0.0196803 5.76288 0.0211046C2.4672 0.0446244 -0.108206 2.7213 0.0035007 6.0168C0.115218 9.31229 2.8719 11.9834 6.16896 12C7.41564 11.9987 8.58835 11.5351 9.63792 10.8972C11.6033 9.70283 13.9238 9.01551 16.4277 9.01284C18.905 9.01024 21.2482 9.67809 23.2794 10.8449Z" fill="#00437F"/>
            </svg>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">1</h4>
            <p className="text-sm xl:text-base">Somos uma <b>empresa de tecnologia</b></p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">2</h4>
            <p className="text-sm xl:text-base">Conectamos empresas que compram/ vendem peças usinadas por meio de uma <b>inovadora plataforma digital</b></p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">3</h4>
            <p className="text-sm xl:text-base">Nossas soluções tornam o mercado de <b>usinagem mais eficiente e menos burocrático</b></p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">4</h4>
            <p className="text-sm xl:text-base">Nossos Parceiros de Manufatura fabricam peças, utilizando sua <b>capacidade produtiva ociosa</b>, cumprindo todas as especificações técnicas e prazos de entrega</p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">5</h4>
            <p className="text-sm xl:text-base">Nossos clientes podem comprar, em poucos cliques, peças usinadas <b>sem a necessidade de cotação</b> com fornecedores especialistas</p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">6</h4>
            <p className="text-sm xl:text-base"><b>Gerenciamos de ponta a ponta os processos de compra e venda</b> dos nossos parceiros comerciais</p>
          </div>
          <div className="bg-white border-solid border-4 border-blue-500 rounded-2xl flex gap-3 2xl:gap-4 p-3 2xl:p-5 text-blue-500 shadow-3xl aspect-square">
            <h4 className="text-xl font-bold font-display">7</h4>
            <p className="text-sm xl:text-base">Formamos a <b>maior rede digital de usinagem conectada da América Latina</b></p>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-blue-50">
        <div className="px-16 xl:px-40 pt-32 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-blue-500 w-1/2 xl:w-1/3">Transformando o mercado de usinagem</h2>
          <p className="text-blue-500 w-2/3">Fundada em 2016, a Peerdustry foi criada com uma missão: <strong>transformar, de forma inovadora, a compra e a venda de peças usinadas sob demanda.</strong> Como uma empresa de tecnologia, nascemos para simplificar a vida de fornecedores e compradores, que podem contar com a Peerdustry de ponta a ponta em seus projetos.</p>
        </div>
      </section>
      {/*Fourth Section*/}
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
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-3xl">
            <Image src={Img1} alt="" className="w-full h-full object-cover absolute"/>
            <div className="flex h-full items-end">
              <div className="bg-white-10 w-full relative text-white flex gap-4 justify-center py-4 backdrop-blur-md font-display">
                <p>Bruno Gellert</p>
                <strong>CEO</strong>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-3xl">
            <Image src={Img3} alt="" className="w-full h-full object-cover absolute"/>
            <div className="flex h-full items-end">
              <div className="bg-white-10 w-full relative text-white flex gap-4 justify-center py-4 backdrop-blur-md font-display">
                <p>Paulo Navarro</p>
                <strong>COO</strong>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-3xl">
            <Image src={Img2} alt="" className="w-full h-full object-cover absolute"/>
            <div className="flex h-full items-end">
              <div className="bg-white-10 w-full relative text-white flex gap-4 justify-center py-4 backdrop-blur-md font-display">
                <p>Thiago Petrone</p>
                <strong>CTO</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}