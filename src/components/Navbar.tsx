import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className="flex sm:justify-center bg-slate-200 border-solid border-b border-stroke-40">
      <div className="flex sm:justify-center">
        {[
          ['Home', '/dashboard'],
          ['Compre', '/buy'],
          ['Seja Parceiro', '/partner'],
          ['Recursos', '/resources'],
          ['A Peerdustry', '/about'],
        ].map(([title, url]) => (
          <a href={url} className="px-6 py-6 text-blue-500 font-regular hover:bg-slate-100" key="">{title}</a>
        ))}
      </div>
      <Button className="bg-blue-50 text-blue-500 border-solid border-stroke-40 hover:bg-white">Entrar</Button>
      <Button className="text-white border-blue-400">Falar com nossos consultores</Button>
    </nav>
  )
}