import { Post } from "../types/postTypes";
import { v4 as uuidv4 } from 'uuid'
import { ContentSchema, ContentState } from '@/lib/definitions/newPostDefinitions'
const mockedFeedStore: Array<Post> = Array.of({ postingUserId: 1, postId: '000001', content: "Helo", timeAdded: new Date(2025, 3, 12, 12, 12) }, { postingUserId: 1, postId: '000002', content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary", timeAdded: new Date(2025, 3, 12, 12, 12) })

export function getFeed(): Array<Post> {
	return mockedFeedStore
}

export async function addPost(state: ContentState, postRequestBody: { postingUserId: number, content: string }) {

	const validatedContent = ContentSchema.safeParse({
		content: postRequestBody.content
	}
	)


	if (!validatedContent.success) {
		return {
			errors: validatedContent.error.flatten().fieldErrors,
		}
	}

	const timeAdded = new Date();
	const postID = uuidv4()

	const finalPost: Post = { postingUserId: postRequestBody.postingUserId, content: postRequestBody.content, postId: postID, timeAdded: timeAdded }
	mockedFeedStore.push(finalPost)
}
