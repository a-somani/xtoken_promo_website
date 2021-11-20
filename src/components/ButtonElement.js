import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "#60D0FD" : "#1B1658"}; //or #FFBBFF
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#1B1658" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "#16px")};
  font-weight: 600;
  /* padding-left: 50px; */
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  &:hover {
    transition: all 200ms ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#5a22f5")};
  }
`
