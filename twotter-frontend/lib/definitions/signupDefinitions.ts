import { z } from 'zod'


function sixteenYearsOldConstrain(): Date {
	var date = new Date();
	date.setFullYear(date.getFullYear() - 16)
	return date;
}

export const SignupFormSchema = z.object({
	username: z
		.string()
		.min(6, { message: "Username must be at least 2 characters long." })
		.trim(),
	email: z
		.string()
		.email({ message: "Provide valid email." })
		.trim(),
	password: z
		.string()
		.min(8, { message: "Be at least 8 characters long" })
		.regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
		.regex(/[0-9]/, { message: "Contain at least one number." })
		.trim(),
	date: z
		.date()
		.max(sixteenYearsOldConstrain(), { message: "You must have at least 16 years" })
})

export type SignupState = |
{
	errors?: {
		username?: string[]
		password?: string[]
		email?: string[]
		date?: string[]
	}
	message?: string
}
	| undefined
