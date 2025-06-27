export default function ErrorMessage({ errors }: { errors: readonly string[] | undefined }) {

	return (
		<div className="w-full bg-gray-600 p-2">
			{

				(errors != undefined) && errors.map((i, message) => (
					<p className="bg-red-400" key={i}>❗❗❗{message}❗❗❗</p>
				)
				)
			}
		</div>
	)
}
