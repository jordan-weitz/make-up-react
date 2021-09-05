import axios from "axios";
import { useState } from "react";
import useGetProducts from "../hooks/useGetProducts";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetSuggestProducts = () => {
	const { singleProduct, getSingleProduct } = useGetProducts();
	const [suggestProducts, setSuggestProducts] = useState(null);

	const getRecommendedProducts = (brand) => {
		axios
			.get(`${BASE_URL}.json`, {
				params: {
					brand: brand,
				},
			})
			.then((response) => setSuggestProducts(response.data));
	};

	return { suggestProducts, getRecommendedProducts };
};

export default useGetSuggestProducts;
