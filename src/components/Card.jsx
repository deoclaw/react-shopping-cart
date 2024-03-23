import React from "react";

// {children} as a prop lets us nest OTHER jsx components in our Card
// it's kind of like slot in astro?
export default function Card({ children }) {
	return <div className="card">{children}</div>;
}
