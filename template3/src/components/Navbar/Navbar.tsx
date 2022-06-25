import React, { useEffect, useState } from "react";
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
import { IconContext } from "react-icons";
import { animateScroll } from "react-scroll";

const Navbar: React.FC<{ toggle: VoidFunction }> = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav scrollNav={scrollNav}>
					<NavbarComponent>
						<NavLog to="/" onClick={toggleHome}>
							SOKURI
						</NavLog>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks
									to="section1"
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
								>
									Section1
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to="section2"
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
								>
									Section2
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to="signup"
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
								>
									Sign Up
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to="/signin">Sign In</NavBtnLink>
						</NavBtn>
					</NavbarComponent>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
