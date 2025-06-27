import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="flex mt-52 flex-col gap-8 items-center justify-center">
			<Image
				src="/twotterlogo.png"
				width={50}
				height={50}
				alt='Logo'
			/>
			<p className='font-bold text-2xl'>Create an account</p>
			<button className='text-l font-bold bg-blue-500 hover:bg-blue-400 px-24 py-2 rounded-4xl'><Link href="/register">Create account</Link></button>

			<div className='flex flex-col gap-2 items-center justify-center mt-6'>
				<p className='font-bold text-l'> Already have an account? </p>
				<button className='bg-white text-blue-400 px-24 py-2 rounded-4xl hover:bg-gray-100 font-bold'><Link href="/login">Sign in</Link></button>
			</div>
		</div>
	);
}
