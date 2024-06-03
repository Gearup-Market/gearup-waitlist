"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PreLoader.module.scss";
import { flattenObj } from "@/utils";
import { media } from "@/mock";
import { each } from "lodash";
import gsap from "gsap";

const lense = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const camera = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.75998 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99C21.89 7.83 20.17 6 18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.82998 2 8.62998 2.75 8.16998 3.66L7.44998 5.11C7.16998 5.65 6.60998 6 5.99998 6C3.82998 6 2.10998 7.83 2.24998 9.99L2.76998 18.25C2.88998 20.31 3.99998 22 6.75998 22Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10.5 8H13.5"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const audio = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.03 10.77L20.69 6.97998C21.26 6.59998 21.41 5.81998 21.03 5.25998L19.21 2.54996C18.83 1.97996 18.05 1.82996 17.49 2.20996L11.83 5.99997L15.03 10.77Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12.1738 6.47932L7.39612 9.6792L9.95602 13.5013L14.7337 10.3015L12.1738 6.47932Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M5.82998 15.8999L9.77998 13.2599L7.53998 9.91992L3.58998 12.5599C3.12998 12.8699 3.00998 13.4899 3.31998 13.9499L4.44998 15.6299C4.74998 16.0799 5.36998 16.1999 5.82998 15.8999Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12.05 12.2L7.56 21.9999"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12 12.2L16.44 21.9999"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const drone = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.09998 9.8V6.4L12 2L20.9 6.4V9.8"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3.09998 14.2V17.6L12 22L20.9 17.6V14.2"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12 22V16.4"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12 16.4C14.43 16.4 16.4 14.43 16.4 12C16.4 9.56992 14.43 7.59998 12 7.59998C9.56992 7.59998 7.59998 9.56992 7.59998 12C7.59998 14.43 9.56992 16.4 12 16.4Z"
			stroke="#4B525A"
			strokeWidth="1.5"
			strokeMiterlimit="10"
		/>
	</svg>
);

const icons = [lense, camera, audio, drone];

const PreLoader = () => {
	const [imagesLoaded, setImagesLoaded] = useState(false);
	const iconRef = useRef(null);
	let progress = 0;
	let percentage = 0;
	// get all media items
	const allmedia = flattenObj(media);
	const allMedia = flattenObj(allmedia);
	useEffect(() => {
		document.body.scrollTop = 0;
		document.body.style.overflow = "hidden";
		function startLoad(): void {
			if (imagesLoaded) return;
			each(allMedia, (url: any, index: number) => {
				setTimeout(() => {
					const fakeImage: HTMLImageElement = document.createElement("img");

					fakeImage.src = url;

					fakeImage.onload = () => {
						onAssetLoaded();
					};
				}, index * ((25 * 100) / allMedia.length));
			});
		}

		function onAssetLoaded(): void {
			// update progress & percentage
			progress++;
			percentage = Math.round((progress / allMedia.length) * 100);

			if (percentage === 100) {
				// set loading to completed so animations can start
				setImagesLoaded(true);
			}
		}
		function kill(): void {
			document.body.style.overflowY = "auto";
			const element = document.getElementById("element");
			gsap.to(element, {
				// autoAlpha: 0,
				y: "-100vh",
				ease: "expo.inOut",
				duration: 2,
				delay: 2,
			});
		}

		function revealIcons() {
			const tl: GSAPTimeline = gsap.timeline();
			const iconItems = document.getElementById("icons");
			each(iconItems?.childNodes, (letter: any) => {
				tl.fromTo(
					letter,
					{
						y: "100vh",
						autoAlpha: 0,
					},
					{
						autoAlpha: 1,
						y: 0,
						// ease: "expo.inOut",
						duration: 2.5,
						ease: "elastic.out(1, 0.5)",
						stagger: 0.5,
						delay: 0.1,
						// duration: 1.5,
					},
					"<"
				);
			});
		}
		function outro() {
			// create new timeline to animate both old line and new one
			const newtl: GSAPTimeline = gsap.timeline();

			// preloading is now complete, kill preloader
			// newtl.call(() => {
			// 	// kill this timeline
			// 	newtl.kill();

			// 	// kill preloader
			// });
			kill();
		}
		revealIcons();
		startLoad();
		if (imagesLoaded) {
			outro();
		}
	}, [imagesLoaded]);
	return (
		<div className={styles.preloader} data-active={imagesLoaded} id="element">
			<div className={styles.container} data-animation="icons" id="icons">
				{icons.map((icon: any, index: number) => (
					<div className={styles.icon} key={index}>
						{icon}
					</div>
				))}
			</div>
		</div>
	);
};

export default PreLoader;
