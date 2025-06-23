"use client"
import Modal from "@/components/ui/modal"
import { useState } from 'react'
import AuthInput from "@/components/ui/authInput"

export default function Register() {
	const months: readonly string[] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate()
	const [birthDate, setDate] = useState(new Date())
	const [name, setName] = useState("")
	const [email, setMail] = useState("")
	const [password, setPassword] = useState("")
	const [retypedPassword, setRetypedPassword] = useState("")

	function dateUpdater(month: string, day: number, year: number) {
		console.log(month)
		console.log(months.indexOf(month))
		setDate(new Date(year, months.indexOf(month) + 1, day))
	}
	return (
		<Modal>
			<div>
				<p className="font-bold text-center text-2xl">Create your account</p>
				<AuthInput inputType={'text'} placeholder="Name" onChange={setName} />
				<AuthInput inputType={'email'} placeholder="Email" onChange={setMail} />
				<p className="mt-6 font-bold">Date of birth</p>
				<p className="text-sm text-gray-400">This will not be shown publicly. Confirm your own age, even if this account is for business, a pet, or something else</p>

				<div className="flex flex-row mt-2">
					<select name="monthSelector" onChange={e => dateUpdater(e.target.value, birthDate.getDay(), birthDate.getFullYear())} defaultValue="" className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white">
						<option className="text-start" value="" defaultChecked hidden disabled>Month</option>
						{
							months.map((month: string) => (
								<option className="text-start" key={month} value={month}>{month}</option>
							))
						}
					</select>
					<select defaultValue={0} onChange={e => dateUpdater(months[birthDate.getMonth() - 1], Number(e.target.value), birthDate.getFullYear())} className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white" >
						<option className="text-start" value={0} defaultChecked hidden disabled>Day</option>
						{
							Array.from({ length: daysInMonth(birthDate.getFullYear(), birthDate.getMonth()) }, (_, i) => i + 1).map((day: number) => (
								<option className="text-start" key={day} value={day}>{day}</option>
							))
						}
					</select>
					<select defaultValue="" onChange={e => dateUpdater(months[birthDate.getMonth() - 1], birthDate.getDay(), Number(e.target.value))} className="p-2 mt-2 rounded-l bg-black border-2 border-gray-700 border-solid text-center text-white" >
						<option className="text-start" value="" defaultChecked hidden disabled>Year</option>
						{
							Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year: number) => (
								<option className="text-start" key={year} value={year}>{year}</option>
							))
						}
					</select>
				</div>
				<div className="mt-8">
					<AuthInput inputType={'password'} placeholder="Password" onChange={setPassword} />
					<AuthInput inputType={'password'} placeholder="Retyped Password" onChange={setRetypedPassword} />
				</div>
			</div>
		</Modal>
	);
}
