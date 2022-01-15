import styled from 'styled-components';
import { forwardRef, useRef } from 'react';
import SpeechBubble from 'Project/Landing/SpeechBubble';
import frameTop from 'App/assets/images/team-frame-top.png';
import frameBottom from 'App/assets/images/team-frame-bottom.png';
import frameLeft from 'App/assets/images/team-frame-left.png';
import frameRight from 'App/assets/images/team-frame-right.png';
import frameGlass from 'App/assets/images/team-frame-glass.png';
import nameplateBorderLeft from 'App/assets/images/team-sign-left.png';
import nameplateMiddleBg from 'App/assets/images/team-sign-bg.png';
import nameplateBorderRight from 'App/assets/images/team-sign-right.png';
import frameSocialBg from 'App/assets/images/team-frame-social.png';

import socialTwitter from 'App/assets/images/social_twitter.png';
import socialInstagram from 'App/assets/images/social_instagram.png';
import socialLinkedin from 'App/assets/images/social_linkedin.png';

const TeamMemberFrame = forwardRef(({ person, color, frameOrientations, portrait, name, description, isVisible }, ref) => {
  return (
    <Wrapper>
      <FrameContainer ref={ref} isVisible={isVisible}>
        <TeamImgContainer color={color}>
          <FrameSuitcase src={portrait} alt="" />
          <FrameGlassFront src={frameGlass} alt="" />
        </TeamImgContainer>
        <FrameLeft degree={frameOrientations.left} src={frameLeft} alt="" />
        <FrameRight degree={frameOrientations.right} src={frameRight} alt="" />
        <FrameTop degree={frameOrientations.top} src={frameTop} alt="" />
        <FrameBottom degree={frameOrientations.bottom} src={frameBottom} alt="" />
        <SpeechBubble isVisible={isVisible} text={description} />
        <SocialFrameContainer>
          {person.linkedin.length > 0 && (
            <Social>
              <SocialLink href={person.linkedin}>
                <SocialIcon src={socialLinkedin} alt="" />
                &nbsp;Linkedin
              </SocialLink>
            </Social>
          )}
          {person.twitter.length > 0 && (
            <Social>
              <SocialLink href={person.twitter}>
                <SocialIcon src={socialTwitter} alt="" />
                &nbsp;Twitter
              </SocialLink>
            </Social>
          )}
          {person.instagram.length > 0 && (
            <Social>
              <SocialLink href={person.instagram}>
                <SocialIcon src={socialInstagram} alt="" />
                &nbsp;Instagram
              </SocialLink>
            </Social>
          )}
        </SocialFrameContainer>
      </FrameContainer>
      <TeamNameplate isVisible={isVisible}>
        <TeamNameplateStartcap src={nameplateBorderLeft} alt="" />
        <TeamNameplateText>{name}</TeamNameplateText>
        <TeamNameplateEndcap src={nameplateBorderRight} alt="" />
      </TeamNameplate>
    </Wrapper>
  );
});

const SocialIcon = styled.img`
  width: 18px;
  margin-bottom: 2px;
  height: 18px;
`;

const SocialLink = styled.a`
  margin-top: 5px;
  font-size: 15px;
  color: #2b1709;
  font-weight: 600;
  padding: 3px;
  display: flex;
  align-items: center;
`;

const SocialFrameContainer = styled.div`
  position: absolute;
  bottom: 55px;
  right: -30px;

  @media (max-width: 480px) {
    right: 0;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${frameSocialBg});
  height: 57px;
  width: 125px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 120px;
`;

const FrameGlassFront = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TeamNameplateText = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  text-align: center;
  background: url(${nameplateMiddleBg});
  font-family: 'Sedgwick Ave', 'cursive';
  font-size: 20px;
  text-shadow: 1px 2px #a95d2b;
  top: 38px;
  color: #2b1709;
  height: 89px;
`;

const TeamNameplateStartcap = styled.img``;
const TeamNameplateEndcap = styled.img``;

const TeamNameplate = styled.div`
  max-width: 300px;
  width: 100%;
  justify-content: center;
  display: flex;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? '0' : '30px')});
  transition: opacity 0.6s 1.1s linear, transform 0.8s 1.1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const TeamImgContainer = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
  background-color: ${props => props.color};
  top: 50px;
  left: 40px;
`;

const FrameSuitcase = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Frame = styled.img`
  position: absolute;
`;

const FrameTop = styled(Frame)`
  top: 15px;
  transform: rotate(${props => props.degree + 'deg'});
`;
const FrameBottom = styled(Frame)`
  bottom: 0;
  right: 20px;
  transform: rotate(${props => props.degree + 'deg'});
`;
const FrameLeft = styled(Frame)`
  left: 0;
  transform: rotate(${props => props.degree + 'deg'});
`;
const FrameRight = styled(Frame)`
  right: 10px;
  transform: rotate(${props => props.degree + 'deg'});
`;

const FrameContainer = styled.div`
  position: relative;
  width: 316px;
  height: 361px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? '0' : '70px')});
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

export default TeamMemberFrame;
