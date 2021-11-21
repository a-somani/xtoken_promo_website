export const homeObjOne = {
  id: "currentplatform",
  BGColor: "linear-gradient(#943bf3, #8a38f2)",
  lightText: true,
  lightTextDesc: true,
  topLine: "Current Platform",
  headline: "Native staking solutions and LP strategies",
  description: (
    <p>
      If you're into DeFi, you probably hold some DeFi blue chips. Do they just
      sit in your wallet? Make your assets productive by staking them. xToken
      simplifies staking into just a{" "}
      <a
        href="https://newsletter.banklesshq.com/p/how-to-automate-your-staking-rewards"
        target="_blank"
        rel="noopener noreferrer"
      >
        few clicks
      </a>
      .
      <br />
      <br />
      Current DeFi coins you can{" "}
      <a
        href="https://xtoken.market/app/invest/native"
        target="_blank"
        rel="noopener noreferrer"
      >
        stake
      </a>
      : AAVE, KNC, BNT, 1INCH, and ALPHA. <br />
      <br />
      You can even make your stable coins productive! You can provide liquidity
      to many pairs like USDC-USDT on the{" "}
      <a
        href="https://xtoken.market/app/invest/liquidity-strategies"
        target="_blank"
        rel="noopener noreferrer"
      >
        xToken Platform.
      </a>
    </p>
  ),
  buttonLabel: "Read more on xToken",
  buttonLink: "https://medium.com/xtoken?p=d2f2acb35cf",
  imgStart: false,
  img: require("../../images/pink_xtk_piggy.svg").default,
  alt: "xasset gives yields",
  dark: true,
  dark2: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: "roadmap",
  BGColor: "linear-gradient(#8a38f2, #7a33f1)",
  lightText: true,
  lightTextDesc: false,
  topLine: "Updates on the way",
  headline: "L2 - Arbitrum, Lending, & Leverage",
  description: (
    <p>
      xToken will help you make your money go further. To combat extremely high
      gas prices on L1, xToken is making a broad-based investment in Arbitrum
      (L2).
      <br />
      <br />
      xToken is expanding from a staking and LP platform to a DeFi ecosystem.{" "}
      <em>
        {" "}
        By the end of this year, xToken will have an active lending market,
        liquidity strategies, several composable 3x leverage tokens and our
        upcoming LM Terminal product all live on Arbitrum.
        <br />
        <br />
        Our long-term vision for xToken is for a fully vertically integrated
        protocol, where we have internal access to the key DeFi primitives that
        are essential to the ecosystem.{" "}
      </em>
    </p>
  ),
  buttonLabel: "Read more on this stategic update",
  buttonLink:
    "//gov.xtoken.cafe/t/xtoken-strategic-update-lending-l2-leverage/204",
  imgStart: true,
  img: require("../../images/construction_cyan.svg").default,
  alt: "xasset gives yields",
  dark: false,
  dark2: true,
  primary: false,
  darkText: false,
}
