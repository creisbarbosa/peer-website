import Image from "next/image";

export default function Slider({ kind, keyText }) {

  return (

    <section className="bg-blue-50">
      <li 
        className="flex flex-row px-16 xl:px-32 2xl:px-60 py-8 justify-between"
      >
        <a className="flex justify-center items-center w-40 h-20 text-sm text-slate-600">
          Empresas que<br/> {keyText} nosso<br/> trabalho →
        </a>
        {kind.map((company) => {
          return (
            <a 
              key={company.name}
              className="flex justify-center items-center bg-white rounded-lg shadow-3xl w-40 h-20"
              href={company.href}
              target="blank"
            >
                <Image src={company.img} alt="" />
            </a>
          )
        })}

      </li>
    </section>
  )
}