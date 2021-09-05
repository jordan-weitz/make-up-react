import React from "react";
import { Link } from "react-router-dom";

function BrandLink({ classes }) {
	return (
		<Link to="/" className={`text-2xl font-krona  ${classes}`}>
			Welly
		</Link>
	);
}

export default BrandLink;
