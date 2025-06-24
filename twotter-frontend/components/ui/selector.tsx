
export default function Selector({
	onChange, values, placeholder
}: {
	onChange: Function
	values: readonly string[]
	placeholder: string
}) {

	return (
		<select onChange={(e) => onChange(e.target.value)} defaultValue="" className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white">
			<option className="text-start" value="" defaultChecked hidden disabled>{placeholder}</option>
			{
				values.map(
					(val) => (
						<option className="text-start" key={val} value={val}>{val}</option>
					)
				)
			}
		</select>
	)
}
