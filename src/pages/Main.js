import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Main({ children }) {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">{children}</div>
			<Footer />
		</>
	);
}

export default Main;
