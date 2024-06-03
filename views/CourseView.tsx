import {
	Benefits,
	Categories,
	Faq,
	Hero,
	HowItWorks,
	Socials,
	WaitList,
} from "@/components";
import { courseBenefits, courseCategories, courseFaq, courseWorks } from "@/mock";
import React from "react";

const CourseView = () => {
	return (
		<>
			<Hero
				title="Become a better creator by learning from industry"
				cta="experts"
				description="Elevate your craft by learning from industry experts"
			/>
			<Benefits
				title="What benefits do Learner’s get?"
				description=" Explore a Wide Range of Courses From industry experts"
				cards={courseBenefits}
			/>
			<Categories
				title="You Can Reach New Audiences by monetizing Your Expertise"
				description="List course of any category and manage your sales"
				categories={courseCategories}
			/>
			<HowItWorks works={courseWorks} />
			<WaitList />
			<Socials />
			<Faq faq={courseFaq} />
		</>
	);
};

export default CourseView;
