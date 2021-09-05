import React from "react";
import BrandLink from "../BrandLink";
import NavLinks from "../NavLinks/NavLinks";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";

import "./Navbar.css";

function Navbar() {
	return (
		<nav className="flex justify-between py-3 font-krona container mx-auto sticky top-0 bg-white z-50">
			{/* Brand */}
			<BrandLink classes="hover:text-yellow transition delay-50 duration-300 ease-in-out" />

			<div className="flex items-end lowercase">
				<NavLinks />
				{/* Icons */}

				<div className="flex">
					{/* Liked */}
					<HeartIcon />
					<CartIcon />

					{/* Cart */}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
