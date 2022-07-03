import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
	BtnLink,
	BtnWrap,
	Container,
	EmptyBox,
	Logo,
	LogoH1,
	LogoImg,
	Menu,
	MenuItem,
	MenuLink,
	Nav,
	OpenMenu,
} from "./styled";

const Navbar = () => {
	return (
		<Container>
			<Nav>
        {/* Logo */}
				<Logo to="/">
					<LogoImg src=""/>
					<LogoH1>Logo</LogoH1>
				</Logo>

        {/* Button to open menu */}
				<OpenMenu>
					<FaBars />
				</OpenMenu>

        {/* Navbar menu */}
				<Menu>
					<MenuItem>
						<MenuLink to="/items">List</MenuLink>
					</MenuItem>
					<MenuItem>
						<MenuLink to="/mypage">MyPage</MenuLink>
					</MenuItem>
				</Menu>
			</Nav>

			{/* EmptyBox for preventing overlaps */}
			<EmptyBox/>
		</Container>
	);
};

export default Navbar;
