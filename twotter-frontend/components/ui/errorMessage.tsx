export default function ErrorMessage({ errors }: { errors: readonly string[] | undefined }) {
	return (
		<div className="w-full p-2">
			{

				(errors != undefined) && errors.map((message, i) => (
					<p className="bg-red-400 text-center" key={i}>{message}</p>
				)
				)
			}
		</div>
	)
}
