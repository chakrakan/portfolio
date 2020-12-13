import React from "react"
import styled from "styled-components"

export default function ArtworkWaveBackground() {
  return (
    <Wrapper>
      <Wave src="/images/waves/artwork-wave1.svg" style={{ top: "200px" }} />
      <Wave src="/images/waves/artwork-wave2.svg" style={{ top: "150px" }} />
      <Wave src="/images/waves/artwork-wave3.svg" style={{ top: "300px" }} />
      <BottomWave
        src="/images/waves/artwork-wave4.svg"
        style={{ top: "630px" }}
      />
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
