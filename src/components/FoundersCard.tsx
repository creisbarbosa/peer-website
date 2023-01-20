import Image from "next/image";

export default function FoundersCard({ avatar, name, role }) {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-3xl border-solid border-4 border-slate-700">
      <Image src={avatar} alt={name} className="object-cover absolute"/>
      <div className="flex h-full items-end">
        <div className="bg-white-10 w-full relative text-white flex gap-4 justify-center py-4 backdrop-blur-md font-display">
          <p>{name}</p>
          <strong>{role}</strong>
        </div>
      </div>
    </div>
  )
}