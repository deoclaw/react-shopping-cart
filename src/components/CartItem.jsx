import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/items.json";
import Card from "./Card";

export default function CartItem({ id, quantity }) {
	//need to remove from cart
	const { removeFromCart } = useShoppingCart();
	const item = products.find((product) => product.id === id);
	if (item == null) return null; //if our item doesn't exist, nothing

	return (
		<Card>
			<div className="img-div-cntr">
				<img src={item.image} alt={item.name} />
			</div>
			<h2>{item.name}</h2>
			<h3>${item.price * quantity}</h3>
			{/*  true && expression evaluates to expression */}
			{quantity > 1 && <h4>x{quantity}</h4>}
			<button className="danger" onClick={() => removeFromCart(item.id)}>
				REMOVE
			</button>
		</Card>
	);
}
