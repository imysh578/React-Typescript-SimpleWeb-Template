import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./styled";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="page1">Page1</SidebarLink>
          <SidebarLink to="page2">Page2</SidebarLink>
          <SidebarLink to="page3">Page3</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
