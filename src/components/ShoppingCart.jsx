import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import products from "../data/items.json";

export default function ShoppingCart() {
	const { cartItems } = useShoppingCart(); //needs

	return (
		<>
			<div className="cartContainer" style={{ textAlign: "center" }}>
				<h2>
					Total:${" "}
					{cartItems.reduce((total, cartItem) => {
						const item = products.find((i) => i.id === cartItem.id);
						total = total + (item?.price || 0) * cartItem.quantity;
						return parseFloat(total.toFixed(2));
					}, 0)}
				</h2>

				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
				<div style={{ textAlign: "center" }}></div>
			</div>
		</>
	);
}
