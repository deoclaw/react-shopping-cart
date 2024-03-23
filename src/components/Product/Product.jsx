import React from "react";
import Card from "../Card";

export default function Product({ id, name, image, price }) {
	return (
		<>
			<Card>
				<img src={image} alt={name} />
				<h2>{name}</h2>
				<h3>{price}</h3>
			</Card>
		</>
	);
}
