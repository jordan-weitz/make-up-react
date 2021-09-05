import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetProducts = () => {
	const [products, setProducts] = useState([]);
	const [singleProduct, setSingleProduct] = useState(null);
	const getTopProducts = () => {
		axios
			.get(`${BASE_URL}.json`, {
				params: {
					product_tags: "ecocert",
				},
			})
			.then((data) => setProducts(data.data));
	};

	const getSingleProduct = (id) => {
		axios
			.get(`${BASE_URL}/${id}.json`)
			.then((data) => setSingleProduct(data.data));
	};

	const getRecommendedProducts = () => {
		axios
			.get(`${BASE_URL}.json`, {
				params: {
					product_tags: "ecocert",
				},
			})
			.then((data) => setProducts(data.data));
	};

	return { products, getTopProducts, singleProduct, getSingleProduct };
};

export default useGetProducts;
