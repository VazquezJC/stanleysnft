import styled, { keyframes } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { font, color } from 'shared/styles';
import { useInView } from 'react-intersection-observer';
import { isMobileOnly } from 'react-device-detect';
import Member from 'Project/Landing/Member';
import Navigation from 'Project/Navigation';

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

import photoBorder from 'App/assets/images/photo_border2.png';
import border from 'App/assets/images/border.png';
// import phone from 'App/assets/images/phone2.png';
// import qr from 'App/assets/images/qr.jpg';
import repeatBg from 'App/assets/images/repeat-bg.png';

// import qrScan from 'App/assets/images/qrscan.png';
// import cameraFlash from 'App/assets/images/cameraflash.png';
import star from 'App/assets/images/star.png';

import stanleyHippo1_1024w from 'App/assets/images/stanley-s1-hippoboy-1-1024w.png';
import stanleyHippo1_1280w from 'App/assets/images/stanley-s1-hippoboy-1-1280w.png';
import stanleyHippo1_1650w from 'App/assets/images/stanley-s1-hippoboy-1-1650w.png';
import stanleyHippo2_1024w from 'App/assets/images/stanley-s1-hippoboy-2-1024w.png';
import stanleyHippo2_1280w from 'App/assets/images/stanley-s1-hippoboy-2-1280w.png';
import stanleyHippo2_1650w from 'App/assets/images/stanley-s1-hippoboy-2-1650w.png';
import stanleyHippo3_1024w from 'App/assets/images/stanley-s1-hippoboy-3-1024w.png';
import stanleyHippo3_1280w from 'App/assets/images/stanley-s1-hippoboy-3-1280w.png';
import stanleyHippo3_1650w from 'App/assets/images/stanley-s1-hippoboy-3-1650w.png';

import filmStripEdge from 'App/assets/images/film-strip.png';

import bgEiffelPng from 'App/assets/images/background-eiffel.png';
import bgStonehengePng from 'App/assets/images/background-stonehenge.png';
import bgKremlinPng from 'App/assets/images/background-kremlin.png';
import bgWhitehousePng from 'App/assets/images/background-whitehouse.png';

import stanleyCroc1_1024w from 'App/assets/images/stanley-s2-croc-1-1024w.png';
import stanleyCroc1_1280w from 'App/assets/images/stanley-s2-croc-1-1280w.png';
import stanleyCroc1_1650w from 'App/assets/images/stanley-s2-croc-1-1650w.png';
import stanleyCroc2_1024w from 'App/assets/images/stanley-s2-croc-2-1024w.png';
import stanleyCroc2_1280w from 'App/assets/images/stanley-s2-croc-2-1280w.png';
import stanleyCroc2_1650w from 'App/assets/images/stanley-s2-croc-2-1650w.png';
import stanleyCroc3_1024w from 'App/assets/images/stanley-s2-croc-3-1024w.png';
import stanleyCroc3_1280w from 'App/assets/images/stanley-s2-croc-3-1280w.png';
import stanleyCroc3_1650w from 'App/assets/images/stanley-s2-croc-3-1650w.png';
import bgRiver from 'App/assets/images/section2_background2.png';

import mapLeft from 'App/assets/images/map-left2.png';
import mapMiddle from 'App/assets/images/map-middle2.png';
import mapRight from 'App/assets/images/map-right2.png';
import mapLeftBottom from 'App/assets/images/map-bottom-left.png';
import mapRightBottom from 'App/assets/images/map-bottom-right.png';
import mapMiddleBottom from 'App/assets/images/map-bottom-middle.png';

import dice from 'App/assets/images/roadmap_dice.png';
import checkBox1 from 'App/assets/images/checkbox1.png';

import roadmapAvif_1280w from 'App/assets/images/roadmap-progress-0-1280w.avif';
import roadmapAvif_1650w from 'App/assets/images/roadmap-progress-0-1650w.avif';
import roadmapPng_1280w from 'App/assets/images/roadmap-progress-0-1280w.png';
import roadmapPng_1650w from 'App/assets/images/roadmap-progress-0-1650w.png';
import ufoPng from 'App/assets/images/ufo.png';

import teamSuitcasePng from 'App/assets/images/team-frame-suitcase2.png';
import teamColorsPng from 'App/assets/images/team-frame-colors2.png';
import teamApuraPng from 'App/assets/images/team-frame-apura.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Landing = () => {
  const [stanleyIndex, setStanleyIndex] = useState(getRandomInt(3));
  const stanleyBackgroundIndex = useRef(getRandomInt(4));
  const skipArray = useRef([false, false, false, false, false, false, false, false, false, false, false, false, false]);

  const [titleRef, titleInView] = useInView({
    threshold: isMobileOnly ? 0 : 0.2,
    triggerOnce: true,
  });

  const [landscapeRiverRef, landscapeRiverInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [stanley2Ref, stanley2InView] = useInView({
    threshold: isMobileOnly ? 0.15 : [0.55, 1],
    triggerOnce: true,
  });

  const [section2Paragaraph1Ref, section2Paragaraph1InView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [section2Paragaraph2Ref, section2Paragaraph2InView] = useInView({
    threshold: isMobileOnly ? 0.1 : [0.55, 1],
    triggerOnce: true,
  });

  const [roadmapRef, roadmapInView] = useInView({
    threshold: isMobileOnly ? 0 : [0.25, 1],
    triggerOnce: true,
  });

  const [roadmapExplainerRef, roadmapExplainerInView] = useInView({
    threshold: isMobileOnly ? 0.05 : [0.85, 1],
    triggerOnce: true,
  });

  const [roadmapList1Ref, roadmapList1InView] = useInView({
    threshold: isMobileOnly ? 0.1 : [0.25, 1],
    triggerOnce: true,
  });

  const [roadmapList2Ref, roadmapList2InView] = useInView({
    threshold: isMobileOnly ? 0.1 : [0.45, 1],
    triggerOnce: true,
  });

  const [rarityRef, rarityInView] = useInView({
    threshold: isMobileOnly ? 0.1 : [0.65, 1],
    triggerOnce: true,
  });

  const [rivermapRef, rivermapInView] = useInView({
    threshold: [0.15, 1],
    triggerOnce: true,
  });

  const [team1Ref, team1InView] = useInView({
    threshold: isMobileOnly ? 0.1 : 0.2,
    triggerOnce: true,
  });

  const [team2Ref, team2InView] = useInView({
    threshold: isMobileOnly ? 0.1 : 0.7,
    triggerOnce: true,
  });

  const [team3Ref, team3InView] = useInView({
    threshold: isMobileOnly ? 0.1 : 1,
    triggerOnce: true,
  });

  const stanleysHippos1024w = useRef([stanleyHippo1_1024w, stanleyHippo2_1024w, stanleyHippo3_1024w]);
  const stanleysHippos1280w = useRef([stanleyHippo1_1280w, stanleyHippo2_1280w, stanleyHippo3_1280w]);
  const stanleysHippos1650w = useRef([stanleyHippo1_1650w, stanleyHippo2_1650w, stanleyHippo3_1650w]);
  const stanleysCrocs1024w = useRef([stanleyCroc1_1024w, stanleyCroc2_1024w, stanleyCroc3_1024w]);
  const stanleysCrocs1280w = useRef([stanleyCroc1_1280w, stanleyCroc2_1280w, stanleyCroc3_1280w]);
  const stanleysCrocs1650w = useRef([stanleyCroc1_1650w, stanleyCroc2_1650w, stanleyCroc3_1650w]);
  const stanleysBackgrounds = useRef([
    { image: bgEiffelPng, x: 0, y: 8 },
    { image: bgStonehengePng, x: 1, y: 13 },
    { image: bgKremlinPng, x: 3, y: 15 },
    { image: bgWhitehousePng, x: 0, y: 13 },
  ]);

  const handleTriggerArray = () => {
    // Get a number.
    // Create a new temporary array
  };

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
      <Navigation titleInView={titleInView} />
      <Wrapper>
        <Container>
          <Section1 name="intro">
            {!isMobileOnly && <UfoEasterEgg inView={titleInView} src={ufoPng} alt="" />}
            <LandscapeMain
              inView={titleInView}
              x={stanleysBackgrounds.current[stanleyBackgroundIndex.current].x}
              y={stanleysBackgrounds.current[stanleyBackgroundIndex.current].y}
            ></LandscapeMain>
            <AlignTitle inView={titleInView}>
              <Title />
            </AlignTitle>
            <StanleyAvatarFloat1 inView={titleInView}>
              <img
                srcSet={`${stanleysHippos1024w.current[stanleyIndex]} 1024w, ${stanleysHippos1280w.current[stanleyIndex]} 1280w, ${stanleysHippos1650w.current[stanleyIndex]} 1650w`}
                alt="Stanley Hippo NFTs"
              />
            </StanleyAvatarFloat1>
            <TextWrap1 ref={titleRef} inView={titleInView} dangerouslySetInnerHTML={{ __html: section1 }} />
          </Section1>
          <PhotoLineupContainer>
            <PhotoBorderImg src={photoBorder} alt="Photos of Stanleys" />
            <FilmStripTop src={filmStripEdge} alt="" />
            <FilmStripBottom src={filmStripEdge} alt="" />
          </PhotoLineupContainer>
          <Section2>
            <LandscapeRiver src={bgRiver} ref={landscapeRiverRef} inView={stanley2InView} alt="" />
            <Section2Organizer>
              <TextWrap2Section
                name="who"
                ref={section2Paragaraph1Ref}
                inView={section2Paragaraph1InView}
                dangerouslySetInnerHTML={{ __html: section2_column1 }}
              />
              <TextWrap2Section2
                ref={section2Paragaraph2Ref}
                inView={section2Paragaraph2InView}
                dangerouslySetInnerHTML={{ __html: section2_column2 }}
              />
              <StanleyAvatarFloat2 inView={stanley2InView} ref={stanley2Ref}>
                <img
                  srcSet={`${stanleysCrocs1024w.current[stanleyIndex]} 1024w, ${stanleysCrocs1280w.current[stanleyIndex]} 1280w, ${stanleysCrocs1650w.current[stanleyIndex]} 1650w`}
                  alt="Stanley Crocodile NFTs"
                />
              </StanleyAvatarFloat2>
            </Section2Organizer>
          </Section2>
          <Border2 src={border} />
          <Section4>
            <Wrap4 ref={roadmapRef}>
              <Roadmap inView={roadmapInView}>
                <MapContainer name="roadmap">
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
                <Dice src={dice} alt="Dice Image" />
                <RarityExplainer dangerouslySetInnerHTML={{ __html: section3_column2_rarityExplainer }} />
                <RarityList dangerouslySetInnerHTML={{ __html: section3_column2_traitsList }}></RarityList>
              </Rarity>
            </Wrap4>
            <BackgroundGradient src={repeatBg} alt="" />
            <Stars isWoken={rivermapInView}>
              <StarPng duration={1.2} animation={Pulse1} delay={0.02} left={'10%'} bottom={'60px'} src={star} alt="" />
              <StarPng duration={1.5} animation={Pulse1} delay={0.04} left={'40%'} src={star} alt="" />
              <StarPng duration={1.6} animation={Pulse2} delay={0.08} left={'60%'} bottom={0} src={star} alt="" />
              <StarPng duration={2.5} animation={Pulse1} delay={0.12} left={'80%'} bottom={'40px'} src={star} alt="" />
              <StarPng duration={2} animation={Pulse1} delay={0.15} left={'30%'} bottom={'10px'} src={star} alt="" />
              <StarPng duration={1} animation={Pulse0} delay={0.2} left={'90%'} src={star} alt="" />
            </Stars>
          </Section4>
          <ProgressMapWrapper ref={rivermapRef}>
            <ProgressMap inView={rivermapInView}>
              <source type="image/avif" srcSet={`${roadmapAvif_1280w} 1280w, ${roadmapAvif_1650w} 1650w`} />
              <img srcSet={`${roadmapPng_1280w} 1280w, ${roadmapPng_1650w} 1650w`} alt="Visual Representation of Roadmap" />
            </ProgressMap>
            <UfoImage inView={rivermapInView} src={ufoPng} />
          </ProgressMapWrapper>
          <Border2 src={border} />
          <Section6>
            <WhoContent>
              {/* <QuestionImg src={headerQuestion} /> */}
              <HeaderExtender>
                <Header name="team">Meet the Team</Header>
              </HeaderExtender>
              <Profiles>
                <Member
                  person={team.littlesuitcase}
                  color={'orange'}
                  portrait={teamSuitcasePng}
                  frameOrientations={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  name='Carlos "LittleSuitcase" Vazquez'
                  description={'Crypto dad, golf nut, and world traveler. Ask me where I am going next...'}
                  isVisible={team1InView}
                  ref={team1Ref}
                />
                <Member
                  person={team.colorsoftheworld}
                  color={'green'}
                  portrait={teamColorsPng}
                  frameOrientations={{ top: -6, left: 3, right: -5, bottom: -4 }}
                  name='Hilde "ColorsOfTheWorld" Hendriks-Vos'
                  description={
                    'Art lover, art creator, and travel fanatic. NFT aficionado, and eager to learn everything new that comes my way.'
                  }
                  isVisible={team2InView}
                  ref={team2Ref}
                />
                <Member
                  person={team.apura}
                  color={'purple'}
                  portrait={teamApuraPng}
                  frameOrientations={{ top: 2, left: 1, right: 3, bottom: 1 }}
                  name="Apura"
                  description={
                    'Dad, serial business owner and crypto enthusiast. Strong believer in transparency, teamwork, and the power of community'
                  }
                  isVisible={team3InView}
                  ref={team3Ref}
                />
              </Profiles>
            </WhoContent>
          </Section6>
          <Footer dangerouslySetInnerHTML={{ __html: footer }} />
        </Container>
      </Wrapper>
    </>
  );
};

const UfoEasterEgg = styled.img`
  position: absolute;
  width: 236px;
  height: 147px;
  filter: contrast(20%);
  filter: blur(${props => (props.inView ? '9px' : '35px')});
  transform: scale(${props => (props.inView ? 1 : 0)});
  left: ${props => (props.inView ? '130%' : '-5%')};
  top: ${props => (props.inView ? '50%' : '-25%')};
  opacity: ${props => (props.inView ? 1 : 0)};
  z-index: 10;
  transition: opacity 0.8s 9s linear, filter 0.5s 9s linear, left 3s 9s cubic-bezier(0.26, 0.67, 0.48, 0.91),
    top 2.5s 9s cubic-bezier(0.26, 0.67, 0.48, 0.91), transform 2s 9s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const HeaderExtender = styled.div`
  padding-left: 7vw;
`;

const Section = styled.section`
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
`;

const Pulse0 = keyframes`
0% { opacity: 0.3; transform: scale(0.6); }
50% { opacity: 0.8; transform: scale(0.7);}
100% { opacity: 0.3; transform: scale(0.6);}
`;

const Pulse1 = keyframes`
0% { opacity: 0.5; transform: scale(0.3); }
50% { opacity: 0.9; transform: scale(0.5);}
100% { opacity: 0.5; transform: scale(0.3);}
`;

const Pulse2 = keyframes`
0% { opacity: 0.2; transform: scale(0); }
50% { opacity: 0.6; transform: scale(0.3);}
100% { opacity: 0.3; transform: scale(0);}
`;

const StarPng = styled.img`
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  animation: ${props => props.animation} ${props => props.duration}s ${props => props.delay}s steps(1, end) infinite;
`;

const ProgressMapWrapper = styled.div`
  position: relative;
  height: auto;
  line-height: 0;
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
  transition: opacity 0.6s 0.63s linear, transform 1s 0.63s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  width: clamp(135px, 13.5vw, 236px);
  top: 0;
  z-index: 6000;
  animation: ${ufoAnimation} 4s ease-in-out infinite;
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
  z-index: 20;
  flex-direction: column;
`;

const BackgroundGradient = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
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
  padding-top: 140px;
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
  height: 550px;
  width: 100%;
  position: relative;
  transform: translateY(${props => (props.inView ? '270px' : '260px')}) scale(${props => (props.inView ? 1.6 : '1.4')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.2s 0.35s linear, transform 0.7s 0.25s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  ${isMobileOnly && 'transition: opacity 0.2s 0.15s linear, transform 0.7s 0.05s cubic-bezier(0.26, 0.67, 0.48, 0.91)'};
  z-index: 15;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LandscapeRiver = styled.img`
  position: absolute;
  filter: blur(12px);
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  transform: translateY(${props => (props.inView ? '-100px' : '-140px')}) scaleX(-1);
  opacity: ${props => (props.inView ? 0.5 : 0)};
  transition: opacity 0.6s 1.3s linear, transform 0.6s 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    opacity: ${props => (props.inView ? 0.5 : 0)};
  }

  @media (max-width: 1024px) {
    opacity: ${props => (props.inView ? 0.3 : 0)};
  }
`;

const ProgressMap = styled.picture`
  img {
    width: 100%;
    height: 100%;
  }

  width: 100%;
  height: 100%;
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s 1s linear, transform 1s 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const LandscapeMain = styled.div`
  position: absolute;
  right: ${props => props.x}vw;
  z-index: 5;
  bottom: ${props => props.y}vw;
  filter: blur(2.5px);

  transform: translateY(${props => (props.inView ? '0px' : '-60px')}) scale(2);
  opacity: ${props => (props.inView ? 0.3 : 0)};
  transition: opacity 0.6s 2.7s linear, transform 0.6s 2.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    opacity: 0.15;
  }

  @media (max-width: 1024px) {
    transform: translateY(${props => (props.inView ? '0px' : '20px')}) scale(1.15);
    transition: opacity 2s 0.2s linear, transform 3s 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
    opacity: ${props => (props.inView ? 0.1 : 0)};
  }
`;

const Stars = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  bottom: 0;
  opacity: ${props => (props.isWoken ? 1 : 0)};
  visibility: ${props => (props.isWoken ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.isWoken ? 0 : '90px')});
  transition: opacity 0.6s linear, transform 2s cubic-bezier(0.26, 0.67, 0.48, 0.91);
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

const WhoContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  @media (max-width: 1024px) {
    align-items: flex-start;
    gap: 0;
  }
`;

const Profiles = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 100px;
  row-gap: 140px;
  column-gap: 140px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
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

const Section6 = styled(Section)`
  border-radius: 0 0 34px 34px;
  position: relative;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: clamp(70px, 6vw, 235px);
  padding-bottom: clamp(80px, 8vw, 310px);
  gap: 4vw;
  display: flex;
  background-color: ${color.background['container']};

  width: 100%;

  @media (max-width: 1024px) {
    border-radius: 0;
    padding-left: 3vw;
    padding-right: 3vw;
  }
`;

const Footer = styled.footer`
  padding-left: 8vw;
  padding-right: 8vw;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  color: #7d8ab2;
  margin-bottom: 30px;
  p {
    ${font.size(16)};
    line-height: 22px;
  }

  @media (max-width: 1024px) {
    p {
      ${font.size(16)};
      line-height: 22px;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 0px;
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

const TBDList = styled.ul`
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s 0.3s linear;
  width: 40%;

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
  @media (max-width: 768px) {
    width: auto;
  }
`;

const InitialList = styled.ul`
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s 0.3s linear;

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

const Section4 = styled(Section)`
  width: 100%;
  display: flex;
  z-index: 600;
  padding-bottom: clamp(80px, 13vw, 230px);
  position: relative;
  background-color: #6e91bb;
`;

const RoadmapExplainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.6s 0.3s linear;
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
  z-index: 500;
  top: -80px;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '50px')});
  transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  ${isMobileOnly && 'opacity: 1; transform: translateY(0);'}

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

const Border2 = styled.img`
  z-index: 500;
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

  @media (max-width: 1280px) {
    p:nth-last-child(1) {
    }
  }
`;

const TextWrap1 = styled.div`
  position: relative;
  width: clamp(650px, 40vw * 1.1, 650px);
  z-index: 20;

  transform: translateY(${props => (props.inView ? 0 : '30px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  ${isMobileOnly
    ? 'transition: opacity 0.5s 0.35s linear, transform 1s 0.35s cubic-bezier(0.26, 0.67, 0.48, 0.91)'
    : 'transition: opacity 0.5s 1.45s linear, transform 1s 1.45s cubic-bezier(0.26, 0.67, 0.48, 0.91)'};
  @media (max-width: 1280px) {
    width: 100%;

    p:nth-last-child(3) {
      margin-right: 10%;
    }

    p:nth-last-child(2) {
      margin-right: 30%;
    }
    p:nth-last-child(1) {
      margin-right: 30%;
    }
  }

  @media (max-width: 768px) {
    p:nth-last-child(3) {
      margin-right: auto;
    }
    p:nth-last-child(2) {
      margin-right: 20%;
    }

    p:nth-last-child(1) {
      margin-right: 50%;
    }
  }
`;

const PhotoBorderImg = styled.img`
  overflow-x: hidden;
  position: relative;
  z-index: 10;
`;

const StanleyAvatarFloat1 = styled.picture`
  transform: translateY(${props => (props.inView ? 0 : '50px')}) scaleX(-1);
  opacity: ${props => (props.inView ? 1 : 0)};
  ${isMobileOnly
    ? 'transition: opacity 0.6s 0.35s linear, transform 0.8s 0.35s cubic-bezier(0.26, 0.67, 0.48, 0.91)'
    : 'transition: opacity 0.5s 2.3s linear, transform 1.1s 2.3s cubic-bezier(0.26, 0.67, 0.48, 0.91)'};

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 15;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
  width: clamp(250px, 98vw / 2.2, 950px);
  @media (max-width: 1280px) {
    width: clamp(210px, 75vw / 2.2, 300px);
  }
`;

const StanleyAvatarFloat2 = styled.picture`
  img {
    width: 100%;
    height: 100%;
  }

  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;
  height: auto;
  width: clamp(100px, 95vw / 2.2, 950px);
  transform: translateY(${props => (props.inView ? '70px' : '110px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: opacity 0.5s 0.7s linear, transform 1.1s 0.7s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  @media (max-width: 1280px) {
    left: auto;
    right: 0;
    width: clamp(250px, 75vw / 2.2, 300px);
    transform: translateY(${props => (props.inView ? '70px' : '110px')}) scaleX(-1);
    height: auto;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
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

const Section1 = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 8vw;
  padding-right: 8vw;
  background-color: ${color.background['container']};

  border-radius: 34px 34px 0 0;
  padding-bottom: clamp(7vw, 5vw, 250px);

  @media (max-width: 1024px) {
    height: 100%;
    padding-top: clamp(40px, 14vw, 120px);
    border-radius: 0;
  }
`;

const Section2 = styled(Section)`
  position: relative;
  padding-top: clamp(100px, 12vw, 190px);
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

export default Landing;
