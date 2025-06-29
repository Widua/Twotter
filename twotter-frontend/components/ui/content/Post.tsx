import { Post } from "@/lib/types/postTypes";
import { findUser } from "@/lib/actions/user";


export default function PagePost({
	postData
}: { postData: Post }) {
	const userName: string = findUser(postData.postingUserId).username
	return (
		<div className="w-full">

		</div>
	)
}
