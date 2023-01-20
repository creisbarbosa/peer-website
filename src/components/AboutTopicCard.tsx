export default function AboutTopicCard(props) {
  return (
    <div className="bg-white rounded-2xl flex gap-4 p-6  text-blue-500 shadow-3xl">
      <h4 className="text-xl font-bold font-display">{props.id}</h4>
      <p className="text-sm xl:text-base">{props.content}</p>
    </div>
  )
}