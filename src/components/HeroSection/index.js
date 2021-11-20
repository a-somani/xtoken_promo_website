import React, { useState } from "react"
import {
  HeroBackground,
  HeroContainer,
  VideoBackground,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements"
import video from "../../videos/xtk_bg_vivid.mp4"
import { Button } from "../ButtonElement"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>xToken - The Future of DeFi</HeroH1>
        <HeroP>
          Get started earning yields by staking your DeFi and stable coins.
        </HeroP>
        <HeroP>Participate in lending and leverage products (upcoming).</HeroP>
        <HeroBtnWrapper>
          <Button
            to="currentplatform"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
          >
            Explore {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
