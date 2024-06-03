"use client";
import React, { useCallback, useState } from "react";
import InputField from "../inputField/InputField";
import styles from "./SearchBox.module.scss";
import { Button } from "..";

interface Props {
	className?: string;
	options?: any;
	onClick?: (e?: any) => void;
}

enum ActiveButton {
	RENT = "rent",
	BUY = "buy",
}

const SearchBox = ({ className, onClick }: Props) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [activeButton, setActiveButton] = useState<ActiveButton>(ActiveButton.RENT);

	return (
		<div className={`${styles.searchBox} ${className}`} onClick={onClick}>
			<div className={styles.small_button_container}>
				<Button
					buttonType="transparent"
					className={styles.small_button}
					onClick={() => setActiveButton(ActiveButton.RENT)}
					data-active={activeButton === ActiveButton.RENT}
				>
					Rent
				</Button>
				<Button
					buttonType="transparent"
					className={styles.small_button}
					onClick={() => setActiveButton(ActiveButton.BUY)}
					data-active={activeButton === ActiveButton.BUY}
				>
					Buy
				</Button>
			</div>
			<div className={styles.row}>
				<div className={styles.small_row}>
					<InputField
						icon="/svgs/icon-search-normal.svg"
						// onChange={e => onOptionChange!(e.target.value)}
						placeholder="Try e.g Nikon SR ..."
						className={styles.input}
					/>
					<InputField
						icon="/svgs/icon-location.svg"
						// onChange={e => onOptionChange!(e.target.value)}
						placeholder="Choose a city"
						className={styles.input}
					/>
				</div>
				<Button className={styles.button}>Search</Button>
			</div>
		</div>
	);
};

export default SearchBox;
