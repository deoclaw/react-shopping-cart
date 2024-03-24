import CheckoutForm from "../components/CheckoutForm";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function ThankYou() {
	return (
		<>
			<h1>Thank You</h1>

			<p>Your order has been submitted</p>
		</>
	);
}
