import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup-nodejs" />
      <div className="mockup-react" />
      <div className="mockup-javascript" />
      <div className="mockup-illustration" />
      <div className="mockup-typescript" />
      <div className="mockup-python" />
      <div className="mockup-cpp" />
      <div className="mockup-java" />
      <div className="mockup-csharp" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;
  top: 10px;
  left: 100px;
  perspective-origin: left bottom;
  transform-style: flat;

  @media (max-width: 768px) {
    transform: scale(0.7);
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
      transform: translate(-40px, -20px);
    }
    &.mockup-typescript {
      transition-delay: 0.2s;
      transform: translate(-40px, -30px);
    }
    &.mockup-nodejs {
      transition-delay: 0.2s;
      transform: translate(-60px, -30px);
    }

    &.mockup-javascript {
      transition-delay: 0.2s;
      transform: translate(-20px, -20px);
    }
    &.mockup-python {
      transition-delay: 0.2s;
      transform: translate(-10px, -40px);
    }
    &.mockup-illustration {
      transition-delay: 0s;
    }
    &.mockup-java {
      transition-delay: 0.1s;
      transform: translate(10px, 30px);
    }
    &.mockup-cpp {
      transition-delay: 0.2s;
      transform: translate(20px, 30px);
    }
    &.mockup-csharp {
      transition-delay: 0.2s;
      transform: translate(20px, 30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup-react {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50px;
    top: 30px;

    background: url("/images/logos/react-logo.svg"), rgba(23, 12, 61, 0.5);
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
    width: 120px;
    height: 100px;
    left: 150px;
    top: 10px;

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

  .mockup-javascript {
    position: absolute;
    width: 80px;
    height: 70px;
    left: 70px;
    top: 70px;

    background: url("/images/logos/js-logo.svg"), rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-nodejs {
    position: absolute;
    width: 100px;
    height: 80px;
    left: 100px;
    top: -20px;

    background: url("/images/logos/nodejs-logo.svg"), rgba(23, 142, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-python {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50px;
    top: 350px;

    background: url("/images/logos/python-logo.svg"), rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    border-radius: 16px;
  }

  .mockup-illustration {
    position: absolute;
    width: 570px;
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
    width: 140px;
    height: 130px;
    left: 540px;
    top: 362px;

    background: url("/images/logos/java-logo.svg"), rgba(23, 12, 61, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }

  .mockup-cpp {
    position: absolute;
    width: 140px;
    height: 130px;
    left: 620px;
    top: 420px;

    background: url("/images/logos/cpp-logo.svg"), rgba(39, 20, 62, 0.2);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);

    border-radius: 16px;
  }

  .mockup-csharp {
    position: absolute;
    width: 140px;
    height: 130px;
    left: 670px;
    top: 330px;

    background: url("/images/logos/csharp-logo.svg"), rgba(39, 20, 62, 0.2);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);

    border-radius: 16px;
  }
`
