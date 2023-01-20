export default function PartnerBenefitsCard(props) {
  return (
    <div className="flex flex-col justify-between text-white aspect-square basis-1/3 bg-blue-500 p-6 rounded-3xl border-solid border-2 border-stroke-40 items-end shadow-3xl">
      <strong className="font-light text-sm text-slate-50">Economize</strong>
      <h4 className="text-5xl font-display font-bold">{props.content}</h4>
      <strong className="font-light text-base text-slate-50 text-right">{props.subtitle}</strong>
    </div>
  )
}