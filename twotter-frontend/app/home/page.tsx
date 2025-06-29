import Additionals from "@/components/ui/content/Additionals"
import Feed from "@/components/ui/content/Feed"
import Menu from "@/components/ui/content/Menu"

export default function Home() {
	return (
		<div className="w-screen h-screen text-center flex flex-row">
			<Menu />
			<Feed />
			<Additionals />
		</div>
	)
}
