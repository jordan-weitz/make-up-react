import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

function Product() {
	const { id } = useParams();

	// const { suggestProduct, getSuggestProduct } = useGetSuggestProducts();

	const { singleProduct, getSingleProduct } = useGetProducts();

	useEffect(() => {
		getSingleProduct(id);
	}, []);

	if (!singleProduct) return <p>Loading...</p>;

	return (
		<div className="mt-20 container mx-auto h-screen">
			{/* title */}
			<div className="mb-10">
				<h5 className="font-krona text-sm">{singleProduct.name}</h5>
				<p className="text-dark-grey text-sm font-krona">
					{singleProduct.product_type}
				</p>
			</div>
			{/* image */}
			<div className="flex mb-10">
				<div className="flex items-center justify-center w-screen">
					<img
						width="250"
						src={`https://${singleProduct.api_featured_image}`}
						alt={singleProduct.name}
					/>
				</div>
				<div className="">
					{/* catgory */}
					<p className="text-yellow text-sm font-krona">
						{singleProduct.product_type}
					</p>
					<h1 className="font-krona text-base">{singleProduct.name}</h1>
					{/* price */}

					<p>{singleProduct.category}</p>
					<div className="flex my-10 justify-between">
						<div className="relative">
							<p className="font-krona text-xl pt-2 ml-4">
								{singleProduct.price_sign} {singleProduct.price}
							</p>
							<div className="bg-light-grey h-10 w-10 rounded-full absolute top-0 -z-1"></div>
						</div>
						<button className="inline-block rounded-full font-bold font-krona text-xs bg-yellow py-3 px-6">
							add to basket
						</button>
					</div>
					{/* description */}
					<p>{singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>

					{/* for you products */}
					<div>{/* product  */}</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
