import React from "react";

import classes from "../styles/Layout.module.scss";
import Header from "./Header";

interface Props {
	children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={classes.container}>{children}</div>
		</>
	);
};

export default Layout;
