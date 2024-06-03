import { Logo } from "@/shared";
import { scrollTo } from "@/utils";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

const socialMediaLinks = [
	{
		label: "twitter",
		href: "https://twitter.com/Gearupmarket",
		icon: "/svgs/icon-twitter.svg",
	},
	{
		title: "instagram",
		icon: "/svgs/icon-instagram.svg",
		href: "https://www.instagram.com/gearup.market?igsh=MTEyM25temV0ajAxZA%3D%3D&utm_source=qr",
	},
	// {
	// 	label: "linkedIn",
	// 	href: "#",
	// 	icon: "/svgs/icon-linkedin.svg",
	// },
	// {
	// 	label: "facebook",
	// 	href: "#",
	// 	icon: "/svgs/icon-facebook.svg",
	// },
	// {
	// 	label: "github",
	// 	href: "#",
	// 	icon: "/svgs/icon-github.svg",
	// },
];

const Footer = () => {
	// const handleNavClick = (id: string) => {
	// 	scrollTo({ id });
	// };
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_body}>
				<Logo />
				<div className={styles.text}>
					<p>
						Rent, buy and sell gears and studio spaces with ease within your
						country
					</p>
				</div>
				<div className={styles.socials}>
					{socialMediaLinks.map((social: any, index: number) => (
						<a
							href={social.href}
							target="_blank"
							rel="noreferrer"
							className={styles.social}
							key={index}
						>
							<Image
								src={social.icon}
								alt={social.label}
								fill
								sizes="100vw"
							/>
						</a>
					))}
				</div>
			</div>
			<div className={styles.footer_footer}>
				<div className={styles.text}>
					<h6>&copy; 2024 Gearup. All rights reserved</h6>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
