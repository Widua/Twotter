import { z } from 'zod'

export const LoginFormSchema = z.object(
	{
		username: z
			.string()
			.trim(),
		password: z
			.string()
			.trim()
	}
)

export type LoginState = |
{
	errors?: {
		username?: string[]
		password?: string[]
	}
	message?: string
}
	| undefined

