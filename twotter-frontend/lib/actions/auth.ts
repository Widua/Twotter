import { User } from "../types/authTypes"
import { SignupFormSchema, SignupState } from "../definitions/signupDefinitions";

let mockUserStore: Array<User> = Array.of({ username: "TestUser", password: "test123", email: "testuser@testing.com" })

export async function signup(state: SignupState, signUpData: FormData) {
	const validatedFields = SignupFormSchema.safeParse(
		{
			username: signUpData.get('username'),
			email: signUpData.get('email'),
			password: signUpData.get('password'),
			birthDate: signUpData.get('birthDate'),
		}
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	if (signUpData.get('password') !== signUpData.get('retypedPassword')) {
		return {
			errors: {
				password: ["Paswords should match"]
			}
		}
	}

	mockUserStore.push({ username: validatedFields.data.username, password: validatedFields.data.password, email: validatedFields.data.email })

	/*
	 * TODO: There will be connection to database, etc. for now the Frontend is only a skeleton.
	 */

}

export async function login(loginData: { username: string, password: string }) {

}
