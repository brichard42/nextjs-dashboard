import "@/app/ui/global.css";
import { circe } from "@/app/ui/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${circe.className}`}>{children}</body>
		</html>
	);
}
