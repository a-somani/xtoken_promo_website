import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import XtkLogo from "../../images/light_xtoken_logo.svg"
import { animateScroll as scroll } from "react-scroll"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements"

const Navbar = ({ toggleMenu }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={() => {
              scroll.scrollToTop()
            }}
          >
            <img
              // style={{ width: "50%", height: "auto" }}
              src={XtkLogo}
              alt="xToken"
            />
          </NavLogo>
          <MobileIcon onClick={() => toggleMenu(true)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="currentplatform"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={25}
              >
                Current Platform
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="roadmap"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={25}
              >
                Updates on the Way
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="whyxtoken"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={25}
              >{`Why xToken?`}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="memes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={25}
              >
                Memes
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/buy">Buy</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
