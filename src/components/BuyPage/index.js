import React, { useState, useEffect } from "react"
import XtkLogo from "../../images/light_xtoken_logo.svg"
import CoinGecko from "../../images/coingecko.svg"
import {
  Container,
  Icon,
  PriceContent,
  Prices,
  ContentWrap,
  PriceHeading,
  APILabel,
  Element,
  ExchangeElements,
} from "./BuyPageElements"

const BuyPage = () => {
  const [loading, setLoading] = useState(false)
  const [prices, setPrices] = useState([])
  const [AGGprice, setAGGprice] = useState("loading")

  useEffect(() => {
    setLoading(true)

    async function getPrices() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/xtoken`
        )
        const data = await response.json()

        if (data) {
          console.log(data)
          const nicePrice = parseFloat(
            data.market_data.current_price.usd.toFixed(3)
          )
          setAGGprice(nicePrice)

          const priceData = data.tickers.map((item, index) => {
            const {
              market: { name },
              converted_last: { usd },
              trust_score,
              trade_url,
            } = item
            const price = parseFloat(usd.toFixed(3))

            return { index, name, price, trust_score, trade_url }
          })
          setPrices(priceData)
          console.log(prices)
          //console.log(prices)
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getPrices()
  }, [])

  return (
    <>
      <Container>
        <ContentWrap>
          <Icon to="/">
            <img
              style={{ width: "150px", height: "auto" }}
              src={XtkLogo}
              alt="xToken"
            />
          </Icon>
          <PriceContent>
            <Prices>
              <PriceHeading>
                The current price of XTK is: <br /> $ {AGGprice}
              </PriceHeading>
              {/* <span>{loading ? "loading" : prices}</span> */}
              <ExchangeElements>
                {prices &&
                  prices.map((exchange) => {
                    const { index, name, price, trade_url, trust_score } =
                      exchange
                    return (
                      <a
                        key={index}
                        href={trade_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Element key={index} trustScore={trust_score}>
                          <p>
                            {name} : {`$`}
                            {price}
                          </p>
                        </Element>
                      </a>
                    )
                  })}
              </ExchangeElements>

              <APILabel
                href="//www.coingecko.com/en/coins/xtoken#markets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Powered by</p> <img src={CoinGecko} alt="" />
              </APILabel>
            </Prices>
          </PriceContent>
        </ContentWrap>
      </Container>
    </>
  )
}

export default BuyPage
