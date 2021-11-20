import React from "react"
import Icon1 from "../../images/growth.svg"
import Icon2 from "../../images/exploit_list.svg"
import Icon3 from "../../images/pushup.svg"

import { Container, H1, Wrapper, Card, Icon, H2, P, Exploits } from "./Elements"

const Triple = () => {
  return (
    <>
      <Container id="whyxtoken">
        <H1>xToken is Transforming</H1>
        <Wrapper>
          <Card>
            <Icon src={Icon1} />
            <H2>Growth Potential</H2>
            <P>
              xToken is a leader in innovation such as through the migration to
              L2. The new vision for an xToken ecosystem is a much larger scale
              project than before. As an entire ecosystem, xToken will have a
              seat at the table with the likes of AAVE, SNX, and COMP
              (billion-dollar projects). This new vision also expands the
              utility of the XTK token. XTK stakers will earn fees from lending
              and leverage products on top of the rewards from current products.
            </P>
          </Card>
          <Card>
            <Exploits src={Icon2} />
            <H2>Battle-tested</H2>
            <P>
              It is true that xToken has suffered two exploits earlier this year
              on the same contract, one of the most complex implementations of
              an xAsset. That contract has since been retired, so there is no
              more risk. Since then, the xToken development team has only gotten
              larger and more diligent, yet they are consistently releasing new
              products. The team recently{" "}
              <a
                href="//twitter.com/xtokenmarket/status/1461797810165137408?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                announced a partnership that will 10X the TVL
              </a>
              . With this transformation approaching, this moment represents a
              unique opportunity to get in early.
            </P>
          </Card>
          <Card>
            <Icon src={Icon3} />
            <H2>Strong Backing just got Stronger</H2>
            <P>
              The initial investors for xToken were founders and investors from
              the biggest DeFi projects. This includes: Kyber, Synthetix,
              Chainlink, CoinGecko and more. In sync with the transformation to
              an ecosystem, those same investors{" "}
              <a
                href="//twitter.com/xtokenmarket/status/1455970784736948232?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                bought more
              </a>
              . There's also a{" "}
              <a
                href="//twitter.com/reganbozman/status/1455995810332692487?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                new one
              </a>{" "}
              linked to{" "}
              <a
                href="//twitter.com/CoinList"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinList
              </a>{" "}
              and{" "}
              <a
                href="//twitter.com/AngelList"
                target="_blank"
                rel="noopener noreferrer"
              >
                AngelList
              </a>
              . Others are seeing the huge new growth potential of xToken with
              its new ecosystem vision, will you?
            </P>
          </Card>
        </Wrapper>
      </Container>
    </>
  )
}

export default Triple
