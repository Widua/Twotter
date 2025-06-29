"use client"
import Modal from "@/components/ui/auth/modal"
import { FormEvent, useActionState, useState } from 'react'
import AuthInput from "@/components/ui/auth/authInput"
import Selector from "@/components/ui/auth/selector"
import { signup } from "@/lib/actions/user"
import ErrorMessage from "@/components/ui/auth/errorMessage"

export default function Register() {
	const months: readonly string[] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate()
	const [birthDate, setDate] = useState(new Date())
	const [username, setName] = useState("")
	const [email, setMail] = useState("")
	const [password, setPassword] = useState("")
	const [retypedPassword, setRetypedPassword] = useState("")


	function dateUpdater(month: number, day: number, year: number) {
		setDate(new Date(year, month, day))
	}
	function updateMonth(month: string) {
		dateUpdater(months.indexOf(month) + 1, birthDate.getDay(), birthDate.getFullYear())
	}
	function updateDay(day: string) {
		dateUpdater(birthDate.getMonth(), Number(day), birthDate.getFullYear())
	}
	function updateYear(year: string) {
		dateUpdater(birthDate.getMonth(), birthDate.getDay(), Number(year))
	}

	const [state, action, pending] = useActionState(signup, undefined)

	const handleFormSubmit = () => {
		action({ username: username, password: password, retypedPassword: retypedPassword, birthDate: birthDate, email: email, })
	}

	return (
		<Modal>
			<div className="relative">
				<form action={handleFormSubmit}>
					<p className="font-bold text-center text-2xl">Create your account</p>
					<AuthInput inputType={'text'} placeholder="Name" onChange={setName} />
					<ErrorMessage errors={state?.errors.username} />
					<AuthInput inputType={'email'} placeholder="Email" onChange={setMail} />
					<ErrorMessage errors={state?.errors.email} />
					<p className="mt-6 font-bold">Date of birth</p>
					<p className="text-sm text-gray-400">This will not be shown publicly. Confirm your own age, even if this account is for business, a pet, or something else</p>
					<div className="flex overflow-y-visible flex-row mt-2">
						<Selector
							onChange={updateMonth}
							placeholder="Month"
							values={months}
						/>
						<Selector
							onChange={updateDay}
							placeholder="Day"
							values={Array.from({ length: daysInMonth(birthDate.getFullYear(), birthDate.getMonth()) }, (_, i) => i + 1).map((num) => num.toString())}
						/>
						<Selector
							onChange={updateYear}
							placeholder="Year"
							values={Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((num) => num.toString())}
						/>
					</div>
					<ErrorMessage errors={state?.errors.birthDate} />
					<div className="mt-8">
						<AuthInput inputType={'password'} placeholder="Password" onChange={setPassword} />
						<AuthInput inputType={'password'} placeholder="Retyped Password" onChange={setRetypedPassword} />
					</div>
					<ErrorMessage errors={state?.errors.password} />
					<button disabled={pending} type="submit" className='bg-white text-black mt-8 font-bold w-full rounded-xl p-2'>Next</button>
				</form>
			</div>
		</Modal>
	);
}
