import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

import teamFrameSpeechMiddleLeft from 'App/assets/images/frame-speech-middle-left.png';
import teamFrameSpeechMiddleRight from 'App/assets/images/frame-speech-middle-right.png';
import teamFrameSpeechTopLeft from 'App/assets/images/frame-speech-top-left.png';
import teamFrameSpeechTopRight from 'App/assets/images/frame-speech-top-right.png';
import teamFrameSpeechTopBg from 'App/assets/images/frame-speech-top-bg.png';
import teamFrameSpeechBottomBg from 'App/assets/images/frame-speech-bottom-bg.png';
import teamFrameSpeechBottom from 'App/assets/images/frame-speech-bottom.png';
import teamFrameSpeechBottomLeft from 'App/assets/images/frame-speech-bottom-left.png';
import teamFrameSpeechBottomRight from 'App/assets/images/frame-speech-bottom-right.png';
import { isMobileOnly } from 'react-device-detect';

const SpeechBubble = ({ text, type, randomDelay, isVisible }) => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isVisible) {
      let timer;
      timer = setTimeout(() => setIsTyping(false), isMobileOnly ? 1500 : randomDelay * 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <Container randomDelay={randomDelay} isVisible={isVisible}>
      <Upper>
        <Left>
          <Image src={teamFrameSpeechTopLeft} alt="" />
          <MiddleLeft />
          <Image src={teamFrameSpeechBottomLeft} alt="" />
        </Left>
        <Middle>
          <MiddleTop />
          <MiddleText>
            {isTyping ? (
              <WrapLoadingAnimation>
                <TextLoading />
              </WrapLoadingAnimation>
            ) : (
              text
            )}
          </MiddleText>
          <MiddleBottom />
        </Middle>
        <Right>
          <Image src={teamFrameSpeechTopRight} alt="" />
          <MiddleRight />
          <Image src={teamFrameSpeechBottomRight} alt="" />
        </Right>
      </Upper>
      {type === 0 && <Bottom src={teamFrameSpeechBottom} alt="" />}
    </Container>
  );
};

const dotsAnimated = keyframes`
  0% {
    background-color: darkgray;
  }
  50%,
  100% {
    background-color: #ebebeb;
  }
`;

const WrapLoadingAnimation = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;

const TextLoading = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: darkgray;
  color: darkgray;
  animation: ${dotsAnimated} 1s infinite linear alternate;
  animation-delay: 0.5s;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: darkgray;
    color: darkgray;
    animation: ${dotsAnimated} 1s infinite alternate;
    animation-delay: 0s;
  }

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: darkgray;
    color: darkgray;
    animation: ${dotsAnimated} 1s infinite alternate;
    animation-delay: 1s;
  }
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const MiddleBottom = styled.div`
  height: 15px;
  padding-top: 8px;
  background: url(${teamFrameSpeechBottomBg});
  width: 100%;
`;

const MiddleTop = styled.div`
  height: 16px;
  background: url(${teamFrameSpeechTopBg});
  background-repeat: repeat-x;
`;

const Upper = styled.div`
  display: flex;
`;

const Right = styled.div`
  flex-direction: column;
  display: flex;
`;

const MiddleLeft = styled.div`
  background: url(${teamFrameSpeechMiddleLeft});
  width: 15px;
  height: 100%;
`;

const MiddleText = styled.div`
  padding: 10px;
  color: #000;
  background-color: #fff;
  background-repeat: no-repeat;
`;
const MiddleRight = styled.div`
  background: url(${teamFrameSpeechMiddleRight});
  width: 15px;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.img`
  width: auto;
  height: auto;
  position: relative;
  top: -6px;
`;

const Container = styled.div`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? '0' : '15px')}) scale(${props => (props.isVisible ? 1 : 0.92)});
  transition: opacity 0.05s ${props => (isMobileOnly ? '0' : props.randomDelay)}s linear,
    transform 0.05s ${props => (isMobileOnly ? '0' : props.randomDelay)}s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  max-width: 320px;
  width: calc(30vw / 2);
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 270px;
  left: 110px;

  @media (max-width: 1280px) {
    width: calc(40vw / 2);
  }

  @media (max-width: 1024px) {
    width: calc(90vw / 2);
  }

  @media (max-width: 480px) {
    left: 5%;
    bottom: 250px;
    width: 80vw;
  }
`;
// ${props => (isMobileOnly ? '1.1' : props.randomDelay)}s
export default SpeechBubble;
