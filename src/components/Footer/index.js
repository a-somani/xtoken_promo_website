import React from "react"
import XtkLogo from "../../images/light_xtoken_logo.svg"
import {
  FaTwitter,
  FaDiscord,
  FaMedium,
  FaGithub,
  FaReddit,
} from "react-icons/fa"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterColumn,
  FooterLinkGroup,
  FooterLinkTitle,
  FooterLink,
  SocialMediaLinks,
  SocialLink,
  SocialMediaWrap,
  Logos,
  WebsiteRights,
  SocialIcons,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterColumn>
            {/* column1 */}
            <FooterLinkGroup>
              <FooterLinkTitle>About xToken</FooterLinkTitle>
              <FooterLink href="//docs.xtoken.market/" target="_blank">
                What is xToken? <br />
                (Official Documentation)
              </FooterLink>
              <FooterLink
                href="//gov.xtoken.cafe/t/xtoken-strategic-update-lending-l2-leverage/204"
                target="_blank"
              >
                L2 Strategic Update
              </FooterLink>
              <FooterLink href="//defipulse.com/xtoken" target="_blank">
                Overview by DeFi Pulse
              </FooterLink>
              <FooterLink
                href="//docs.xtoken.market/misc/investors"
                target="_blank"
              >
                Investors
              </FooterLink>
              <FooterLink
                href="//docs.xtoken.market/getting-started/untitled"
                target="_blank"
              >
                FAQ
              </FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinkTitle>Use xToken</FooterLinkTitle>
              <FooterLink href="//xtoken.market" target="_blank">
                Official Website
              </FooterLink>
              <FooterLink
                href="//xtoken.market/app/invest/native"
                target="_blank"
              >
                xAsset Staking
              </FooterLink>
              <FooterLink
                href="//xtoken.market/app/invest/liquidity-strategies"
                target="_blank"
              >
                Stable Coin LP
              </FooterLink>
              <FooterLink
                href="//xtoken.market/app/portfolio/x-tokens"
                target="_blank"
              >
                Manage your Holdings
              </FooterLink>
              <FooterLink href="//gov.xtoken.cafe/" target="_blank">
                Governance (with XTK)
              </FooterLink>
            </FooterLinkGroup>
          </FooterColumn>
          <FooterColumn>
            {/* column2 */}
            <FooterLinkGroup>
              <FooterLinkTitle>About the $XTK Coin</FooterLinkTitle>
              <FooterLink
                href="//medium.com/xtoken/xtk-is-live-41524c85f0e1"
                target="_blank"
              >
                Tokenomics Paper
              </FooterLink>
              <FooterLink
                href="//xtoken.cafe/app/multi-staking"
                target="_blank"
              >
                MultiStake your XTK
              </FooterLink>
              <FooterLink
                href="//www.coingecko.com/en/coins/xtoken"
                target="_blank"
              >
                CoinGecko
              </FooterLink>
              <FooterLink
                href="//coinmarketcap.com/currencies/xtoken/"
                target="_blank"
              >
                CoinMarketCap
              </FooterLink>
              <FooterLink
                href="//etherscan.io/token/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb"
                target="_blank"
              >
                XTK Contract Address <br /> (Etherscan)
              </FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinkTitle>Major Hype</FooterLinkTitle>
              <FooterLink
                href="//twitter.com/Bancor/status/1386789670349066242?s=20"
                target="_blank"
              >
                Bancor
              </FooterLink>
              <FooterLink
                href="//twitter.com/kaiynne/status/1378122895784767489?s=20"
                target="_blank"
              >
                Synthetix Founder
              </FooterLink>
              <FooterLink
                href="//newsletter.banklesshq.com/p/how-to-automate-your-staking-rewards"
                target="_blank"
              >
                Bankless Founder
              </FooterLink>
              <FooterLink
                href="//twitter.com/ChainLinkGod/status/1431369037351571460"
                target="_blank"
              >
                @ChainLinkGod
              </FooterLink>
              <FooterLink
                href="//twitter.com/arbitrum/status/1458533578866929665?s=20"
                target="_blank"
              >
                Arbitrum
              </FooterLink>
            </FooterLinkGroup>
          </FooterColumn>
        </FooterLinksContainer>
        <SocialMediaLinks>
          <SocialMediaWrap>
            <Logos src={XtkLogo} alt="xToken" />
            <WebsiteRights>
              Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialLink
                href="//twitter.com/xtokenmarket"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="//discord.com/invite/K9kSYJa"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialLink>
              <SocialLink
                href="//medium.com/xtoken"
                target="_blank"
                aria-label="Medium"
              >
                <FaMedium />
              </SocialLink>
              <SocialLink
                href="//github.com/xtokenmarket"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="//www.reddit.com/r/xToken_Official/"
                target="_blank"
                aria-label="Reddit"
              >
                <FaReddit />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaLinks>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
