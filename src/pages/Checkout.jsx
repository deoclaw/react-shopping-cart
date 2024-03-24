import CheckoutForm from "../components/CheckoutForm";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Cart() {
	const { cartQuantity } = useShoppingCart();
	return (
		<>
			<h1>Checkout</h1>

			<div className="checkout-container">
				<div>
					<h2>Order Details</h2>
					<CheckoutForm />
				</div>
				<div className="review-cart">
					<h2>Review Your Cart</h2>
					<ShoppingCart />
				</div>
			</div>
		</>
	);
}
