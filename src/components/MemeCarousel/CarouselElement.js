import styled from "styled-components"

// #27153E, #322C79, #4706B6, #1B1658, #5327EE, #5a22f5, #943BF3, #9500FC,#FFBBFF, #60D0FD

export const InfoContainer = styled.div`
  color: #fff;
  background: linear-gradient(#692ef0, #5327ee);
  padding: 20px 0;
`
/* background: ${({ lightBg }) =>
      lightBg ? "#943BF3" : "#5a22f5"}; //943BF3 or 5327EE */
export const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0;
  padding-top: 5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const InfoWrapper = styled.div`
  padding-top: 15%;
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const Images = styled.div`
  width: 0 auto;
  height: 100%;
  width: auto;
`
export const CarouselWrap = styled.div`
  max-width: 550px;
  height: 90%;
  margin-top: -8rem;
  @media screen and (max-width: 1200px) {
    max-width: 550px;
  }
  @media screen and (max-width: 480px) {
    max-width: 400px;
  }
  @media screen and (max-width: 400px) {
    max-width: 300px;
  }
  @media screen and (max-width: 300px) {
    max-width: 250px;
  }

  .carousel {
    display: flex;
    justify-content: center;
    /* padding: none; */
  }
  .carousel .slide {
    margin: 36px auto;
    width: 100%;
  }

  /* @media only screen and (max-width: 800px) {
    .carousel {
      height: vh;
    }
    .carousel .slide {
      margin: 10vh auto;
      width: 100vw;
    }
    @media only screen and (max-width: 540px) {
    .carousel {
      height: 60vh;
    }
    .carousel .slide {
      margin: 10vh auto;
      width: 100vw;
    }
  } */
`
