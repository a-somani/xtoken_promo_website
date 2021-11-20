import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={() => toggleMenu(false)}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="currentplatform" onClick={() => toggleMenu(false)}>
            Current Platform
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={() => toggleMenu(false)}>
            Updates on the Way
          </SidebarLink>
          <SidebarLink to="whyxtoken" onClick={() => toggleMenu(false)}>
            Why xToken?
          </SidebarLink>
          <SidebarLink to="memes" onClick={() => toggleMenu(false)}>
            Memes
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/buy" onClick={() => toggleMenu(false)}>
            Buy
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
