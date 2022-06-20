import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
	background: ${({ theme }) => theme.color.black};
	height: 5rem;
	/* margin-top: -5rem; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: all 0.8s ease;
	}
`;

export const NavbarComponent = styled.div`
	display: flex;
	justify-content: space-between;
	height: 5rem;
	z-index: 1;
	width: 100%;
	padding: 0 1.5rem;
	max-width: 1100px;
`;

export const NavLog = styled(LinkR)`
	color: ${({theme}) => theme.color.light};
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 1.5rem;
	font-weight: bold;
	text-decoration: none;
`;

export const MobileIcon = styled.div`
	display: none;

	@media ${({theme}) => theme.device.tablet} {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${({theme}) => theme.color.light};
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media ${({theme}) => theme.device.tablet} {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 5rem;
`;

export const NavLinks = styled(LinkS)`
	color: ${({theme}) => theme.color.light};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid ${({theme}) => theme.color.primary};
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media ${({theme}) => theme.device.tablet} {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: ${({theme}) => theme.color.primary};
	white-space: nowrap;
	padding: 10px 22px;
	color: ${({theme}) => theme.color.dark};
	font-size: 1rem;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({theme}) => theme.color.light};
	}
`;
