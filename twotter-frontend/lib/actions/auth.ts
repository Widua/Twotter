import { SignupFormSchema, SignupState } from "../definitions/signupDefinitions";

export async function signup(signUpData: { username: string, password: string }, state: SignupState) {

	const validatedFields = SignupFormSchema.safeParse(
		{
			username: signUpData.username,
			password: signUpData.password,
		}
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

}
