import React from "react"
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column2,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements"
import { Button } from "../ButtonElement"

const InfoSection = ({
  BGColor,
  id,
  img,
  imgStart,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonLink,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer BGColor={BGColor} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightTextDesc={lightTextDesc}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to=""
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => {
                      window.open(buttonLink, "_blank")
                    }}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
