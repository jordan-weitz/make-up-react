import Main from "./pages/Main";

// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Product from "./pages/Product";

export default function App() {
	return (
		<Router>
			<Navbar />
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/product/:id">
					<Product />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}
