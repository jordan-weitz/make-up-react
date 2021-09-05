import React from "react";

function BenefitsItem({ item }) {
	return (
		<div className="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-10 w-10 mr-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
			<div>
				<h5 className="font-krona text-sm">{item.title}</h5>
				<p className="text-xs">{item.text}</p>
			</div>
		</div>
	);
}

export default BenefitsItem;
