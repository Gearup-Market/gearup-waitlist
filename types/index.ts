export interface Benefit {
	icon: string;
	subTitle: string;
	title: string;
	description: string;
	image?: string;
	backgroundColor: string;
	lineColor: string;
}

export interface Categories {
	title: string;
	image: string;
}

export interface Works {
	title: string;
	image: string;
	description: string;
	list: { title: string; description: string }[];
}
