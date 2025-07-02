import { z } from 'zod'

export const ContentSchema = z.object(
	{
		content: z
			.string()
			.max(360, "Maximum length of message is 360 characters")
			.trim(),
	}
)

export type ContentState = |
{
	errors?: {
		content?: string[]
	}
	message?: string
}
	| undefined

