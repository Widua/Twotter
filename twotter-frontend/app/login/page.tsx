"use client"

import Link from 'next/link'
import AuthInput from '@/components/ui/auth/authInput'
import { useActionState, useState } from 'react'
import Modal from '@/components/ui/auth/modal'
import { login } from '@/lib/actions/user'
import ErrorMessage from '@/components/ui/auth/errorMessage'
export default function Page() {
	const [username, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [state, action, pending] = useActionState(login, undefined)

	const handleLoginSubmit = () => {
		action({ username: username, password: password })
	}

	return (
		<Modal>
			<div className='relative'>
				<div className='flex flex-col justify-center items-center'>
					<form action={handleLoginSubmit}>
						<p className='font-bold text-xl'>Sign in to Twotter</p>
						<AuthInput onChange={setLogin} placeholder='Phone, email of username' inputType='text' />
						<ErrorMessage errors={state?.errors.username} />
						<AuthInput onChange={setPassword} placeholder='Password' inputType='password' />
						<ErrorMessage errors={state?.errors.password} />
						<button type='submit' disabled={pending} className='bg-white text-black mt-8 font-bold w-full rounded-xl p-2'>Next</button>
					</form>
					<button className='border-gray-700 w-full p-2 mt-4 rounded-xl border-2 bg-black border-solid'> Forgot password? </button>
					<p className='text-gray-500 mt-8 text-left w-full'>Don't have an account? <Link className='text-blue-400' href="/register">Sign up</Link> </p>
				</div>
			</div>
		</Modal>
	)
}
