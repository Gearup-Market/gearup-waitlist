import {
	Benefits,
	Categories,
	Faq,
	Gears,
	Hero,
	HowItWorks,
	Socials,
	WaitList,
} from "@/components";
import { buyBenefits, buyFaq, buyWorks, categories } from "@/mock";
import React from "react";

const BuyView = () => {
	return (
		<>
			<Hero
				title="The Marketplace For African Creators to Buy"
				cta="Gears"
				description="Buy or sell gears with ease within your country. Our secure escrow system ensures worry-free transactions"
			/>
			<Benefits
				title="What benefits do Buyer’s get?"
				description="We make it super easy for you to buy gears with confidence"
				cards={buyBenefits}
			/>
			<Categories
				title="Seller’s can list gears & Manage  Sales"
				description="List gears of any category and manage your sales"
				categories={categories}
			/>
			<Gears description="Buy film gears that fit your purpose" />
			<HowItWorks works={buyWorks} />
			<WaitList />
			<Socials />
			<Faq faq={buyFaq} />
		</>
	);
};

export default BuyView;
