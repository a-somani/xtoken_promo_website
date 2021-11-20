import React from "react"
import { InfoContainer, InfoWrapper } from "./CarouselElement"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { CarouselWrap, H1 } from "./CarouselElement"
import Meme1 from "../../images/meme1.PNG"
import Meme2 from "../../images/meme2.PNG"
import Meme3 from "../../images/meme3.PNG"
import Meme4 from "../../images/meme4.PNG"

const MemeCarousel = () => {
  return (
    <>
      <InfoContainer id="memes">
        <InfoWrapper>
          <H1>Memes</H1>
          <CarouselWrap>
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              showArrows
              showThumbs
              interval={"4000"}
            >
              <img src={Meme1} alt="meme" />
              <img src={Meme2} alt="meme" />
              <img src={Meme3} alt="meme" />
              <img src={Meme4} alt="meme" />
            </Carousel>
          </CarouselWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default MemeCarousel
