import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import { font, color } from 'shared/styles';
import { useInView } from 'react-intersection-observer';

import photoBorder from 'App/assets/images/photo_border2.png';
import backgroundRiver from 'App/assets/images/section2_background2.png';
import backgroundWhiteHouse from 'App/assets/images/section_background_whitehouse.png';
import border from 'App/assets/images/border.png';
import phone from 'App/assets/images/phone2.png';
import qr from 'App/assets/images/qr.jpg';
import repeatBg from 'App/assets/images/repeat-bg.png';

import qrScan from 'App/assets/images/qrscan.png';
import cameraFlash from 'App/assets/images/cameraflash.png';
import starMedium from 'App/assets/images/star-medium.png';
import starSmall from 'App/assets/images/star-small.png';

import eiffel from 'App/assets/images/background-eiffel.png';
import stonehenge from 'App/assets/images/background-stonehenge.png';
import kremlin from 'App/assets/images/background-kremlin.png';
import whitehouse from 'App/assets/images/background-whitehouse.png';

import ufo from 'App/assets/images/ufo.png';

import mapLeft from 'App/assets/images/map-left2.png';
import mapMiddle from 'App/assets/images/map-middle2.png';
import mapRight from 'App/assets/images/map-right2.png';

import starsSmall from 'App/assets/images/stars-small.png';
import starsMedium from 'App/assets/images/stars-medium.png';
import starsLarge from 'App/assets/images/stars-large.png';
import section2bg from 'App/assets/images/section2-bg-gradient.png';

import mapLeftBottom from 'App/assets/images/map-bottom-left.png';
import mapRightBottom from 'App/assets/images/map-bottom-right.png';
import mapMiddleBottom from 'App/assets/images/map-bottom-middle.png';

import filmStripEdge from 'App/assets/images/film-strip.png';

import checkBox1 from 'App/assets/images/checkbox1.png';

import roadmapWithoutUfo from 'App/assets/images/roadmap_0_without_ufo.png';

import newStanley1 from 'App/assets/images/Stanley_hippo-boy_1.png';
import newStanley2 from 'App/assets/images/Stanley_hippo-boy_2.png';
import newStanley3 from 'App/assets/images/Stanley_hippo-boy_3.png';
import newStanley4 from 'App/assets/images/Stanleys_croc_1.png';
import newStanley5 from 'App/assets/images/Stanleys_croc_2.png';
import newStanley6 from 'App/assets/images/Stanleys_croc_3.png';
import dice from 'App/assets/images/roadmap_dice.png';

import Navigation from 'Project/Navigation';

import { Fragment } from 'react';

import Profile from 'Project/Landing/Profile';
import Title from 'Project/Title';
import {
  section1,
  section2_column1,
  section2_column2,
  section3_column1_roadmapExplainer,
  section3_column1_initialList,
  section3_column1_tbdList,
  section3_column2_rarityExplainer,
  section3_column2_traitsList,
  team,
  footer,
} from 'data/LandingPageText';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const LandingPreview = () => {
  const [stanleyIndex, setStanleyIndex] = useState(0);
  const [stanleyBackgroundIndex, setStanleyBackgroundIndex] = useState(getRandomInt(3));

  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [stanley2Ref, stanley2InView] = useInView({
    threshold: 0.55,
    triggerOnce: true,
  });

  const [section2Paragaraph1Ref, section2Paragaraph1InView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [section2Paragaraph2Ref, section2Paragaraph2InView] = useInView({
    threshold: 0.55,
    triggerOnce: true,
  });

  const [section2backgroundRef, section2backgroundInView] = useInView({
    threshold: 0.85,
    triggerOnce: true,
  });

  const [roadmapRef, roadmapInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  const [roadmapExplainerRef, roadmapExplainerInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const [roadmapList1Ref, roadmapList1InView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  const [roadmapList2Ref, roadmapList2InView] = useInView({
    threshold: 0.65,
    triggerOnce: true,
  });

  const [rarityRef, rarityInView] = useInView({
    threshold: 0.65,
    triggerOnce: true,
  });

  const [rivermapRef, rivermapInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  const stanleysHippos = [newStanley1, newStanley2, newStanley3];
  const stanleysCrocs = [newStanley4, newStanley5, newStanley6];
  const stanleysBackgrounds = [eiffel, stonehenge, kremlin, whitehouse];

  useEffect(() => {
    let stanleyTimer;
    stanleyTimer = setTimeout(() => {
      if (stanleyIndex < 2) {
        setStanleyIndex(stanleyIndex + 1);
      } else {
        setStanleyIndex(0);
      }
    }, 2000);
    return () => clearTimeout(stanleyTimer);
  }, [stanleyIndex]);

  return (
    <>
      <Navigation />
      <Wrapper>
        <Container>
          <Section1 name="intro">
            <WhiteHouse inView={titleInView} src={stanleysBackgrounds[stanleyBackgroundIndex]} />
            <AlignTitle inView={titleInView}>
              <Title />
            </AlignTitle>
            <StanleyAvatarFloat1 inView={titleInView} src={stanleysHippos[stanleyIndex]} alt="" />
            <TextWrap1 ref={titleRef} inView={titleInView} dangerouslySetInnerHTML={{ __html: section1 }} />
          </Section1>
          <PhotoLineupContainer>
            <PhotoBorderImg src={photoBorder} />
            <FilmStripTop src={filmStripEdge} alt="" />
            <FilmStripBottom src={filmStripEdge} alt="" />
          </PhotoLineupContainer>
          <Section2 name="who">
            <LandscapeRiver src={backgroundRiver} ref={section2backgroundRef} inView={section2backgroundInView} />
            <Section2Organizer>
              <TextWrap2Section
                ref={section2Paragaraph1Ref}
                inView={section2Paragaraph1InView}
                dangerouslySetInnerHTML={{ __html: section2_column1 }}
              />
              <TextWrap2Section2
                ref={section2Paragaraph2Ref}
                inView={section2Paragaraph2InView}
                dangerouslySetInnerHTML={{ __html: section2_column2 }}
              />
              <StanleyAvatarFloat2 inView={stanley2InView} ref={stanley2Ref} src={stanleysCrocs[stanleyIndex]} alt="" />
            </Section2Organizer>
          </Section2>
          <Border2 src={border} />
          <Section4>
            <Wrap4 name="roadmap">
              <Roadmap ref={roadmapRef} inView={roadmapInView}>
                <MapContainer>
                  <LeftMap />
                  <MapContents>
                    <RoadmapExplainer
                      ref={roadmapExplainerRef}
                      inView={roadmapExplainerInView}
                      dangerouslySetInnerHTML={{ __html: section3_column1_roadmapExplainer }}
                    />
                    <RoadmapLists>
                      <InitialList
                        ref={roadmapList1Ref}
                        inView={roadmapList1InView}
                        dangerouslySetInnerHTML={{ __html: section3_column1_initialList }}
                      />
                      <TBDList
                        ref={roadmapList2Ref}
                        inView={roadmapList2InView}
                        dangerouslySetInnerHTML={{ __html: section3_column1_tbdList }}
                      ></TBDList>
                    </RoadmapLists>
                  </MapContents>
                  <RightMap />
                </MapContainer>
                <MapBottom>
                  <LeftMapBottom />
                  <MiddleMapBottom />
                  <RightMapBottom />
                </MapBottom>
              </Roadmap>
              <Rarity ref={rarityRef} inView={rarityInView}>
                <Dice src={dice} />
                <RarityExplainer dangerouslySetInnerHTML={{ __html: section3_column2_rarityExplainer }} />
                <RarityList dangerouslySetInnerHTML={{ __html: section3_column2_traitsList }}></RarityList>
              </Rarity>
            </Wrap4>
            <BackgroundGradient src={repeatBg} />
            {/* <Parallax styleInner={{ position: 'absolute', bottom: '30px', right: 0 }} y={['-5%', '5%']}>
              <StarsSmallScroll />
            </Parallax>

            <Parallax styleInner={{ position: 'absolute', bottom: '10px', left: 0 }} y={['-20%', '35%']}>
              <StarsMediumScroll />
            </Parallax> */}
          </Section4>
          <RoadmapWrapper ref={rivermapRef}>
            <RoadmapMap inView={rivermapInView} src={roadmapWithoutUfo} />
            <UfoImage inView={rivermapInView} src={ufo} alt="" />
          </RoadmapWrapper>
          <Border2 src={border} />
          <Section6>
            <WhoContent>
              {/* <QuestionImg src={headerQuestion} /> */}
              <Header name="team">Meet the Team</Header>
              <Profiles>
                <UpperProfiles>
                  <Profile person={team.littlesuitcase} />
                  <Profile person={team.colorsoftheworld} />
                </UpperProfiles>
                <LowerProfiles>
                  <Profile person={team.chivas} />
                  <Profile person={team.apura} />
                </LowerProfiles>
              </Profiles>
            </WhoContent>
          </Section6>
          <Footer dangerouslySetInnerHTML={{ __html: footer }} />
        </Container>
      </Wrapper>
    </>
  );
};

const RoadmapWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  background-color: #7f8aa2;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ufoAnimation = keyframes`
  0% { top: 0px; }
  50% { top: 10px; }
  100% { top: 0px;}
`;

const UfoImage = styled.img`
  position: absolute;
  right: 23%;

  transform: translateY(${props => (props.inView ? 0 : '50px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  width: clamp(135px, 13.5vw, 236px);
  top: 0;
  z-index: 6000;
  animation: ${ufoAnimation} 4s ease-in-out infinite;
`;

const animatesSmallStarsHorizontal = keyframes`
  from { background-position: 0px 0;  }
  to { background-position: -1650px 0; }
`;

const animatesMediumStarsHorizontal = keyframes`
  from { background-position: 0px 0;  }
  to { background-position: -1650px 0; }
`;

const animeSmallStarsPulse = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
`;

const animateMediumStarsPulse = keyframes`
  0% { opacity: 0.7;  }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

const StarsSmallScroll = styled.div`
  background: url(${starsSmall});
  width: 1650px;
  height: 158px;
  animation: ${animatesSmallStarsHorizontal} 500s linear infinite, ${animeSmallStarsPulse} 1s linear infinite;
  background-repeat: repeat-x;
`;

const StarsMediumScroll = styled.div`
  background: url(${starsMedium});
  width: 1650px;
  height: 158px;
  animation: ${animatesMediumStarsHorizontal} 400s linear infinite, ${animateMediumStarsPulse} 2s linear infinite;
  background-repeat: repeat-x;
`;

const FilmStrip = styled.img`
  z-index: 900;
  position: absolute;
`;

const FilmStripTop = styled(FilmStrip)`
  top: -20px;
  left: 0;
`;
const FilmStripBottom = styled(FilmStrip)`
  transform: scaleY(-1);
  bottom: -20px;
  left: 0;
`;

const PhotoLineupContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StarsSmall = styled.img`
  width: auto;
  height: auto;
  z-index: 200;
`;

const StarsMedium = styled.img`
  width: auto;
  height: auto;
  z-index: 200;
`;

const StarsLarge = styled.img`
  width: auto;
  height: auto;
  z-index: 200;
`;

const BackgroundGradient = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
`;

const ThePhone = styled.div`
  position: relative;
`;

const QRPhoneLayer = styled.div``;

const QRScan = styled.img`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;

const MiddleMapBottom = styled.div`
  background: url(${mapMiddleBottom});

  width: 100%;
`;

const MapBottom = styled.div`
  display: flex;
  width: 100%;
  height: 172px;
`;

const LeftMapBottom = styled.div`
  min-width: 143px;

  height: 172px;
  background-repeat: no-repeat;

  background: url(${mapLeftBottom});
  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightMapBottom = styled.div`
  background-repeat: no-repeat;
  height: 172px;
  min-width: 110px;
  background: url(${mapRightBottom});

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LeftMap = styled.div`
  min-width: 143px;
  background: url(${mapLeft});

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightMap = styled.div`
  min-width: 110px;
  background: url(${mapRight});

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MapContainer = styled.div`
  display: flex;
`;

const MapContents = styled.div`
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  padding-right: 25px;

  width: 100%;
  padding-top: 120px;
  padding-bottom: 30px;

  background: url(${mapMiddle});

  background-repeat: no-repeat;

  @media (max-width: 1280px) {
    padding-left: 45px;
    padding-right: 45px;
  }

  @media (max-width: 1024px) {
    padding-left: 8vw;
    row-gap: 20px;

    padding-right: 8vw;
  }
`;

const MapBackgroundWrapper = styled.div`
  position: absolute;
  top: -150px;
  right: 0;
  width: 962px;
  z-index: 5;

  @media (max-width: 1650px) {
    width: 862px;
  }
`;

const MapBackground = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialLink = styled.a`
  padding: 3px;
`;

const SocialIcons = styled.div`
  margin-left: 4px;
  position: absolute;
  display: flex;
  top: -3px;
  left: 0;
`;

const MobileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const SocialsContainerMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    margin-top: 8px;
    display: flex;
  }
`;

const Identifier = styled.div`
  display: flex;
`;

const SocialsContainer = styled.div`
  position: relative;
`;

const UpperProfiles = styled.div`
  display: flex;
  column-gap: 6%;

  @media (max-width: 1280px) {
    column-gap: 7%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LowerProfiles = styled.div`
  display: flex;
  column-gap: 6%;

  @media (max-width: 1280px) {
    column-gap: 7%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  em {
    font-style: italic;
    font-weight: 600;
  }

  ${font.regular};
  z-index: 15;
  ${font.size(20)}
  line-height: 32px;
  @media (max-width: 1024px) {
    ${font.size(18)};
  }
  @media (max-width: 480px) {
    ${font.size(18)};
  }
`;

const TextSpecial = styled(Text)`
  position: relative;
  left: -9vw;
`;

const QR = styled.div`
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  z-index: 15;
`;

const QRText = styled.div`
  position: absolute;
  z-index: 2000;
  width: clamp(110px, 14vw, 175px);
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  ${font.regular};
  ${font.size(18)};
  color: #000;
  line-height: 22px;
  color: #fff;

  @media (max-width: 1280px) {
    ${font.size(16)};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Section2Organizer = styled.div`
  display: flex;
  margin-left: 8vw;
  margin-right: 6vw;
  gap: 3vw;
  padding-left: clamp(50px, 100vw / 5, 450px);

  @media (max-width: 1280px) {
    padding-left: 0;
    margin-right: 8vw;
    flex-direction: column;
  }
`;

const AlignTitle = styled.div`
  height: inherit;
  position: relative;
  transform: translateY(${props => (props.inView ? '270px' : '260px')}) scale(${props => (props.inView ? '1.6' : '1.4')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.2s 0.35s linear, transform 0.7s 0.25s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1650px) {
    transform: translateY(${props => (props.inView ? '40px' : '30px')}) scale(${props => (props.inView ? '1.3' : '1.2')});
    transform: scale(1);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LandscapeRiver = styled.img`
  position: absolute;
  filter: blur(18px);
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  transform: translateY(${props => (props.inView ? 0 : '50px')}) scaleX(-1);
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    opacity: 0.5;
  }

  @media (max-width: 1024px) {
    opacity: 0.3;
  }
`;

const RoadmapMap = styled.img`
  width: 100%;
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s 0.3s linear, transform 1s 0.3s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const Section5 = styled.section`
  position: relative;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const WhiteHouse = styled.img`
  position: absolute;
  bottom: 8vw;
  right: 2vw;
  filter: blur(2.5px);
  transition: opacity 0.5s ease-in;

  transform: translateY(${props => (props.inView ? '0px' : '-60px')}) scale(2);
  opacity: ${props => (props.inView ? 0.6 : 0)};
  transition: opacity 0.6s 2.7s linear, transform 0.6s 2.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    opacity: 0.5;
  }

  @media (max-width: 1024px) {
    display: none;
    opacity: 0.3;
  }
`;

const Stars = styled.img`
  position: absolute;
  bottom: 0;
  width: clamp(1200px, 100%, 100%);
  height: auto;
`;

const Header = styled.h2`
  position: relative;
  ${font.header};
  z-index: 5;
  font-weight: 500;
  line-height: 48px;
  ${font.size(36)}
  @media (max-width: 480px) {
    ${font.size(28)};
  }
`;

const WhoAreWe = styled(Header)`
  margin-right: 10vw;

  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

const WhoContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  max-width: 1250px;
  @media (max-width: 1024px) {
    align-items: flex-start;
    gap: 0;
  }
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 1024px) {
    row-gap: 0;
  }
`;

const Name = styled.div`
  display: flex;
  position: relative;
  ${font.size(20)}
  margin-bottom: 6px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NameMobile = styled.div`
  display: none;

  ${font.size(22)};
  @media (max-width: 480px) {
    margin-bottom: 4px;
    display: flex;
  }
`;

const AliasMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
  }
`;

const Description = styled.div`
  margin-left: 20px;
  font-style: italic;
  line-height: 24px;
  ${font.size(16)};

  @media (max-width: 1024px) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    margin-left: 15px;
  }
`;

const QuestionImg = styled.img`
  position: absolute;
  width: 80px;
  height: auto;
  top: -70px;
  left: 210px;

  @media (max-width: 1024px) {
    width: 60px;
    position: absolute;
    right: 50px;
    top: 30px;
    height: auto;
  }
`;

const Section6 = styled.div`
  border-radius: 0 0 34px 34px;
  position: relative;
  padding-left: 8vw;
  padding-right: 8vw;
  padding-top: clamp(70px, 12vw, 235px);
  padding-bottom: clamp(80px, 14vw, 310px);
  gap: 4vw;
  display: flex;
  background-color: ${color.background['container']};

  width: 100%;

  @media (max-width: 1024px) {
    border-radius: 0;
  }
`;

const Footer = styled.footer`
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  color: #7d8ab2;
  margin-bottom: 30px;
  p {
    ${font.size(15)};
    line-height: 22px;
  }

  @media (max-width: 1024px) {
    p {
      ${font.size(15)};
      line-height: 22px;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

const Map = styled.img`
  position: absolute;
  height: auto;
  left: 205px;
  top: -95px;
  width: clamp(100px, 10vw, 170px);

  @media (max-width: 1280px) {
    top: -55px;
  }

  @media (max-width: 1024px) {
    top: -45px;
  }

  @media (max-width: 480px) {
    top: -35px;
    left: 160px;
  }
`;

const Dice = styled.img`
  position: absolute;
  height: auto;
  left: 205px;
  top: -95px;
  width: clamp(100px, 10vw, 170px);

  @media (max-width: 1280px) {
    top: -55px;
  }

  @media (max-width: 1024px) {
    top: -45px;
  }

  @media (max-width: 480px) {
    top: -35px;
    left: 160px;
  }
`;

const FloatingTBA = styled.img`
  position: absolute;
  left: -31px;
  top: 9px;
  width: 15px;
  height: auto;
`;

const FloatingTick = styled.img`
  position: absolute;
  width: 22px;
  left: -30px;
  top: 5px;
  height: auto;
`;

const RarityItem = styled.li`
  ${font.size(16)};
`;
const RarityList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    &:before {
      content: '- ';
    }

    position: relative;
    margin-bottom: 12px;
    margin-left: 10px;
    line-height: 22px;
    ${font.size(16)};
  }

  line-height: 20px;
`;
const RoadmapTBDItem = styled.li`
  position: relative;
  margin-top: 15px;
  ${font.size(16)};
`;
const RoadmapListItem = styled.li`
  position: relative;
  margin-top: 15px;
  margin-left: 20px;
  ${font.size(16)};
`;

const TBDList = styled.ul`
  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  li {
    &:before {
      content: '- ';
    }

    position: relative;
    margin-bottom: 12px;
    margin-left: 10px;
    line-height: 22px;
    ${font.size(16)};
  }

  width: 40%;
  @media (max-width: 768px) {
    width: auto;
  }
`;

//tickInactive
const InitialList = styled.ul`
  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  li {
    &:before {
      position: absolute;
      display: inline-block;
      top: 4px;
      left: -32px;
      content: '';
      background-image: url(${checkBox1});
      background-size: 22px 22px;
      width: 22px;
      height: 22px;
    }

    position: relative;
    margin-bottom: 12px;
    left: 15px;
    margin-left: 10px;
    line-height: 22px;
    ${font.size(16)};
  }

  width: 50%;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 0;

    width: auto;
  }
`;

const RoadmapLists = styled.div`
  position: relative;
  z-index: 5;
  gap: 10%;
  display: flex;
  line-height: 24px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    row-gap: 30px;
    flex-direction: column;
  }
`;

const Wrap4 = styled.div`
  display: flex;
  gap: 5%;

  width: 100%;
  margin-left: 3vw;
  margin-right: 8vw;

  @media (max-width: 1280px) {
    flex-direction: column;
    margin-left: 3vw;
    margin-right: 4vw;
  }

  @media (max-width: 1024px) {
    gap: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Section4 = styled.section`
  width: 100%;
  display: flex;
  z-index: 50;
  padding-bottom: clamp(150px, 13vw, 230px);
  position: relative;
  /* background-image: url(${repeatBg});
  background-position: bottom;
  background-repeat: repeat-x; */
  background-color: #6e91bb;
`;

const RoadmapExplainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const RarityExplainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Roadmap = styled.div`
  position: relative;
  width: 65%;
  color: #000;
  z-index: 150;
  top: -80px;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Rarity = styled.div`
  z-index: 5000;
  position: relative;
  width: 30%;
  top: 200px;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    top: 0;
    margin-left: 5vw;

    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 84vw;
    margin-left: 8vw;
    margin-top: 30px;
    margin-right: 8vw;
  }
`;

const QRImg = styled.img`
  border: 6px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: clamp(110px, 15vw, 205px);
  height: auto;

  @media (max-width: 1024px) {
  }
`;

const PhoneImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Border = styled.img`
  background-color: ${color.background['container']};
`;

const Border2 = styled.img``;

const HeaderList = styled.h2`
  margin-bottom: 10px;
  margin-top: 40px;
  ${font.regular};
  font-weight: 300;
  font-style: italic;
  ${font.size(22)}
  @media (max-width: 480px) {
    ${font.size(20)};
  }
`;

const Italic = styled.em`
  font-style: italic;
  font-weight: 600;
`;

const TextWrap2 = styled.div`
  width: 830px;
  display: flex;
  margin-top: 200px;
  align-self: flex-end;
  gap: 60px;
  z-index: 10;
  margin-right: 9vw;
  margin-left: 9vw;

  @media (max-width: 1150px) {
    margin-top: 15vw;
    width: auto;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    width: auto;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    justify-content: center;
    scroll-snap-type: x proximity;

    gap: 0;
    flex-direction: row;
    justify-content: normal;
    margin-right: auto;

    margin-left: 7%;
  }
`;

const TextWrap3 = styled(TextWrap2)`
  margin-top: 0;
`;

const TextWrap2Section = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? '-30px' : '0')});
  transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const TextWrap2Section2 = styled(TextWrap2Section)`
  transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const TextWrap1 = styled.div`
  position: relative;
  width: clamp(650px, 40vw * 1.1, 650px);
  z-index: 10;

  transform: translateY(${props => (props.inView ? 0 : '30px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.5s 1.45s linear, transform 1s 1.45s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const PhotoBorderImg = styled.img`
  overflow-x: hidden;
  position: relative;
  z-index: 10;
`;

const StanleyAvatarFloat1 = styled.img`
  transform: translateY(${props => (props.inView ? 0 : '50px')}) scaleX(-1);
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.5s 2.3s linear, transform 1.1s 2.3s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  height: auto;
  width: clamp(100px, 95vw / 2.2, 950px);

  @media (max-width: 1280px) {
    width: clamp(200px, 75vw / 2.2, 300px);
  }
`;

const StanleyAvatarFloat2 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;
  height: auto;
  width: clamp(100px, 95vw / 2.2, 950px);
  transform: translateX(${props => (props.inView ? 0 : '-90px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s linear, transform 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    left: 0;
    width: clamp(200px, 75vw / 2.2, 300px);
    position: relative;
    height: auto;
  }
`;

const Container = styled.main`
  h2 {
    position: relative;
    ${font.header};
    margin-bottom: 5px;
    z-index: 5;
    font-weight: 500;
    line-height: 43px;
    ${font.size(36)}

    @media (max-width: 480px) {
      line-height: 42px;
      ${font.size(28)};
    }
  }

  h3 {
    position: relative;
    ${font.header};
    z-index: 5;
    font-weight: 500;
    line-height: 44px;
    ${font.size(26)}
    @media (max-width: 480px) {
      ${font.size(22)};
    }
  }

  em {
    font-style: italic;
    font-weight: 600;
  }

  p {
    letter-spacing: -0.4px;
    ${font.regular};
    z-index: 15;
    ${font.size(23)}
    line-height: 32px;

    @media (max-width: 1650px) {
      ${font.size(22)}
      line-height: 31px;
    }

    @media (max-width: 1024px) {
      ${font.size(18)};
      line-height: 27px;
    }
  }

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1650px;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 94%;
  margin-top: 100px;
  margin-right: 3%;
  margin-left: 3%;

  @media (max-width: 1024px) {
    margin-top: 85px;

    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

const Section1 = styled.section`
  position: relative;
  height: 50vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 8vw;
  padding-right: 8vw;
  background-color: ${color.background['container']};

  border-radius: 34px 34px 0 0;

  padding-bottom: clamp(7vw, 5vw, 250px);

  @media (max-width: 1024px) {
    padding-top: clamp(40px, 14vw, 120px);
    padding-bottom: 25vw;
    border-radius: 0;
  }
`;

const Section2 = styled.section`
  background: url(${section2bg});
  background-repeat: repeat-y;
  background-position: left;
  position: relative;
  padding-top: clamp(60px, 12vw, 190px);
  padding-bottom: clamp(2vw, 12vw, 190px);
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: ${color.background['container']};

  transition: 0.25s ease-out;

  @media (max-width: 480px) {
    padding-bottom: 100px;
  }
`;

const Section3 = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  background-color: ${color.background['container']};
`;

export default LandingPreview;
