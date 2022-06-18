import {Link, Path, useMatch, useResolvedPath} from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="logo">
				Logo
			</Link>
			<ul>
				<CustomLink to="/page1">Page1</CustomLink>
				<CustomLink to="/page2">Page2</CustomLink>
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
