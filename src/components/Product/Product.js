import React from "react";
import { Link } from "react-router-dom";

function Product({ id, name, brand, imgUrl, price, currency }) {
	return (
		<Link
			className="flex flex-col mb-4 mr-4 px-4 py-6 hover:shadow-xl transform hover:scale-105 transition delay-50 duration-300 ease-in-out rounded-md"
			to={`/product/${id}`}
		>
			<img
				width="120"
				src={`https://${imgUrl}`}
				alt={name}
				className="mx-auto mb-6"
			/>

			<p className="text-yellow font-krona text-sm lowercase">{name}</p>
			<p className="mb-4">{brand}</p>
			<div className="relative">
				<p className="font-krona text-md pt-2 ml-4">
					{currency} {price}
				</p>
				<div className="bg-light-grey h-10 w-10 rounded-full absolute top-0 -z-1"></div>
			</div>
		</Link>
	);
}

export default Product;
