import Link from "next/link";
import Image from "next/image";

export async function Footer() {

	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				
				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">Copyright &copy;2024 Mindfire.</p>
					<p className="flex gap-1 text-sm text-neutral-500">
						Site by{" "}
						<Link target={"_blank"} href={"https://www.mindfiresolutions.com/"}>
							Mindfire
						</Link>{" "}
						<Link href={"https://github.com/deepakyadav-01/demo-client"} target={"_blank"} className={"opacity-30"}>
							<Image alt="Mindfire github repository" height={20} width={20} src={"/github-mark.svg"} />
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
