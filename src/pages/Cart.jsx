import { NavLink } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Cart() {
	const { cartQuantity } = useShoppingCart();
	return (
		<>
			<h1>Cart</h1>

			<div>
				{cartQuantity > 0 ? (
					<div>
						<NavLink to="/checkout" className="checkout">
							Checkout
						</NavLink>
						<ShoppingCart />
					</div>
				) : (
					<h2>Nothing in cart</h2>
				)}
			</div>
		</>
	);
}
