import React, { useEffect } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import ButtonLink from "../ButtonLink/ButtonLink";
import Product from "../Product/Product";
import SectionTitle from "../SectionTitle/SectionTitle";

function TopProducts() {
	const { products, getTopProducts } = useGetProducts();

	useEffect(() => getTopProducts(), []);

	return (
		<div className="container mx-auto mb-20">
			<div className="flex items-center justify-between mb-6">
				<SectionTitle text="Top Products" />
				<ButtonLink path="/about" text="see more" isMain />
			</div>
			{/* Products */}
			<div className=" flex flex-wrap justify-center">
				{products.map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						brand={product.brand}
						imgUrl={product.api_featured_image}
						price={product.price}
						currency={product.price_sign}
					/>
				))}
			</div>
		</div>
	);
}

export default TopProducts;
