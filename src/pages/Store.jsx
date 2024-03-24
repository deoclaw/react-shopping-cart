import products from "../data/items.json";
import Product from "../components/Product";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Store() {
	const { cartQuantity } = useShoppingCart();
	return (
		<>
			<h1>Store</h1>

			<div className="store-container">
				{products.map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						image={product.image}
						price={product.price}
						product={product} //this data lets us use elsewhere
						quantity={product.quantity} //this is 1 by default -- for the cart, only 1 is added
					/>
				))}
			</div>
		</>
	);
}
