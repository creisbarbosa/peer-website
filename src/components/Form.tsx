export default function FormInput(props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-blue-300 font-medium text-sm">{props.title}</label>
      <input 
        type="text"
        placeholder={props.placeholder}
        className="rounded-md px-4 py-2 border-solid border border-blue-200/60 placeholder-blue-200 text-sm text-blue-500"
      />
    </div>
  )
}