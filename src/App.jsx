import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./components/context/CartContext"; //we grab the fxn so its {in curlies}
import "./App.css";

// Route to our pages
function App() {
	return (
		<CartProvider>
			{/* wrap it all in the fxn */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
