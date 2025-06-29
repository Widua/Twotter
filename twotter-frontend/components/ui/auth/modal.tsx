import Image from 'next/image'
import Link from 'next/link'

export default function Modal({ children, }: {
	children: React.ReactNode
}) {
	return (
		<div className='fixed w-screen h-screen bg-gray-900 '>
			<div className="relative overflow-y-scroll w-1/4 rounded-2xl top-40 h-3/4 mx-auto bg-black pb-5 px-4 ">
				<div className='sticky z-100 p-2 top-0 bg-black w-full'>
					<div className='flex flex-row items-center justify-center mb-4'>
						<Link href="/" className='w-full text-2xl'><div>x</div></Link>
						<div className='w-full flex justify-center'>
							<Image
								src="/twotterlogo.png"
								width={30}
								height={30}
								alt='logo'
							/>
						</div>
						<div className='w-full' />
					</div>
				</div>
				<div className='flex flex-col items-center justify-center '>
					{children}
				</div>
			</div>
		</div>
	)
}
