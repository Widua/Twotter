'use client'
import Image from "next/image";
import image from '@/public/tux.png'
import { useState } from "react";

export default function PagePostAdder({ userId, username }: { userId: number, username: string }) {
	const [postContent, setPostContent] = useState('')
	return (
		<div className="mt-6 flex flex-row w-full items-center h-32 justify-center">
			<Image width={30} height={30} src={image} className="rounded-full mr-4" alt="fakeUserImg" />

			<div className="flex flex-col w-3/4">
				<div className="flex flex-row gap-2"><p className="w-full text-left">{username}</p></div>
				<div className="w-full h-full">
					<textarea onChange={(e) => setPostContent(e.target.value)} className="w-full h-20 max-h-32 border-2 border-solid border-gray-700 resize-none" />
				</div>
				<div className="w-full "><button className="float-end mr-4 text-black bg-white py-2 px-6 rounded-4xl"> Send </button></div>
			</div>
		</div>
	)
}
