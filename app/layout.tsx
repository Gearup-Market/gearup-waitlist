import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/index.scss";
import styles from "./layout.module.scss";
import { Footer, Header } from "@/shared";
import { AppProvider } from "@/contexts/AppContext";
import { PreLoader } from "@/shared/loaders";
import { Toaster } from "react-hot-toast";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GearUp | The Marketplace for creators",
	description:
		"Gearup is a marketplace for Creators to rent, buy and sell gear and studio spaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<meta
				name="google-site-verification"
				content="Z9wM7qen8ZcGMvJLxRsK_PbpRFsla2POZgNiM_DBaWI"
			/>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://gearup.market/" />
			<meta property="og:title" content="Gearup | The Marketplace for Creators" />
			<meta
				property="og:description"
				content="Gearup is a marketplace for Creators to rent, buy and sell gear and studio spaces."
			/>
			<meta
				property="og:image"
				content="https://gearup.market/images/social-card.png"
			/>

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://gearup.market/" />
			<meta
				property="twitter:title"
				content="Gearup | The Marketplace for Creators"
			/>
			<meta
				property="twitter:description"
				content="Gearup is a marketplace for Creators to rent, buy and sell gear and studio spaces."
			/>
			<meta
				property="twitter:image"
				content="https://gearup.market/images/social-card.png"
			/>
			<body className={sourceSans.className}>
				<AppProvider>
					<PreLoader />
					<Toaster position="bottom-center" reverseOrder={false} />
					<Header />
					<main className={styles.main}>{children}</main>
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
