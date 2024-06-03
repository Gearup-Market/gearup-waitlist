"use client";

import React from "react";
import styles from "./HowItWorks.module.scss";
import { Button, Title } from "@/shared";
import Image from "next/image";
import { Works } from "@/types";
import { scrollTo } from "@/utils";

interface Props {
	works: Works;
}

const HowItWorks = ({ works }: Props) => {
	return (
		<section className={styles.section}>
			<div className={styles.details}>
				<div className={styles.text}>
					<h6>How it works</h6>
				</div>
				<Title
					title={works.title}
					description={works.description}
					className={styles.title}
				/>
				<div className={styles.image}>
					<Image src={works.image} alt={works.title} fill sizes="100vw" />
				</div>
			</div>
			<div className={styles.card_container}>
				{works.list.map((work, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.card_button}>
							<p>{++index}</p>
						</div>
						<div className={styles.text}>
							<h3>{work.title}</h3>
							<p>{work.description}</p>
						</div>
					</div>
				))}
				<Button className={styles.button} onClick={() => scrollTo("waitlist")}>
					<p>Join waitlist</p>
					<div className={styles.arrow}>
						<Image src="/svgs/arrow.svg" alt="" fill sizes="100vw" />
					</div>
				</Button>
			</div>
		</section>
	);
};

export default HowItWorks;
