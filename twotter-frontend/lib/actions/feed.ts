import { randomUUID } from "crypto";
import { Post } from "../types/postTypes";

const mockedFeedStore: Array<Post> = Array.of({ postingUserId: 1, postId: '000001', content: "Helo", timeAdded: new Date() })

export function getFeed(): Array<Post> {
	return mockedFeedStore
}

export function addPost(postRequestBody: { postingUserId: number, content: string }) {
	const timeAdded = new Date();
	const postID = randomUUID()

	const finalPost: Post = { postingUserId: postRequestBody.postingUserId, content: postRequestBody.content, postId: postID, timeAdded: timeAdded }
	mockedFeedStore.push(finalPost)
}
