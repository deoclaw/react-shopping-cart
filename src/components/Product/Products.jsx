import React, { useState, useContext } from "react";
import Product from "./Product";

export default function Products({ productList }) {
	return (
		<>
			<div>
				{productList.map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						image={product.image}
						price={product.price}
						product={product} //this data lets us use elsewhere
					/>
				))}
			</div>
		</>
	);
}
