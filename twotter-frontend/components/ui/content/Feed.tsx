import { getFeed } from "@/lib/actions/feed"
import PostPage from '@/components/ui/content/Post'
export default async function Feed() {

	const feedArr = await getFeed();

	return (
		<div className="w-full ">
			{
				feedArr.map(
					(post, i) => (
						<PostPage key={i} postData={post} />
					)
				)
			}
		</div>
	)
}
