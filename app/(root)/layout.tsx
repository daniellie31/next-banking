export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			{/* sidebar */}
			sidebar
			{children}
		</main>
	);
}
