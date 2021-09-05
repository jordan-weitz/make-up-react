import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import bannerimage from "./bannerimage.png";

function SecondaryBanner() {
	return (
		<div className="flex justify-between px-32 items-center mx-10 z-10 relative bg-pink h-80">
			<div className="">
				<h3 className="font-krona mb-4 text-2xl">
					Be natural,
					<br /> be smart, <br /> be you
				</h3>

				<ButtonLink path="/about" text="see more" />
			</div>
			<div className="ml-4">
				<img
					src={bannerimage}
					alt="Two bottles of lotion"
					className="max-w-lg"
				/>
			</div>
		</div>
	);
}

export default SecondaryBanner;
