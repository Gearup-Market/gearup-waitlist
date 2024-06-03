"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { Button } from "@/shared";
import { useGlobalContext } from "@/contexts/AppContext";
import InputField from "@/shared/inputField/InputField";
import TextTransition, { presets } from "react-text-transition";
import WaitlistForm from "../waitlistForm/WaitlistForm";

interface Props {
	title: string;
	cta: string;
	description: string;
}
const TEXTS = ["Gears", "Studio Spaces"];

const Hero = ({ title, cta, description }: Props) => {
	const { setHeroHeight }: any = useGlobalContext();
	const heroRef: any = useRef(null);
	useEffect(() => {
		const heroHeight = heroRef.current?.offsetHeight;
		setHeroHeight(heroHeight);
	}, []);
	const [index, setIndex] = useState<number>(0);

	React.useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(index => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);
	return (
		<div className={styles.hero} ref={heroRef}>
			<div className={styles.center}>
				<div className={styles.alert}>
					<div className={styles.alert_cta}>
						<p>Gearup</p>
					</div>
					<div className={styles.text}>
						<h6>soon to launch!!</h6>
					</div>
					<div className={styles.rocket}>
						<Image src="/svgs/rocket.svg" alt="" fill sizes="100vw" />
					</div>
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
					<span>
						{cta === "experts" ? (
							cta
						) : (
							<TextTransition
								springConfig={presets.wobbly}
								className={styles.cta_text}
							>
								{TEXTS[index % TEXTS.length]}
							</TextTransition>
						)}
					</span>
				</div>
				<div className={styles.description}>
					<p>{description}</p>
				</div>
				<div className={styles.sub}>
					<WaitlistForm />
				</div>
			</div>
		</div>
	);
};

export default Hero;
