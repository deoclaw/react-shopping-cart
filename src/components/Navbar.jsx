import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="nav-containter">
			<ul>
				<li>
					<NavLink to="/">Store</NavLink>
				</li>

				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
			</ul>
		</div>
	);
}
