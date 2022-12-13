export default function Navbar() {
  return (
    <nav className="flex sm:justify-center space-x-4 m-2">
      {[
        ['Home', '/dashboard'],
        ['Compre', '/buy'],
        ['Seja Parceiro', '/partner'],
        ['Recursos', '/resources'],
        ['A Peerdustry', '/about'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-blue-900 font-medium hover:bg-slate-100 hover:text-slate-900" key="">{title}</a>
      ))}
    </nav>
  )
}