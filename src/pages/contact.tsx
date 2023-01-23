import Image from "next/image"
import { useState } from "react"
import Illustration from "../../public/img/peer_contact_ilustra.svg"

export default function Contact () {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ submitted, setSubmitted ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Enviando')

    let data = {
      name,
      email,
      company,
      phone,
      message,
    }

    fetch('api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log('Resposta recebida')
      if (response.status === 200) {
        console.log('Resposta bem sucedida!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setCompany('')
        setPhone('')
        setMessage('')
      }
    })
  }

  return (
    <div className="h-[88vh] bg-blue-50 flex flex-row px-2 lg:px-32 xl:px-64">
      <section className="basis-1/2 flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-display font-bold text-blue-500 text-center">
            Entre em contato com a Peerdustry
          </h1>
          <p className="text-blue-500 text-center">
            Você possui duvidas para comprar suas peças usinadas? <br /> Sem problemas a nossa equipe te ajuda.
          </p>
        </div>  
        <Image priority src={Illustration} alt="" className="w-3/4"/>
      </section>
      <section className=" bg-blue-50/50 basis-1/2 h-full relative flex items-center justify-center">
        {/* <Image src={Background} alt="" className="h-full w-full object-cover absolute"/> */}
        <form className="relative w-96 flex flex-col gap-4">
        
          <div 
            className="flex flex-col gap-1">
            <label 
              htmlFor="name"
              className="text-blue-300 font-medium text-sm">
                Nome *
              </label>
            <input 
              type="text"
              name="name"
              placeholder="Seu Nome"
              required
              className="rounded-md px-4 py-2 border-solid border border-blue-200/60 placeholder-blue-200 text-sm text-blue-400 focus:outline-blue-200"
              onChange={event => {
                setName(event.target.value)
              }}
            />
          </div >

          <div 
            className="flex flex-col gap-1">
            <label 
              htmlFor="email"
              className="text-blue-300 font-medium text-sm">
                E-mail*
              </label>
            <input 
              type="email"
              name="email"
              placeholder="seuemail@empresa.com"
              required
              className="rounded-md px-4 py-2 border-solid border border-blue-200/60 placeholder-blue-200 text-sm text-blue-400 focus:outline-blue-200"
              onChange={event => {
                setEmail(event.target.value)
              }}
            />
          </div >

          <div 
            className="flex flex-col gap-1">
            <label 
              htmlFor="name"
              className="text-blue-300 font-medium text-sm">
                Empresa*
              </label>
            <input 
              type="text"
              name="company"
              placeholder="Nome da empresa"
              required
              className="rounded-md px-4 py-2 border-solid border border-blue-200/60 placeholder-blue-200 text-sm text-blue-400 focus:outline-blue-200"
              onChange={event => {
                setCompany(event.target.value)
              }}
            />
          </div >

          <div 
            className="flex flex-col gap-1">
            <label 
              htmlFor="phone"
              className="text-blue-300 font-medium text-sm">
                Telefone *
              </label>
            <input 
              type="phone"
              name="phone"
              placeholder="(00) 0000 - 0000"
              className="rounded-md px-4 py-2 border-solid border border-blue-200/60 placeholder-blue-200 text-sm text-blue-400 focus:outline-blue-200"
              onChange={event => {
                setPhone(event.target.value)
              }}
            />
          </div >

          <textarea 
            name="message"
            placeholder="Digite aqui sua  mensagem" 
            required
            className="rounded-md border border-solid border-blue-200/60 placeholder-blue-200 text-sm text-blue-400 px-4 py-2 resize-none h-24 focus:outline-blue-200"
            onChange={event => {
              setMessage(event.target.value)
            }}
          />

          <input
            type="submit"
            value="enviar"
            className="bg-blue-500 py-2 text-blue-100 font-bold uppercase rounded-md border border-solid border-blue-400 hover:bg-red-600 hover:border-red-700 hover:text-red-50 transition-colors"
            onClick={event => {
              handleSubmit(event)
            }}
          />

        </form>
      </section>
    </div>
  )
}