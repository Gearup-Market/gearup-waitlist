import React from "react";
import styles from "./WaitList.module.scss";
import InputField from "@/shared/inputField/InputField";
import { Button } from "@/shared";
import Image from "next/image";
import WaitlistForm from "../waitlistForm/WaitlistForm";

const WaitList = () => {
	return (
		<section className={styles.section} id="waitlist">
			<div className={styles.center}>
				<div className={styles.text}>
					<h1>Join the Excitement</h1>
				</div>
				<div className={styles.description}>
					<p>Sign up for early access</p>
				</div>
				<div className={styles.sub}>
					<WaitlistForm />
				</div>
			</div>
		</section>
	);
};

export default WaitList;
