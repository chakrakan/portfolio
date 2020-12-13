import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup-react" />
      <div className="mockup-typescript" />
      <div className="mockup-illustration" />
      <div className="mockup-python" />
      <div className="mockup-java" />
      <div className="mockup-cpp" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  top: -30px;
  left: 50px;
  perspective-origin: left bottom;
  transform-style: flat;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup-react {
      transition-delay: 0.1s;
      transform: translate(-35px, -20px);
    }
    &.mockup-typescript {
      transition-delay: 0.2s;
      transform: translate(0, -40px);
    }
    &.mockup-python {
      transition-delay: 0.2s;
      transform: translate(0, -40px);
    }
    &.mockup-illustration {
      transition-delay: 0s;
    }
    &.mockup-java {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    &.mockup-cpp {
      transition-delay: 0.2s;
      transform: translate(-90px, 30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup-react {
    position: absolute;
    width: 140px;
    height: 120px;
    left: 30px;
    top: 0px;

    background: url("/images/logos/react-logo.svg"),
      radial-gradient(
        218.51% 281.89% at 100% 100%,
        rgba(253, 63, 51, 0.6) 0%,
        rgba(76, 0, 200, 0.6) 45.83%,
        rgba(76, 0, 200, 0.6) 100%
      );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-typescript {
    position: absolute;
    width: 140px;
    height: 120px;
    left: 150px;
    top: -40px;

    background: url("/images/logos/typescript-logo.svg"), rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-python {
    position: absolute;
    width: 140px;
    height: 120px;
    left: 50px;
    top: 250px;

    background: url("/images/logos/python-logo.svg"), rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-illustration {
    position: absolute;
    width: 550px;
    height: 400px;
    left: 120px;
    top: 60px;

    background: url("/images/illustrations/programmer.png"),
      rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup-java {
    position: absolute;
    width: 160px;
    height: 130px;
    left: 394px;
    top: 362px;

    background: url("/images/logos/java-logo.svg"), rgba(30, 20, 62, 0.3);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup-cpp {
    position: absolute;
    width: 160px;
    height: 130px;
    left: 550px;
    top: 402px;

    background: url("/images/logos/cpp-logo.svg"), rgba(39, 20, 62, 0.2);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);

    border-radius: 8px;
  }
`
