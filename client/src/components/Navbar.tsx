import "../styles/Navbar.css"

const Navbar = () => {
	return (
		<nav className="nav">
			<a href="/" className="logo">Luniverse</a>
			<ul>
				<CustomLink href="/pricing">Pricing</CustomLink>
				<CustomLink href="/about">About</CustomLink>
			</ul>
		</nav>
	);
};

interface LinkProps {
	href: string
	children: string
}

const CustomLink = (props: LinkProps) => {
	const {href, children} = props;
	const path = window.location.pathname;

	return (
		<li className={path === href ? "active" : ""}>
			<a href={href}>{children}</a>
		</li>
	)
}

export default Navbar;
