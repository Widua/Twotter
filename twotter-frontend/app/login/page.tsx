import Link from 'next/link'
import Modal from '@/components/ui/modal'
export default function Page() {
	return (
		<Modal>
			<div className='flex flex-col justify-center items-center w-4/5'>
				<p className='font-bold text-xl'>Sign in to Twotter</p>
				<input className='w-full p-2 mt-2 rounded-l border-2 border-gray-700 border-solid text-center text-white' type='text' placeholder='Phone, email, or username' />
				<input placeholder='Password' className='w-full p-2 mt-2 rounded-l border-2 border-gray-700 border-solid text-center text-white' type='password' />

				<button className='bg-white text-black mt-8 font-bold w-full rounded-xl p-2'>Next</button>
				<button className='border-gray-700 w-full p-2 mt-4 rounded-xl border-2 bg-black border-solid'> Forgot password? </button>
				<p className='text-gray-500 mt-8 text-left w-full'>Don't have an account? <Link className='text-blue-400' href="/register">Sign up</Link> </p>
			</div>
		</Modal>
	)
}
