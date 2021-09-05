import React from "react";
import BenefitsItem from "../BenefitsItem/BenefitsItem";

function Benefits() {
	const benefits = [
		{
			title: "Delivery",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quam dolorem quos quisquam. Quisquam?",
		},
		{
			title: "Products",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quam dolorem quos quisquam. Quisquam?",
		},
		{
			title: "Payments",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quam dolorem quos quisquam. Quisquam?",
		},
	];

	return (
		<div className="flex justify-evenly mx-auto container mb-20">
			{benefits.map((item) => (
				<BenefitsItem key={item.title} item={item} />
			))}
		</div>
	);
}

export default Benefits;
