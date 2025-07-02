import { Post } from "@/lib/types/postTypes";
import { findUser } from "@/lib/actions/user";
import Image from "next/image";
import image from '@/public/tux.png'


function parseTime(date: Date) {
	const secDiff = (new Date().getTime() - date.getTime()) / 1000;
	if (secDiff < 60) {
		return Math.floor(secDiff) + " sec"
	}
	const minDiff = secDiff / 60;
	if (minDiff < 60) {
		return Math.floor(minDiff) + " min"
	}
	const hoursDiff = minDiff / 60;
	if (hoursDiff < 24) {
		return Math.floor(hoursDiff) + " hrs"
	}
	const dayDiff = hoursDiff / 24;
	if (dayDiff < 365) {
		return Math.floor(dayDiff) + " days"
	}
	return Math.floor((dayDiff / 365)) + " yrs";
}

export default function PagePost({
	postData
}: { postData: Post }) {
	const userName: string = findUser(postData.postingUserId).username
	return (
		<div className="flex mt-4 flex-row w-full items-center h-32 justify-center">
			<Image width={30} height={30} src={image} className="rounded-full mr-4" alt="fakeUserImg" />

			<div className="flex flex-col w-3/4">
				<div className="flex flex-row gap-2"><p className="w-full text-left">{userName}</p><p className="w-3/4">{parseTime(postData.timeAdded)}</p></div>
				<div className="text-left">{postData.content}</div>

			</div>
		</div>
	)
}
