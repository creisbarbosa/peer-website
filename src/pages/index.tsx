import { Button } from "src/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">Compre peças usinadas em menos de 24h, sem se preocupar com cotação</h1>
      <p className="text-blue-600">Através de uma plataforma digital com <strong>centenas de fornecedores de usinagem</strong> , a Peerdustry possibilita comprar peças usinadas spot em poucos cliques, além de garantir o prazo de entrega acordado e qualidade das peças adquiridas.</p>
      <Button type="submit" className="text-white border-blue-400">Comprar peças usinadas</Button>
    </>
  )
}