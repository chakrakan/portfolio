import React from 'react'
import styled from 'styled-components'

export default function IntroWaveBackground() {
  return (
    <Wrapper>
      <Background />
      <StarWave
        src="/images/waves/stars.svg"
        style={{ top: '0px' }}
        alt="starwave"
      />
      <Wave
        src="/images/waves/intro-wave1.svg"
        style={{ top: '0px' }}
        alt="wave1"
      />
      <Wave
        src="/images/waves/intro-wave2.svg"
        style={{
          top: '380px',
        }}
        alt="wave2"
      />
      <BottomWave
        src="/images/waves/intro-wave3.svg"
        style={{ top: '580px' }}
        alt="wave3"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const StarWave = styled.img`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: repeat;
  z-index: -1;
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
    content: url('/images/waves/intro-wave3-dark.svg');
  }
`

const Background = styled.div`
  position: absolute;
  background: linear-gradient(
    189.16deg,
    rgb(67, 22, 119) 13.57%,
    rgb(144, 118, 231) 98.38%
  );
  width: 100%;
  height: 890px;
  z-index: -1;
`
