import React, { FC } from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./styled";

const Sidebar: FC<{isOpen: boolean, toggle: VoidFunction}> = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="section1" offset={-80} onClick={toggle}>Section1</SidebarLink>
          <SidebarLink to="section2" offset={-80} onClick={toggle}>Section2</SidebarLink>
          <SidebarLink to="section3" offset={-80} onClick={toggle}>Section3</SidebarLink>
          <SidebarLink to="signup" offset={-80} onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
