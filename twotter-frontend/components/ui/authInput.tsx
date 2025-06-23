
type inputTypeField = 'text' | 'email' | 'password'

export default function AuthInput(
	{
		inputType, placeholder, onChange
	}: {
		inputType: inputTypeField, placeholder: string, onChange: Function
	}
) {

	return (
		<>
			<input
				className='w-full p-2 mt-2 rounded-l border-2 border-gray-700 border-solid text-center text-white'
				type={inputType}
				placeholder={placeholder}
				onChange={e => onChange(e.target.value)}
			/>
		</>
	)
}

