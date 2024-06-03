import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressProps {
	height?: number;
	radius?: number;
	percent: number;
	className?: string;
}

const ProgressBar = ({ height = 20, radius = 24, percent, className }: ProgressProps) => {
	return (
		<div className={styles.progress}>
			<div
				className={`${styles.progress_inner} ${className}`}
				style={{ height: `${height / 10}rem`, borderRadius: `${radius / 10}rem` }}
			>
				<div
					className={styles.progress_bar}
					style={{
						width: `${percent}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
