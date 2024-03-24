import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //lets me navigate to another page
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function CheckoutForm() {
	const { cartItems, clearCart } = useShoppingCart(); //needs

	// function getStoredTasks() {
	//     const localValue = localStorage.getItem("ITEMS");
	//     if (localValue != null) return JSON.parse(localValue);
	//     return [];
	// }

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const re = /^[a-zA-Z0-9 '.,]*$/g; //regex for alphanumerics and space button
	const navigate = useNavigate();

	function handleChange(e) {
		const val = e.target.value;

		if (val.match(re)) {
			if (e.target.name === "name") {
				setName(e.target.value);
			} else {
				setAddress(e.target.value);
			}
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (name === "" || address === "") {
			alert("Must not be empty!");
		} else {
			setName("");
			setAddress("");
			clearCart();

			navigate(`/thankyou`);
		}
	}

	function hideForm() {
		const form = document.getElementById("checkoutform");
		form.setAttribute("display", "none");
	}

	//make a form that one submit will clear all cart items and say thank you
	return (
		<div className="form">
			<form onSubmit={handleSubmit} id="checkoutform">
				<div className="form-group">
					<label htmlFor="name">Name: </label>
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						onChange={handleChange}
					/>
					<br />
					<br />
					<label htmlFor="address">Address: </label>
					<input
						id="address"
						name="address"
						type="text"
						value={address}
						onChange={handleChange}
					/>
					<br />
					<br />
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
