import React from "react";
import Card from "./Card";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Product({ id, name, image, price, product }) {
	const {
		getProductQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();

	const quantity = getProductQuantity(id);

	return (
		<>
			<Card>
				<div className="img-div-cntr">
					<img src={image} alt={name} />
				</div>
				<h2>{name}</h2>
				<h3>${price}</h3>
				{quantity === 0 ? (
					<button onClick={() => increaseCartQuantity(id)}>
						+ Add to Cart
					</button>
				) : (
					<div>
						<div>
							<button onClick={() => decreaseCartQuantity(id)}>-</button>
							<span className="quantity-buffer">{quantity} in cart</span>
							<button onClick={() => increaseCartQuantity(id)}>+</button>
						</div>
						<button className="danger" onClick={() => removeFromCart(id)}>
							REMOVE
						</button>
					</div>
				)}
			</Card>
		</>
	);
}
