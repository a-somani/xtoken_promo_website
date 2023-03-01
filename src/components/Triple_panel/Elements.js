import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#7a33f1, #692ef0);
  @media screen and (max-width: 768px) {
    height: 1100px;
    padding-top: 100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 64px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`
export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in-out;
  @media screen and (max-width: 768px) {
    max-height: 340px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
`
export const Icon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
  @media screen and (min-width: 1200px) {
    height: 160px;
    width: 160px;
  }
`
export const Exploits = styled.img`
  max-height: 100px;
  width: 100%;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    max-height: 130px;
  }
  @media screen and (min-width: 1200px) {
    max-height: 120px;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    max-height: 100px;
  }
`
export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`
export const H2 = styled.h2`
  font-size: 1rem;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: 10px;
  color: #1b1658;
  @media screen and (max-width: 400px) {
    margin-bottom: 5px;

    font-size: 0.9rem;
  }
`
export const P = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #322c79;
  @media screen and (max-width: 1200px) and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.78rem;
  }
  a {
    color: #322c79;
    font-weight: 600;
    text-decoration: none;
    text-decoration: underline;
    text-decoration-color: #60d0fd;
  }
`
