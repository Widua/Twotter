import { User } from "../types/authTypes"
import { SignupFormSchema, SignupState } from "../definitions/signupDefinitions";
import { LoginFormSchema, LoginState } from "../definitions/loginDefinitions";
import { redirect } from "next/navigation";
import { createSession } from "../session";
let mockUserStore: Array<User> = Array.of({ userId: 1, username: "TestUser", password: "test123", email: "testuser@testing.com" })

export async function signup(state: SignupState, signUpData: { username: string, password: string, retypedPassword: string, email: string, birthDate: Date }) {
	const validatedFields = SignupFormSchema.safeParse(
		{
			username: signUpData.username,
			email: signUpData.email,
			password: signUpData.password,
			birthDate: signUpData.birthDate,
		}
	)
	if (signUpData.password !== signUpData.retypedPassword) {
		return {
			errors: {
				password: ["Paswords should match"]
			}
		}
	}

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}


	mockUserStore.push({ userId: mockUserStore.length + 1, username: validatedFields.data.username, password: validatedFields.data.password, email: validatedFields.data.email })

	/*
	 * TODO: There will be connection to database, etc. for now the Frontend is only a skeleton.
	 */
	redirect('/login')
}

export async function login(state: LoginState, loginData: { username: string, password: string }) {
	const validatedFields = LoginFormSchema.safeParse(
		{
			username: loginData.username,
			password: loginData.password
		}
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	const found = mockUserStore.find((user) => user.username == validatedFields.data.username)
	if (!found) {
		return {
			errors: {
				username: ["User not found"]
			}
		}
	}
	if (found.password !== validatedFields.data.password) {
		return {
			errors: {
				password: ["Wrong password. Try again."]
			}
		}
	}
	// TODO: There will be implemented connection with database, userService. For now the frontend is only a skeleton.
	await createSession({ userId: found.userId, username: found.username, email: found.email })
	redirect('/')
}

export function findUser(userId: number): User {
	const found = mockUserStore.find((user) => user.userId == userId);
	if (!found) {
		throw new Error("User is not found")
	}
	return found
}
