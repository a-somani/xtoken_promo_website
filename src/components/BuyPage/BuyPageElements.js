import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(#943bf3, #5327ee);
`

export const ContentWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 48px;
  margin-top: 16px;
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  z-index: 3;
  width: 200px;
  border-radius: 20px;
  @media screen and (max-width: 1000px) {
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const PriceContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -100px;
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`
export const Prices = styled.div`
  background: #fff;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 20px;
  padding-bottom: 10px;
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
  color: #000;
  box-shadow: #4706b6 0px 0px 10px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const PriceHeading = styled.h1`
  margin-bottom: 40px;
  color: #322c79;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`
export const APILabel = styled.a`
  font-size: 24px;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-top: 30px;
  font-weight: 600;
  color: #60d0fd;
  text-decoration: none;
  p {
    padding-left: 10px;
    padding-right: 15px;
    margin-top: -3px;
  }
`
export const ExchangeElements = styled.div`
  width: 100%;
  height: auto;
  color: red;
  outline: 10px;
  font-size: 20px;

  a {
    text-decoration: none;
  }
`
export const Element = styled.div`
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  //outline-style: solid;
  border-radius: 35px;
  background-color: #f4f3f8;
  outline-color: #aaead0;
  outline-width: 3px;
  //box-shadow: #2bca89 0px 0px 8px;
  //#01bf71 and #ffdf00 and #c43931
  color: ${({ trustScore }) =>
    (trustScore === "green" && "#01bf71") ||
    (trustScore === "yellow" && "#ffdf00") ||
    (trustScore === "red" && "#c43931")};
  text-align: center;

  &:hover {
    transition: all 200ms ease-in-out;
    outline-style: solid;
    outline-color: #60d0fd;
    outline-width: 3px;
  }
`