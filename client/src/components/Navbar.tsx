import React from "react";

const Navbar = () => {
	return (
		<nav className="nav">
			<a href="/">Logo</a>
			<ul>
				<li>
					<a href="/pricing">Pricing</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
