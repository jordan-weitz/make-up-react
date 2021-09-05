import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ path, text, isMain }) {
	return (
		<div>
			<Link
				to={path}
				className={` inline-block text-xs font-krona rounded-full hover:bg-light-grey transition delay-50 duration-300 ease-in-out ${
					isMain
						? "bg-yellow py-4 px-10"
						: "bg-dark text-white py-2 px-4 hover:bg-white hover:text-gray-900"
				}`}
			>
				{text}
			</Link>
		</div>
	);
}

export default ButtonLink;
