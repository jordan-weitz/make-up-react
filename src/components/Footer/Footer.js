import React from "react";
import BrandLink from "../BrandLink";
import "./Footer.css";

function Footer() {
	const links = ["about", "skincare", "makeup", "supplements", "contact"];
	return (
		<footer className="bg-dark text-light flex justify-between px-4 py-4">
			<BrandLink classes="text-yellow hover:text-light-grey transition delay-50 duration-300 ease-in-out" />

			{/* This code below is like an enhanced for loop in java
it goes through each individual node of the array and puts it into the link  */}
			<div className="flex item">
				{links.map((link) => (
					<a href="/" className="ml-4" key={link}>
						{link}
					</a>
				))}
			</div>
		</footer>
	);
}

export default Footer;
