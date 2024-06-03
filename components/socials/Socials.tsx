import React from "react";
import styles from "./Socials.module.scss";
import { Title } from "@/shared";
import Link from "next/link";
import Image from "next/image";

const socials = [
	{
		title: "twitter",
		icon: "/svgs/twitter.svg",
		href: "https://twitter.com/Gearupmarket",
	},
	{
		title: "instagram",
		icon: "/svgs/instagram.svg",
		href: "https://www.instagram.com/gearup.market?igsh=MTEyM25temV0ajAxZA%3D%3D&utm_source=qr",
	},
	// {
	// 	title: "linkedin",
	// 	icon: "/svgs/linkedin.svg",
	// 	href: "#",
	// },
	// {
	// 	title: "facebook",
	// 	icon: "/svgs/facebook.svg",
	// 	href: "#",
	// },
	// {
	// 	title: "tiktok",
	// 	icon: "/svgs/tiktok.svg",
	// 	href: "#",
	// },
];

const Socials = () => {
	return (
		<section className={styles.section}>
			<Title
				title="Join our community"
				description="Join the hype on our communities, share with friends and family"
				className={styles.title}
			/>
			<div className={styles.row}>
				{socials.map((category: any, index: number) => (
					<Card props={category} key={index} />
				))}
			</div>
		</section>
	);
};

export default Socials;

const Card = ({ props }: any) => {
	return (
		<div className={styles.card}>
			<a href={props.href} target="_blank" className={styles.icon}>
				<Image src={props.icon} fill alt={props.title} sizes="100vw" />
			</a>
			<div className={styles.small_title}>
				<h3>{props.title}</h3>
				<p>Follow us for latest news and updates</p>
			</div>
			<a href={props.href} target="_blank" className={styles.link}>
				Visit now
			</a>
		</div>
	);
};
