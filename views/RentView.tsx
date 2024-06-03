import {
	Hero,
	Benefits,
	Categories,
	Gears,
	Faq,
	HowItWorks,
	WaitList,
	Socials,
} from "@/components";
import { categories, rentBenefits, rentFaq, rentWorks } from "@/mock";
import React from "react";

const RentView = () => {
	return (
		<>
			<Hero
				title="The Marketplace For African Creators to Rent"
				cta="Gears"
				description="Rent gears with ease within your country. Our secure escrow system ensures worry-free transactions"
			/>
			<Benefits
				title="What benefits do renters get?"
				description="We make it super easy for you to rent gears with confidence"
				cards={rentBenefits}
			/>
			<Categories
				title="Lender can list gears & Manage  rentals"
				description="List gears of any category and manage your rentals"
				categories={categories}
			/>
			<Gears description="Rent film gears that fit your purpose" />
			<HowItWorks works={rentWorks} />
			<WaitList />
			<Socials />
			<Faq faq={rentFaq} />
		</>
	);
};

export default RentView;
