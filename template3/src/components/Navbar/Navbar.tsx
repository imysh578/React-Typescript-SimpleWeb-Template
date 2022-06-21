import React from "react";
import {
	MobileIcon,
	Nav,
	NavbarComponent,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLog,
	NavMenu,
} from "./styled";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarComponent>
					<NavLog to="/">SOKURI</NavLog>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="page1">Page1</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="page2">Page2</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="page3">Page3</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="signup">Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
				</NavbarComponent>
			</Nav>
		</>
	);
};

export default Navbar;
