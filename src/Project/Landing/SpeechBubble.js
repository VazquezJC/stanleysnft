import styled from 'styled-components';

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

const SpeechBubble = ({ text, randomDelay, isVisible }) => {
  return (
    <Container randomDelay={randomDelay} isVisible={isVisible}>
      <Upper>
        <Left>
          <img src={teamFrameSpeechTopLeft} alt="" />
          <MiddleLeft />
          <img src={teamFrameSpeechBottomLeft} alt="" />
        </Left>
        <Middle>
          <MiddleTop />
          <MiddleText>{text}</MiddleText>
          <MiddleBottom />
        </Middle>
        <Right>
          <img src={teamFrameSpeechTopRight} alt="" />
          <MiddleRight />
          <img src={teamFrameSpeechBottomRight} alt="" />
        </Right>
      </Upper>
      <Bottom src={teamFrameSpeechBottom} alt="" />
    </Container>
  );
};

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

const TopLeft = styled.img``;
const TopRight = styled.img``;

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
  position: relative;
  top: -6px;
`;

const Container = styled.div`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? '0' : '10px')});
  transition: opacity 0.3s ${props => (isMobileOnly ? '1.1' : props.randomDelay)}s linear,
    transform 0.6s ${props => (isMobileOnly ? '0.9' : props.randomDelay)}s cubic-bezier(0.26, 0.67, 0.48, 0.91);

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
    width: 80vw;
  }
`;

export default SpeechBubble;
