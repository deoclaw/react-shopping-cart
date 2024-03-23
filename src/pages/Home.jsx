import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";

export default function Home() {
	const [productList, setProductList] = useState(ProductData);

	return (
		<div className="container">
			<Products productList={productList} />
		</div>
	);
}
