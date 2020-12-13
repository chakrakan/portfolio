import React from "react"
import styled from "styled-components"

export default function FooterWaveBackground() {
  return (
    <Wrapper>
      {/* <Wave src="/images/waves/footer-wave1.svg" style={{ top: "100px" }} />
      <Wave src="/images/waves/footer-wave2.svg" style={{ top: "150px" }} /> */}
      <BottomWave src="/images/waves/footer-wave3.svg" style={{ top: "0px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/intro-wave3-dark.svg");
  }
`
