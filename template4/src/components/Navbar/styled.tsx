import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { NavTypes } from "./interface";

export const Container = styled.div<NavTypes.Container>`
	width: 100%;
`;

export const Nav = styled.nav`
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
	position: fixed;
	width: 100%;
	height: ${({ theme }) => theme.height.navbar};
	top: 0;
	padding: 1rem 2rem;
	background: ${({ theme }) => theme.color.primary};
	z-index: ${({theme}) => theme.zIndex.navbar};
`;

export const Logo = styled(LinkR)`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	height: 100%;
	text-decoration: none;
`;

export const LogoImg = styled.img`
	height: 100%;
`;

export const LogoH1 = styled.h1`
	font-size: 1.2rem;
	font-weight: ${({theme}) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.color.white};
`;

export const OpenMenu = styled.div`
	display: none;

	@media ${({ theme }) => theme.breakpoint.md} {
		display: block;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.color.white};
		cursor: pointer;
	}

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 1.2rem;
	}
`;

export const Menu = styled.ul`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
  gap: 1rem;

	@media ${({ theme }) => theme.breakpoint.md} {
		display: none;
	}
`;

export const MenuItem = styled.li`
  height: 100%;
	list-style: none;
`;

export const MenuLink = styled(LinkR)`
  font-size: 1rem;
	text-decoration: none;
  color: ${({theme}) => theme.color.white};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.color.quinary};
  }
`;

export const BtnWrap = styled.div`
  
`;

export const BtnLink = styled(LinkR)`
  font-size: 1rem;
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
	

  &:hover {
    color: ${({theme}) => theme.color.quinary};
  }
`;


export const EmptyBox = styled.div`
	width: 100%;
	height: ${({theme}) => theme.height.navbar};
`;