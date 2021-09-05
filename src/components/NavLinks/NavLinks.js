import React from "react";
import { NavLink } from "react-router-dom";

const links = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/search",
		name: "Search",
	},
	{
		path: "/about",
		name: "About",
	},
];

function NavLinks() {
	return (
		<div>
			{links.map((link, index) => (
				<NavLink
					className="lowercase mr-8 text-sm hover:underline hover:text-yellow transition delay-50 duration-300 ease-in-out"
					to={link.path}
					key={`${link.name}-${index}`}
				>
					{link.name}
				</NavLink>
			))}
		</div>
	);
}

export default NavLinks;
