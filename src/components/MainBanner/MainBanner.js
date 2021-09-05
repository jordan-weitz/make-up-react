import React from "react";

import ButtonLink from "../ButtonLink/ButtonLink";

function MainBanner() {
	return (
		<div className="container mx-auto flex items-center mt-20 mb-10">
			<div className="p-4">
				<h1 className="font-krona text-3xl mb-4">
					A React.js project utilizing an API (w/ Axios), Tailwind CSS and React
					Router
				</h1>
				<p className="text-sm mb-6">
					360 degree content marketing pool we have to leverage up the messaging
					nor a set of certitudes based on deductions founded on false premise
					and business impact. Golden goose meeting assassin.
				</p>
				<ButtonLink path="/about" text="see more" isMain />
			</div>
			<div className="ml-4">
				<img
					src="https://images.pexels.com/photos/4465814/pexels-photo-4465814.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4465814.jpg&fm=jpg"
					alt="Tooth brush and a paste on top of a green leaf"
					className="rounded-full max-w-screen-md rounded-r-none"
				/>
			</div>
		</div>
	);
}

export default MainBanner;
