"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Logo, Button } from "@/shared";
import styles from "./Header.module.scss";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/AppContext";
import { scrollTo } from "@/utils";

enum Scroll {
	Idle = "idle",
	InitialScroll = "initial",
	FinalScroll = "final",
}

const Header = () => {
	const { heroHeight }: any = useGlobalContext();
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [scroll, setScroll] = useState<Scroll>(Scroll.Idle);
	const headerRef: any = useRef(null);
	const pathName = usePathname();
	const handleActive = (url: string) => {
		const active = url === pathName;
		return active;
	};
	const handleWaitListScroll = () => {
		scrollTo("waitlist");
		setCollapsed(true);
	};
	useEffect(() => {
		const headerHeight: any = headerRef.current?.offsetHeight;
		const scrollCheck = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > headerHeight) {
				setScroll(Scroll.InitialScroll);
			}
			if (currentScrollY <= headerHeight) setScroll(Scroll.Idle);
			if (currentScrollY >= heroHeight) setScroll(Scroll.FinalScroll);
		};
		// if (!homePath) {
		// 	setScroll(Scroll.FinalScroll);
		// } else {
		// 	setScroll(Scroll.Idle);
		// }
		window.addEventListener("scroll", scrollCheck, { passive: true });

		return () => window.removeEventListener("scroll", scrollCheck);
	}, [heroHeight]);

	const handleLogoShown = () =>
		!collapsed || scroll === Scroll.FinalScroll ? "dark" : "light";

	return (
		<header
			className={styles.header}
			data-collapsed={!collapsed || scroll === Scroll.FinalScroll}
			ref={headerRef}
			data-scroll={scroll}
		>
			<Link href="/">
				<div className={styles.header_logoContainer}>
					<Logo type={handleLogoShown()} />
				</div>
			</Link>
			<div
				className={
					styles[!collapsed ? "header_wrapper" : "header_wrapper__collapsed"]
				}
			>
				<nav className={styles.header_nav}>
					<ul className={styles.header_navList}>
						<div
							className={styles.header_navLink}
							data-active={handleActive("/")}
							onClick={() => setCollapsed(true)}
						>
							<Link href="/">Renting gear</Link>
						</div>
						<div
							className={styles.header_navLink}
							data-active={handleActive("/buy")}
							onClick={() => setCollapsed(true)}
						>
							<Link href="/buy">Buying gear</Link>
						</div>
						<div
							className={styles.header_navLink}
							data-active={handleActive("/course")}
							onClick={() => setCollapsed(true)}
						>
							<Link href="/course">Selling courses</Link>
						</div>
					</ul>
				</nav>
				<div className={styles.button_container_mob}>
					<Button onClick={handleWaitListScroll} className={styles.button}>
						Join waitlist
					</Button>
				</div>
			</div>
			<div className={styles.button_container}>
				<Button onClick={handleWaitListScroll}>Join waitlist</Button>
			</div>
			<div
				onClick={() => setCollapsed(!collapsed)}
				className={
					styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
				}
			>
				<span className={styles.header_hamburgerBar}></span>
				<span className={styles.header_hamburgerBar}></span>
			</div>
		</header>
	);
};

export default Header;
