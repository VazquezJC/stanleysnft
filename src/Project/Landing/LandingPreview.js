import styled from 'styled-components';
import { useEffect, useState, useMemo } from 'react';
import { font, color } from 'shared/styles';
import stanleyAvatarFull1 from 'App/assets/images/stanleys_avatar_full_1.png';
import stanleyAvatarFull2 from 'App/assets/images/stanleys_avatar_full_2.png';
import photoBorder from 'App/assets/images/photo_border.png';
import backgroundRiver from 'App/assets/images/section2_background.png';
import backgroundWhiteHouse from 'App/assets/images/section_background_whitehouse.png';
import border from 'App/assets/images/border.png';
import phone from 'App/assets/images/phone2.png';
import qr from 'App/assets/images/qr.jpg';
import repeatBg from 'App/assets/images/repeat-bg.png';
import tickInactive from 'App/assets/images/icon_tick_inactive.png';
import bullet from 'App/assets/images/icon_bullet.png';

import qrScan from 'App/assets/images/qrscan.png';
import cameraFlash from 'App/assets/images/cameraflash.png';
import starMedium from 'App/assets/images/star-medium.png';
import starSmall from 'App/assets/images/star-small.png';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { useInView } from 'react-intersection-observer';

import mapLeft from 'App/assets/images/map-left2.png';
import mapMiddle from 'App/assets/images/map-middle2.png';
import mapRight from 'App/assets/images/map-right2.png';
import mapBottom from 'App/assets/images/map-bottom.png';

import starsSmall from 'App/assets/images/stars-small.png';
import starsMedium from 'App/assets/images/stars-medium.png';
import starsLarge from 'App/assets/images/stars-large.png';

import mapLeftBottom from 'App/assets/images/map-bottom-left.png';
import mapRightBottom from 'App/assets/images/map-bottom-right.png';
import mapMiddleBottom from 'App/assets/images/map-bottom-middle.png';

import checkBox1 from 'App/assets/images/checkbox1.png';
import checkBox2 from 'App/assets/images/checkbox3.png';
import checkBox3 from 'App/assets/images/checkbox3.png';

import roadmapBackdrop from 'App/assets/images/roadmap_backdrop.png';

import roadmap0 from 'App/assets/images/roadmap_0.png';
import socialTwitter from 'App/assets/images/social_twitter.png';
import socialInstagram from 'App/assets/images/social_instagram.png';
import socialLinkedin from 'App/assets/images/social_linkedin.png';

import newStanley1 from 'App/assets/images/Stanley_hippo-boy_1.png';
import newStanley2 from 'App/assets/images/Stanley_hippo-boy_2.png';
import newStanley3 from 'App/assets/images/Stanley_hippo-boy_3.png';
import newStanley4 from 'App/assets/images/Stanleys_croc_1.png';
import newStanley5 from 'App/assets/images/Stanleys_croc_2.png';
import newStanley6 from 'App/assets/images/Stanleys_croc_3.png';

import map from 'App/assets/images/roadmap_map.png';
import dice from 'App/assets/images/roadmap_dice.png';

import stars from 'App/assets/images/section_background_stars.png';
import Navigation from 'Project/Navigation';

import { Fragment } from 'react';

import Profile from 'Project/Landing/Profile';
import Title from 'Project/Title';
import {
  riverProgression,
  section1,
  section2_column1,
  section2_column2,
  qr_text,
  section3_column1_roadmapExplainer,
  section3_column1_initialList,
  section3_column1_tbdList,
  section3_column2_rarityExplainer,
  section3_column2_traitsList,
  team,
  footer,
} from 'data/LandingPageText';

const stanleys = [newStanley1, newStanley2, newStanley3, newStanley4, newStanley5, newStanley6];
const stanleysHippos = [newStanley1, newStanley2, newStanley3];
const stanleysCrocs = [newStanley4, newStanley5, newStanley6];

const LandingPreview = () => {
  const [stanleyIndex, setStanleyIndex] = useState(0);
  const [stanley2Ref, stanley2InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    <ParallaxProvider>
      <Navigation />
      <Wrapper>
        <Container>
          <Section1 name="intro">
            <Parallax styleInner={{ position: 'absolute', bottom: 0, right: 0 }} y={['-7%', '5%']}>
              <WhiteHouse src={backgroundWhiteHouse} />
            </Parallax>
            <Parallax y={[0, 5]}>
              <AlignTitle>
                <Title />
              </AlignTitle>
            </Parallax>
            <StanleyAvatarFloat1 src={stanleysHippos[stanleyIndex]} alt="" />
            <TextWrap1 dangerouslySetInnerHTML={{ __html: section1 }} />
          </Section1>
          <PhotoBorderImg src={photoBorder} />
          <Section2 name="who">
            <Parallax styleInner={{ position: 'absolute', top: '-25px', left: 0, height: '100%' }} y={['-7%', '5%']}>
              <LandscapeRiver src={backgroundRiver} />
            </Parallax>

            <Section2Organizer>
              <TextWrap2Section dangerouslySetInnerHTML={{ __html: section2_column1 }} />
              <TextWrap2Section dangerouslySetInnerHTML={{ __html: section2_column2 }} />
              <Parallax styleInner={{ position: 'absolute', bottom: 0, left: '-25px' }} y={[-3, 8]}>
                <StanleyAvatarFloat2 inView={stanley2InView} ref={stanley2Ref} src={stanleysCrocs[stanleyIndex]} alt="" />
              </Parallax>
            </Section2Organizer>
          </Section2>
          <Border2 src={border} />
          <Section4>
            <Wrap4 name="roadmap">
              <Roadmap>
                <MapContainer>
                  <LeftMap />
                  <MapContents>
                    <RoadmapExplainer dangerouslySetInnerHTML={{ __html: section3_column1_roadmapExplainer }} />
                    <RoadmapLists>
                      <InitialList dangerouslySetInnerHTML={{ __html: section3_column1_initialList }} />
                      <TBDList dangerouslySetInnerHTML={{ __html: section3_column1_tbdList }}></TBDList>
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

              <Rarity>
                <Dice src={dice} />
                <RarityExplainer dangerouslySetInnerHTML={{ __html: section3_column2_rarityExplainer }} />
                <RarityList dangerouslySetInnerHTML={{ __html: section3_column2_traitsList }}></RarityList>
              </Rarity>
            </Wrap4>
            {/* <Stars src={stars} /> */}
            <BackgroundGradient src={repeatBg} />

            <Parallax styleInner={{ position: 'absolute', bottom: '30px', right: 0 }} y={['-5%', '5%']}>
              <StarsSmall src={starsSmall} />
            </Parallax>

            <Parallax styleInner={{ position: 'absolute', bottom: '30px', left: 0 }} y={['-20%', '15%']}>
              <StarsMedium src={starsMedium} />
            </Parallax>

            <Parallax styleInner={{ position: 'absolute', bottom: '30px', right: 0 }} y={['-35%', '35%']}>
              <StarsLarge src={starsLarge} />
            </Parallax>
          </Section4>
          <RoadmapMap src={roadmap0} />
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
    </ParallaxProvider>
  );
};

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

{
  /* <Section3>
<QRPhoneLayer>
  <ThePhone>
    <PhoneImg src={phone} />
    <QRScan src={qrScan} />
  </ThePhone>
</QRPhoneLayer>
<QR>
  fdsfds
  <QRImg src={qr} />
</QR>
</Section3> */
}

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
  gap: 5vw;
  padding-left: clamp(50px, 100vw / 5, 450px);

  @media (max-width: 1280px) {
    padding-left: 0;
    margin-right: 8vw;
    flex-direction: column;
  }
`;

const AlignTitle = styled.div`
  height: 15vw;
  transform: scale(1);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LandscapeRiver = styled.img`
  z-index: 0;

  transition: opacity 0.25s ease-out;
  @media (max-width: 1650px) {
    opacity: 0.7;
  }

  @media (max-width: 1280px) {
    opacity: 0.5;
  }

  @media (max-width: 1024px) {
    opacity: 0.3;
  }
`;

const RoadmapMap = styled.img`
  position: relative;
  height: auto;
  width: 100%;
  background-color: #7f8aa2;

  @media (max-width: 1024px) {
    display: none;
  }
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
  transition: opacity 0.5s ease-in;
  @media (max-width: 1280px) {
    opacity: 0.5;
  }

  @media (max-width: 1024px) {
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

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Rarity = styled.div`
  position: relative;
  width: 30%;
  top: 200px;

  @media (max-width: 1280px) {
    top: 0;
    margin-left: 5vw;
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 8vw;
    margin-top: 100px;
    margin-right: 0;
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
  flex-direction: column;
`;

const TextWrap1 = styled.div`
  width: clamp(650px, 40vw * 1.1, 750px);
  z-index: 10;

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
  position: absolute;
  transform: scaleX(-1);
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
  z-index: 5;
  height: auto;
  width: clamp(100px, 75vw / 2.2, 650px);

  @media (max-width: 1280px) {
    left: -9vw;
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
    line-height: 48px;
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
    ${font.regular};
    z-index: 15;
    ${font.size(20)}
    line-height: 30px;

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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 8vw;
  padding-right: 8vw;
  background: ${color.background['container']};
  border-radius: 34px 34px 0 0;

  padding-bottom: clamp(5vw, 12vw, 250px);

  @media (max-width: 1024px) {
    padding-top: clamp(40px, 14vw, 120px);
    padding-bottom: 25vw;
    border-radius: 0;
  }
`;

const Section2 = styled.section`
  position: relative;
  padding-top: clamp(60px, 12vw, 190px);
  padding-bottom: clamp(1vw, 12vw, 190px);
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: ${color.background['container']};

  transition: 0.25s ease-out;

  @media (max-width: 1280px) {
    padding-bottom: 0;
  }
`;

const Section3 = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  background-color: ${color.background['container']};
`;

export default LandingPreview;
