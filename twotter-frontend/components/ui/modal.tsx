import Image from 'next/image'

export default function Modal({ children, }: {
	children: React.ReactNode
}) {
	return (
		<div className='fixed w-screen h-screen bg-gray-900 '>
			<div className="relative w-1/3 rounded-2xl top-50 h-2/3 mx-auto bg-black p-5">
				<div className='flex flex-row items-center justify-center mb-4'>
					<div className="text-2xl w-full">x</div>
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
				<div className='flex flex-col items-center justify-center '>
					{children}
				</div>
			</div>
		</div>
	)
}
