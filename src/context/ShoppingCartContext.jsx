import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

//creating own hook
export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([{ id: 0, quantity: 0 }]);
	//our cartitems only need an id and a quantity

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	function getProductQuantity(id) {
		return cartItems.find((product) => product.id === id)?.quantity || 0;
	} //if we find a product with the matching id then get that quantity or return 0

	function increaseCartQuantity(id) {
		setCartItems((currentProducts) => {
			// if we don't find anything in our current products in cart
			if (currentProducts.find((item) => item.id === id) == null) {
				return [...currentProducts, { id, quantity: 1 }];
				// then we know there's only 1 item to be added
			} else {
				return currentProducts.map((item) => {
					if (item.id === id) {
						// else increase the quantity by 1
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseCartQuantity(id) {
		setCartItems((currentProducts) => {
			// if we find the item and there's only 1 then return the list of items and set a new filtered list of items sans the one we removed
			if (currentProducts.find((item) => item.id === id)?.quantity === 1) {
				return currentProducts.filter((item) => item.id !== id);
			} else {
				return currentProducts.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id) {
		setCartItems((currentProducts) => {
			return currentProducts.filter((item) => item.id !== id);
		});
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				getProductQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export default ShoppingCartContext;
