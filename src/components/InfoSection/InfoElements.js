import styled from "styled-components"

// #27153E, #322C79, #4706B6, #1B1658, #5327EE, #5a22f5, #943BF3, #9500FC,#FFBBFF, #60D0FD
//#01bf71

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ BGColor }) => BGColor};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
/* background: ${({ lightBg }) =>
      lightBg ? "#943BF3" : "#5a22f5"}; //943BF3 or 5327EE */

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#FFBBFF" : "#60D0FD")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1B1658")};
  @media screen and (min-width: 510px) and (max-width: 1000px) {
    font-size: 34px;
  }

  @media screen and (max-width: 510px) {
    font-size: 30px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) =>
    darkText ? "#27153E" : "#e6e5e8"}; //whites #e6e5e8 -from xtk or #eeece6
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  a {
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
    font-weight: 600;
    text-decoration: none;
    text-decoration: underline;
    text-decoration-color: #60d0fd;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 768px) {
    max-width: 440px;
  }
  @media screen and (max-width: 480px) {
    max-width: 400px;
  }
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
