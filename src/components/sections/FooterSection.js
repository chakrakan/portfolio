import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { SmallText } from "../styles/TextStyles"

export default function FooterSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <FooterText>
              Site made by{" "}
              <StyledLink target="_blank" href="https://github.com/chakrakan">
                @chakrakan
              </StyledLink>
              .
            </FooterText>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const StyledLink = styled.a`
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`

const animation = keyframes`
 from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
 to  { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  margin-top: -70px;
  padding: 0 30px;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* temp 250 until content added */
  /* padding: 20px 0px; */
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

const FooterText = styled(SmallText)`
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
  color: ${themes.light.text1};
`
