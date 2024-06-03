import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './BreadCrumb.module.scss';

const BreadCrumb = () => {
	const router = useRouter();
	const path = router.asPath.split('/');
	const path2 = router.asPath.split('/');
	path2.pop();
	path2.shift();

	return (
		<div className={styles.breadcrumb}>
			{path2.map((item, index) => {
				return (
					<Link href={`/${item}`} key={index}>
						<a className={styles.text}>
							<span>{item} / </span>
						</a>
					</Link>
				);
			})}
			<div className={styles.text}>
				<h6> {path.slice(-1)} </h6>
			</div>
		</div>
	);
};

export default BreadCrumb;
