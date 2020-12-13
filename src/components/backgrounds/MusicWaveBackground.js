import React from "react"
import styled from "styled-components"

export default function MusicWaveBackground() {
  return (
    <Wrapper>
      <Wave src="/images/waves/music-wave1.svg" style={{ top: "80px" }} />
      <Wave src="/images/waves/music-wave4.svg" style={{ top: "340px" }} />
      <BottomWave
        src="/images/waves/intro-wave3.svg"
        style={{ top: "670px" }}
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
