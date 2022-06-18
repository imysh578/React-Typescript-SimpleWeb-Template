import {Link, Path, useMatch, useResolvedPath} from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="logo">
				Luniverse
			</Link>
			<ul>
				<CustomLink to="/pricing">Pricing</CustomLink>
				<CustomLink to="/about">About</CustomLink>
			</ul>
		</nav>
	);
};

interface LinkProps {
	to: string;
	children: string;
}

const CustomLink = (props: LinkProps) => {
	const { to, children } = props;
	const resolvedPath: Path = useResolvedPath(to);
	const isActive = useMatch({path: resolvedPath.pathname, end: true})

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

export default Navbar;
