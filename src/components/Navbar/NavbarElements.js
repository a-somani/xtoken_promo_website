import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#943bf3" : "transparent")};
  //background: #943bf3;
  // #27153E, #322C79, #1B1658, #5327EE, #5a22f5, #943BF3, #9500FC,#FFBBFF, #60D0FD
  height: 80px;
  //margin-top: -80px;
  margin-bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    margin-top: -8px;
    width: 150px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 150px;
    margin-right: 40px;
  }

  img {
    width: 80%;
    height: auto;
    @media screen and (max-width: 540px) {
      width: 90%;
    }
  }

  /* &:hover {
    font-size: 1.8rem;
    margin-left: 7.5px;
    transition: all 0.2s ease-in-out;
  } */
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    border-radius: 50%;

    &:hover {
      box-shadow: 0px -4px 10px 15px #31313130;
    }
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 990px) {
    margin-left: -60px;
    margin-right: 30px;
  }
`

export const NavItem = styled.li`
  height: 80px;
  .active {
    border-bottom: 2px solid #60d0fd;
  }
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    border-top: 2px solid #60d0fd;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #60d0fd;
  white-space: nowrap;
  padding: 10px 22px;
  color: #1b1658;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
