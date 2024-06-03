"use client";

import React, { useEffect, useState } from "react";
import styles from "./Categories.module.scss";
import { Title } from "@/shared";
import Image from "next/image";
import { Categories } from "@/types";
import { shortenTitle } from "@/utils";

interface Props {
	title: string;
	description: string;
	categories: Categories[];
}

const Categories = ({ title, description, categories }: Props) => {
	return (
		<section className={styles.section}>
			<Title title={title} description={description} className={styles.title} />
			<div className={styles.row}>
				{categories.map((category: any, index: number) => (
					<Box props={category} key={index} />
				))}
			</div>
		</section>
	);
};

export default Categories;

const Box = ({ props }: any) => {
	const [titleLength, setTitleLength] = useState<number>(20);
	useEffect(() => {
		if (window.innerWidth < 650) {
			setTitleLength(15);
		} else {
			setTitleLength(20);
		}
	}, []);
	return (
		<div className={styles.box}>
			<div className={styles.image}>
				<Image src={props.image} fill alt={props.title} sizes="100vw" />
			</div>
			<div className={styles.small_title}>
				<h3>{shortenTitle(props.title, titleLength)}</h3>
			</div>
		</div>
	);
};
