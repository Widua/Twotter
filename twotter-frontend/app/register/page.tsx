import Modal from "@/components/ui/modal"

export default function Register() {
	const months: readonly string[] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate()
	return (
		<Modal>
			<div>
				<p className="font-bold text-center text-2xl">Create your account</p>
				<input className='w-full p-2 mt-2 rounded-l border-2 border-gray-700 border-solid text-center text-white' type='text' placeholder='Name' />
				<input className='w-full p-2 mt-2 rounded-l border-2 border-gray-700 border-solid text-center text-white' type='email' placeholder='Email' />
				<p className="mt-8 font-bold">Date of birth</p>
				<p className="text-sm text-gray-400">This will not be shown publicly. Confirm your own age, even if this account is for business, a pet, or something else</p>

				<div className="flex flex-row mt-8">
					<select name="monthSelector" defaultValue="" className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white">
						<option className="text-start" value="" defaultChecked hidden disabled>Month</option>
						{
							months.map((month: string) => (
								<option className="text-start" key={month} value={month.toLowerCase()}>{month}</option>
							))
						}
					</select>
					<select defaultValue="" className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white" >
						<option className="text-start" value="" defaultChecked hidden disabled>Day</option>
						{

						}
					</select>
				</div>
			</div>
		</Modal>
	);
}
