import styled from 'styled-components';
import { font, color } from 'shared/styles';
import stanleyAvatarFull1 from 'App/assets/images/stanleys_avatar_full_1.png';
import stanleyAvatarFull2 from 'App/assets/images/stanleys_avatar_full_2.png';
import photoBorder from 'App/assets/images/photo_border.png';
import backgroundRiver from 'App/assets/images/section2_background.png';
import backgroundWhiteHouse from 'App/assets/images/section_background_whitehouse.png';
import border from 'App/assets/images/border.png';
import phone from 'App/assets/images/phone.png';
import qr from 'App/assets/images/qr.jpg';
import repeatBg from 'App/assets/images/repeat-bg.png';
import tickInactive from 'App/assets/images/icon_tick_inactive.png';
import bullet from 'App/assets/images/icon_bullet.png';

import roadmap0 from 'App/assets/images/roadmap_0.png';
import socialTwitter from 'App/assets/images/social_twitter.png';
import socialInstagram from 'App/assets/images/social_instagram.png';
import socialLinkedin from 'App/assets/images/social_linkedin.png';

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

const Landing = () => {
  console.log(team.littlesuitcase);
  return (
    <Fragment>
      <Navigation />
      <Wrapper>
        <Container>
          <Section1 name="intro">
            <WhiteHouse src={backgroundWhiteHouse} />
            <AlignTitle>
              <Title />
            </AlignTitle>
            <StanleyAvatarFloat1 src={stanleyAvatarFull1} alt="" />
            <TextWrap1 dangerouslySetInnerHTML={{ __html: section1 }} />
          </Section1>
          <PhotoBorderImg src={photoBorder} />
          <Section2 name="who">
            <LandscapeRiver src={backgroundRiver} />
            <Section2Organizer>
              <TextWrap2Section dangerouslySetInnerHTML={{ __html: section2_column1 }} />
              <TextWrap2Section dangerouslySetInnerHTML={{ __html: section2_column2 }} />
              <StanleyAvatarFloat2 src={stanleyAvatarFull2} alt="" />
            </Section2Organizer>
          </Section2>
          <Border2 src={border} />
          <Section3>
            <QR>
              <QRImg src={qr} />
              <QRText>{qr_text}</QRText>
            </QR>
            <PhoneImg src={phone} />
          </Section3>
          <Section4>
            <Wrap4 name="roadmap">
              <Roadmap>
                <Map src={map} />
                <RoadmapExplainer dangerouslySetInnerHTML={{ __html: section3_column1_roadmapExplainer }} />
                <RoadmapLists>
                  <InitialList dangerouslySetInnerHTML={{ __html: section3_column1_initialList }} />
                  <TBDList dangerouslySetInnerHTML={{ __html: section3_column1_tbdList }}></TBDList>
                </RoadmapLists>
              </Roadmap>
              <Rarity>
                <Dice src={dice} />
                <RarityExplainer dangerouslySetInnerHTML={{ __html: section3_column2_rarityExplainer }} />
                <RarityList dangerouslySetInnerHTML={{ __html: section3_column2_traitsList }}></RarityList>
              </Rarity>
            </Wrap4>
            <Stars src={stars} />
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
    </Fragment>
  );
};

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
  height: clamp(110px, 15vw, 205px);
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
  margin-right: 8vw;
  gap: 5vw;
  padding-left: clamp(50px, 100vw / 5, 450px);

  @media (max-width: 1280px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

const AlignTitle = styled.div`
  height: 16vw;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LandscapeRiver = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
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
  position: absolute;
  right: 0;
  bottom: 0;

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
  x @media (max-width: 1024px) {
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
      left: -25px;
      content: '';
      background-image: url(${tickInactive});
      background-size: 20px 16px;
      width: 20px;
      height: 16px;
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
  margin-top: clamp(180px, 19vw, 390px);
  gap: 15%;

  margin-left: 8vw;
  margin-right: 8vw;

  @media (max-width: 1024px) {
    gap: 0;
    flex-direction: column;
  }
`;

const Section4 = styled.section`
  width: 100%;
  display: flex;
  padding-bottom: clamp(80px, 13vw, 150px);
  position: relative;
  background-image: url(${repeatBg});
  background-position: bottom;
  background-repeat: repeat-x;
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
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Rarity = styled.div`
  position: relative;
  width: 25%;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 100px;
    margin-right: 0;
  }
`;

const QRImg = styled.img`
  position: absolute;
  top: 50%;
  border: 6px solid #000;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: clamp(110px, 15vw, 205px);
  height: auto;

  @media (max-width: 1024px) {
  }
`;

const PhoneImg = styled.img`
  max-width: 325px;
  min-width: 150px;
  height: auto;
  position: absolute;
  left: clamp(56%, 100%, 56%);
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: clamp(200px, 20vw, 20vw);
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
  width: clamp(650px, 40vw * 1.1, 850px);
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
  bottom: 0;
  right: 0;
  z-index: 5;
  height: auto;
  width: clamp(100px, 75vw / 2.2, 750px);
  max-width: 686px;
  min-width: 250px;

  @media (max-width: 1280px) {
    width: clamp(200px, 75vw / 2.2, 300px);
  }
`;

const StanleyAvatarFloat2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
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
  padding-top: 4vw;
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

export default Landing;
