'use server'
import Additionals from "@/components/ui/content/Additionals"
import Feed from "@/components/ui/content/Feed"
import Menu from "@/components/ui/content/Menu"
import PagePostAdder from "@/components/ui/content/PostAdder"
import { verifySession, getUser } from "@/lib/dal"
export default async function Home() {
	const user = await getUser()
	return (
		<div className="w-screen h-screen text-center flex flex-row">
			<Menu />
			<div className="flex flex-col gap-4"> <PagePostAdder userId={Number(user?.userId)} username={String(user?.username)} />  <Feed /></div>
			<Additionals />
		</div>
	)
}
