import { getFeed } from "@/lib/actions/feed"

export default function Feed() {

	const feedArr = getFeed();

	return (
		<div className="w-full">
			{
				feedArr.map(
					(post) => (
						<p>{post.postingUserId}</p>
					)
				)
			}
		</div>
	)
}
