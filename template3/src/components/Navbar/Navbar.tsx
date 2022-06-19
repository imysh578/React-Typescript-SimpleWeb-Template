import React from 'react'
import { MobileIcon, Nav, NavbarComponent, NavItem, NavLinks, NavLog, NavMenu } from './NavbarElement'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarComponent>
          <NavLog to="/">SOKURI</NavLog>
          <MobileIcon>
            {/* <FaBars/> */}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="page1">Page1</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarComponent>
      </Nav>
    </>
  )
}

export default Navbar