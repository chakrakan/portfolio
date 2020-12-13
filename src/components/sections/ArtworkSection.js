import React from "react"
import styled, { keyframes } from "styled-components"
import ArtworkWaveBackground from "../backgrounds/ArtworkWaveBackground"
import { themes } from "../styles/ColorStyles"
import { H1, BodyMain } from "../styles/TextStyles"

export default function ArtworkSection() {
  return (
    <>
      <Wrapper>
        <ArtworkWaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              <span>Artwork</span>
            </Title>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const animation = keyframes`
 from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
 to  { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  overflow: hidden;
  min-height: 900px;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* temp 250 until content added */
  padding: 250px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 40px;
  }
`

const Description = styled(BodyMain)``
