import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const addToCart = (product) => {
		setShoppingCart([product, ...shoppingCart]);
	};

	return (
		<CartContext.Provider value={{ addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
