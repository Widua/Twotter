import { User } from "../types/authTypes"
import { SignupFormSchema, SignupState } from "../definitions/signupDefinitions";

let mockUserStore: Array<User> = Array.of({ username: "TestUser", password: "test123", email: "testuser@testing.com" })

export async function signup(signUpData: { username: string, password: string, retypedPassword: string, email: string, birthDate: Date }, state: SignupState) {
	const validatedFields = SignupFormSchema.safeParse(
		{
			username: signUpData.username,
			email: signUpData.email,
			password: signUpData.password,
			birthDate: signUpData.birthDate
		}
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	if (signUpData.password !== signUpData.retypedPassword) {
		return {
			errors: [{ message: "Passwords should match!" }]
		}
	}

	mockUserStore.push({ username: validatedFields.data.username, password: validatedFields.data.password, email: validatedFields.data.email })

	/*
	 * TODO: There will be connection to database, etc. for now the Frontend is only a skeleton.
	 */

}

export async function login(loginData: { username: string, password: string }) {

}
