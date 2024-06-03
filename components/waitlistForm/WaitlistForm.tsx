"use client";

import { Button } from "@/shared";
import InputField from "@/shared/inputField/InputField";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./WaitlistForm.module.scss";
import toast from "react-hot-toast";
import { PageLoader } from "@/shared/loaders";
import Modal from "@/shared/modal/Modal";

const WaitlistForm = () => {
	const [email, setEmail] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleFormSubmit = async (event: any) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			const res = await fetch("/api", {
				method: "POST",
				body: JSON.stringify({ email }),
				headers: {
					"content-type": "application/json",
				},
			});
			const data = await res.json();
			setIsLoading(false);
			if (res.ok) {
				toast.success(`Thank you for subscribing, ${email}`);
				setShowModal(true);
			} else if (data.error.title === "Invalid Resource") {
				toast.error("Don't tell us you want to try a fake email address 😏");
			} else {
				toast.error(`${data.error.title}`);
			}
		} catch (error) {
			console.log(error, "this");
		}
		setEmail("");
	};
	return (
		<form onSubmit={handleFormSubmit} className={styles.container}>
			{isLoading && <PageLoader />}
			<InputField
				placeholder="Enter email address"
				className={styles.input}
				name="email"
				value={email}
				onChange={(e: any) => setEmail(e.target.value)}
				type="email"
			/>
			<Button className={styles.button} type="submit">
				<p>Join waitlist</p>
				<div className={styles.arrow}>
					<Image src="/svgs/arrow.svg" alt="" fill sizes="100vw" />
				</div>
			</Button>
			{showModal && <Modal openModal={showModal} setOpenModal={setShowModal} />}
		</form>
	);
};

export default WaitlistForm;
