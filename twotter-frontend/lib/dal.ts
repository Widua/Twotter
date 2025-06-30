import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { findUser } from './actions/user'

export const verifySession = cache(async () => {
	const cookie = (await cookies()).get('session')?.value
	const session = await decrypt(cookie)

	if (!session?.userId) {
		redirect('/login')
	}

	return { isAuth: true, userId: session.userId }
})

export const getUser = cache(async () => {
	const session = await verifySession()
	if (!session) return null;

	try {
		const data = findUser(Number(session.userId));
		return data;
	} catch (error) {
		console.log("Failed to get user");
		return null;
	}
})
