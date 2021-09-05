import React from "react";
import Benefits from "../components/Benefits/Benefits";
import MainBanner from "../components/MainBanner/MainBanner";
import SecondaryBanner from "../components/SecondaryBanner/SecondaryBanner";
import TopProducts from "../components/TopProducts/TopProducts";
import UniqueSellingPoint from "../components/UniqueSellingPoint/UniqueSellingPoint";

function Home() {
	return (
		<div>
			<MainBanner />
			<TopProducts />
			<SecondaryBanner />
			<UniqueSellingPoint />
			<Benefits />
		</div>
	);
}

export default Home;
