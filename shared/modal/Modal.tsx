"use client";

import React, { useCallback, useEffect } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import Link from "next/link";

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

interface Props {
	setOpenModal: (e?: any) => void;
	openModal: boolean;
	className?: string;
}

const Modal = ({ openModal, setOpenModal, className }: Props) => {
	const close = useCallback(() => {
		setOpenModal(false);
	}, [setOpenModal]);
	useEffect(() => {
		const handleClickOutside = () => {
			close();
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [close]);
	useEffect(() => {
		document.body.style.overflow = openModal ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [openModal]);
	return (
		<div className={styles.modal_container}>
			<div
				className={`${styles.modal} ${className}`}
				onClick={(e: React.MouseEvent<HTMLDivElement>) =>
					e.nativeEvent.stopImmediatePropagation()
				}
			>
				<div className={styles.header}>
					<div className={styles.closeModal_container} onClick={close}>
						<div className={styles.closeModal}>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.image}>
						<Image src="/svgs/success.svg" alt="" fill sizes="100vw" />
					</div>
					<div className={styles.text}>
						<h3>🎉Welcome to the family!</h3>
						<p>
							Thanks for signing up for the Gearup waitlist. 🚀 You&apos;re
							now part of an exclusive community of gear enthusiasts eager
							to experience the future of renting, buying, and selling gear.
						</p>
					</div>
					<div className={styles.row}>
						{socials.map((category: any, index: number) => (
							<a
								href={category.href}
								className={styles.icon}
								key={index}
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={category.icon}
									alt={category.title}
									fill
									sizes="100vw"
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
