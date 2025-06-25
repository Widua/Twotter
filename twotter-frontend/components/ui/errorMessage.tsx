export default function ErrorMessage({ errors }: { errors: readonly string[] }) {

	return (
		<div className="w-full bg-gray-600 p-2">
			{
				errors.map((message) => (
					<p className="bg-red-400" key={message}>❗❗❗{message}❗❗❗</p>
				)
				)
			}
		</div>
	)
}
