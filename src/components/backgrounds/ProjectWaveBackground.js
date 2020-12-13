import React from "react"
import styled from "styled-components"

export default function ProjectWaveBackground() {
  return (
    <Wrapper>
      <Wave src="/images/waves/project-wave1.svg" style={{ top: "100px" }} />
      <Wave src="/images/waves/project-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/project-wave3.svg" style={{ top: "450px" }} />
      <BottomWave
        src="/images/waves/contact-wave6.svg"
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
