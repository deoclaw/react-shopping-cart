import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import ThankYou from "./pages/ThankYou";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import "./App.css";
import Navbar from "./components/Navbar";

// Route to our pages
function App() {
	return (
		<ShoppingCartProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Store />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/thankyou" element={<ThankYou />} />
			</Routes>
		</ShoppingCartProvider>
	);
}

export default App;
