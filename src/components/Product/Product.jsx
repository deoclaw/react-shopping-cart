import React, { useContext } from "react";
import Card from "../Card";
import CartContext from "../context/CartContext";

export default function Product({ id, name, image, price, product }) {
	const { addToCart } = useContext(CartContext);

	return (
		<>
			<Card>
				<img src={image} alt={name} />
				<h2>{name}</h2>
				<h3>${price}</h3>
				<button onClick={addToCart}>Add To Cart</button>
			</Card>
		</>
	);
}
