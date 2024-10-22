import { type ReactNode } from "react";
import { Header } from "@/ui/components/Header";
import { Footer } from "@/ui/components/Footer";

export const metadata = {
	title: "Mindfire Ecom",
	description: "Mindfire Ecom",
};

export default function RootLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			<Header channel={props.params.channel} />
			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">{props.children}</main>
				<Footer />
			</div>
		</>
	);
}
