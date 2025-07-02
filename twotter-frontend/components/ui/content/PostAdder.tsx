'use client'
import Image from "next/image";
import image from '@/public/tux.png'
import { useActionState, useState } from "react";
import { addPost } from "@/lib/actions/feed"
import ErrorMessage from "../auth/errorMessage";

export default function PagePostAdder({ userId, username }: { userId: number, username: string }) {
	const [postContent, setPostContent] = useState('')
	const [state, action, pending] = useActionState(addPost, undefined)
	const processFormData = () => {
		action({ postingUserId: userId, content: postContent })
	}
	return (
		<div className="mt-6 flex flex-row w-full items-center h-32 justify-center">
			<Image width={30} height={30} src={image} className="rounded-full mr-4" alt="fakeUserImg" />
			<div className="flex flex-col w-3/4">
				<form action={processFormData}>
					<div className="flex flex-row gap-2"><p className="w-full text-left">{username}</p></div>
					<div className="w-full h-full">
						<textarea onChange={(e) => setPostContent(e.target.value)} className="w-full h-20 max-h-32 border-2 border-solid border-gray-700 resize-none" />
						<ErrorMessage errors={state?.errors.content} />
					</div>
					<div className="w-full"><button disabled={pending} className="float-end mr-2 text-black bg-white py-2 px-6 rounded-4xl"> Send </button></div>
				</form>
			</div>
		</div>
	)
}
