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
import tickActive from 'App/assets/images/icon_tick_active.png';
import tba from 'App/assets/images/icon_tba.png';
import bullet from 'App/assets/images/icon_bullet.png';

import roadmap0 from 'App/assets/images/roadmap_0.png';

import map from 'App/assets/images/roadmap_map.png';
import dice from 'App/assets/images/roadmap_dice.png';
import headerQuestion from 'App/assets/images/header_question.png';

import stars from 'App/assets/images/section_background_stars.png';
import Navigation from 'Project/Navigation';

import { Fragment } from 'react';

import Title from 'Project/Title';

const Landing = () => {
  return (
    <Fragment>
      <Navigation />
      <Wrapper>
        <Container>
          <Section1 name="introduction">
            <WhiteHouse src={backgroundWhiteHouse} />
            <AlignTitle>
              <Title />
            </AlignTitle>
            <Header>What is the Stanleys Family?</Header>
            <TextWrap1>
              <Text>
                The Stanleys Family is an artful representation of the growing
                international culture curiosity of young adults. Our objective
                is simple – help others achieve international cultural awareness
                and make The Stanleys the first community owned NFT – Thousands
                of minds are bettert than a few… Total Ownership and Profit
                Sharing – First of its kind.
              </Text>
              <Text>
                The first art models were created by teens in our circle of
                families and friends. These models became the foundation of
                unique characters that we hope you find interesting and playful,
                as we do.
              </Text>
              <Text>
                Come visit us and experience a sincere and safe environment in
                The Stanleys Discord Community Channel.
              </Text>
            </TextWrap1>
            <StanleyAvatarFloat1 src={stanleyAvatarFull1} alt="" />
          </Section1>
          <PhotoBorderImg src={photoBorder} />
          <Section2>
            <LandscapeRiver src={backgroundRiver} />
            <TextWrap2>
              <TextWrap2Section>
                <Header name="whoare">Why did we create The Stanleys?</Header>
                <Text>
                  Our team has been traveling throughout the world since we can
                  remember and are in various countries throughout North
                  America, Europe, and Asia. When we reflect on what triggered
                  our cultural curiosity, most of us can clearly recollect the
                  experience our kids had when completing the “Flat Stanley''
                  project in early school years. The excitement they showed when
                  getting responses from all over the world was priceless… We
                  realized this was a significant crossroad in the lives of our
                  kids…
                </Text>
              </TextWrap2Section>
              <TextWrap2Section>
                <Header>Who are The Stanleys?</Header>
                <Text>
                  We do not have a “Flat Stanley'' to share with the crypto
                  community. Instead, our friends and family came up with their
                  own characters to share with the world. Meet The Stanleys ….
                </Text>
                <Text>
                  The Stanleys have lived by the river since the beginning of
                  time and always shown an interest in traveling, new foods, and
                  learning other cultures. Recently they invested in some meme
                  coins (you know what they are) and cashed “a load” of these
                  altcoins. The Stanleys are now ready to travel with their
                  friends and meet others around the world... Taking selfies at
                  interesting places and having fun
                </Text>
              </TextWrap2Section>
            </TextWrap2>
            <StanleyAvatarFloat2 src={stanleyAvatarFull2} alt="" />
          </Section2>
          <Border2 src={border} />
          <Section3>
            <QRImg src={qr} />
            <PhoneImg src={phone} />
          </Section3>
          <Section4>
            <Wrap4>
              <Roadmap>
                <RoadmapExplainer>
                  <Header name="roadmap">The Roadmap</Header>
                  <Map src={map} />
                  <Text>
                    The initial roadmap is based on a simple launch providing
                    quality and playful NFTs at mint as well as substantial
                    profit sharing with the community. Our goal is to be the
                    first community owned NFT.
                  </Text>
                  <Text>
                    We recognized The Stanleys Family potential to continue
                    being a model for international cultural awareness and
                    assistance. We have identified some opportunities below and
                    will seek community members' input to evolve our roadmap as
                    we get closer to Mint.
                  </Text>
                </RoadmapExplainer>
                <RoadmapLists>
                  <TextWrap3>
                    <TextWrap2Section>
                      <RoadmapInitialList>
                        <HeaderList>Initial</HeaderList>
                        <RoadmapListItem>
                          <FloatingTick src={tickActive} />
                          42.5% Profit Sharing during Mint for those that buy
                          and hold beyond 10 days
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          100% Ownership after Mint (first of its kind) for
                          those that buy and hold beyond 10 days
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          Eligibility to represent the community as part of the
                          future leadership
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          500 QR coded NFTs during Mint entitling buyer to an
                          additional NFT at no charge
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          3% Mint Proceeds Charity Contribution
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          30 Days X 3 Giveaways plus additional NFTs for those
                          whitelisted
                        </RoadmapListItem>
                        <RoadmapListItem>
                          <FloatingTick src={tickInactive} />
                          Selected Community Relationships
                        </RoadmapListItem>
                      </RoadmapInitialList>
                    </TextWrap2Section>
                    <TextWrap2Section>
                      <RoadmapTBDList>
                        <HeaderList>TBD</HeaderList>
                        <RoadmapTBDItem>
                          - Evolving International Awareness (Badges, #Flyer
                          Tokenization)
                        </RoadmapTBDItem>
                        <RoadmapTBDItem>
                          - Additional Characters that expand potential for
                          future growth
                        </RoadmapTBDItem>
                        <RoadmapTBDItem>
                          - Profit Sharing Evolution
                        </RoadmapTBDItem>
                        <RoadmapTBDItem>
                          - Subsequent charity donations
                        </RoadmapTBDItem>
                        <RoadmapTBDItem>- Travel Gaming</RoadmapTBDItem>
                        <RoadmapTBDItem>- Others</RoadmapTBDItem>
                      </RoadmapTBDList>
                    </TextWrap2Section>
                  </TextWrap3>
                </RoadmapLists>
              </Roadmap>
              <Rarity>
                <RarityExplainer>
                  <Header>Rarity Model</Header>
                  <Dice src={dice} />
                  <Text>
                    The Rarity model is based on the following traits. More
                    details will be shared as we get closer to Mint day.
                  </Text>
                </RarityExplainer>
                <RarityList>
                  <FloatingTBA src={bullet} />
                  <RarityItem>- Character</RarityItem>
                  <RarityItem>- Background</RarityItem>
                  <RarityItem>- Facial Characteristics</RarityItem>
                  <RarityItem>- Facial Accessories</RarityItem>
                  <RarityItem>- Clothing Accessories</RarityItem>
                  <RarityItem>- Landmarks</RarityItem>
                </RarityList>
              </Rarity>
            </Wrap4>
            <Stars src={stars} />
          </Section4>
          <RoadmapMap src={roadmap0} />
          <Border2 src={border} />
          <Section6>
            <QuestionImg src={headerQuestion} />
            <WhoContent>
              <WhoAreWe name="creators">Who are we?</WhoAreWe>
              <Profiles>
                <Profile>
                  <Name>LittleSuitcase</Name>
                  <Description>
                    Crypto dad, golf enthusiast, and world traveler. Ask me
                    where I am going next….
                  </Description>
                </Profile>
                <Profile>
                  <Name>ColorsOfTheWorld</Name>
                  <Description>
                    Art lover, art creator, and travel fanatic. NFT aficionado,
                    and eager to learn everything new that comes my way.
                  </Description>
                </Profile>
              </Profiles>
            </WhoContent>
          </Section6>
          <Footer>
            <FootText>© The Stanleys. 2021, All rights reserved.</FootText>
            <FootText>
              When you visit or interact with our sites, services, or tools, we
              or our authorized service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </FootText>
          </Footer>
        </Container>
      </Wrapper>
    </Fragment>
  );
};

const AlignTitle = styled.div`
  height: 300px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LandscapeRiver = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;

  transition: opacity 0.5s ease-in;
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
`;

const Header = styled.h2`
  ${font.header};
  font-weight: 500;
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
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const Profiles = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  display: flex;
  line-height: 28px;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-bottom: 35px;
  }
`;
const Name = styled.div`
  font-style: italic;
  ${font.size(20)}
  margin-bottom: 8px;
`;
const Description = styled.div``;

const QuestionImg = styled.img`
  max-width: 167px;
  min-width: 90px;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    width: 60px;
    position: absolute;
    right: 50px;
    top: 30px;
  }
`;

const Section6 = styled.div`
  border-radius: 0 0 34px 34px;
  position: relative;
  padding-left: 13%;
  gap: 4vw;
  display: flex;
  padding-right: 13%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${color.background['container']};
  width: 100%;

  margin-left: 3%;
  margin-right: 3%;

  @media (max-width: 768px) {
    padding-left: 7%;
    padding-right: 7%;
  }
`;

const Footer = styled.footer`
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  color: #7d8ab2;
  margin-bottom: 100px;
`;

const Map = styled.img`
  position: absolute;
  height: auto;
  left: 215px;
  top: -100px;

  @media (max-width: 480px) {
    left: 165px;
    top: -60px;
    width: 120px;
  }
`;
const Dice = styled.img`
  position: absolute;
  left: 215px;
  top: -50px;
  height: auto;

  @media (max-width: 480px) {
    left: 165px;
    top: -40px;
    width: 130px;
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
  margin-left: 13%;
  line-height: 30px;
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
const RoadmapTBDList = styled.ul`
  @media (max-width: 768px) {
    width: auto;
  }
`;
const RoadmapInitialList = styled.ul`
  @media (max-width: 768px) {
    width: auto;
  }
`;

const RoadmapLists = styled.div`
  position: relative;
  left: 30px;

  display: flex;
  gap: 20%;
  line-height: 24px;

  @media (max-width: 1024px) {
    left: 0;
  }
`;

const Wrap4 = styled.div`
  display: flex;
  margin-left: 13%;
  margin-top: 350px;

  @media (max-width: 1024px) {
    margin-top: 220px;
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Section4 = styled.section`
  width: 100%;
  display: flex;
  padding-bottom: 200px;
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
  margin-left: 13%;
  margin-right: 13%;

  @media (max-width: 768px) {
    margin-left: 7%;
    margin-right: 7%;
  }
`;

const RarityExplainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-left: 13%;
  margin-right: 13%;

  @media (max-width: 768px) {
    margin-left: 7%;
    margin-right: 7%;
  }
`;

const Roadmap = styled.div`
  width: 55%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Rarity = styled.div`
  width: 25%;
  margin-right: 10%;

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
  max-width: 245px;
  min-width: 80px;
  width: 15vw;
  height: auto;

  @media (max-width: 1024px) {
  }
`;

const PhoneImg = styled.img`
  max-width: 325px;
  min-width: 150px;
  height: auto;
  position: absolute;
  top: 47%;
  left: 73%;
  transform: translate(-73%, -47%);
  z-index: 20;
  width: 20vw;

  @media (max-width: 1280px) {
    width: 25vw;
    left: 77%;
    transform: translate(-77%, -47%);
  }

  @media (max-width: 768px) {
    width: 25vw;
    left: 83%;
    transform: translate(-83%, -47%);
  }

  @media (max-width: 480px) {
    width: 25vw;
    left: 95%;
    transform: translate(-95%, -47%);
  }

  @media (max-width: 380px) {
    width: 25vw;
    left: 110%;
  }

  @media (max-width: 290px) {
    width: 25vw;
    left: 130%;
  }
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

const Text = styled.p`
  position: relative;
  ${font.regular};
  ${font.size(20)}
  line-height: 32px;
  @media (max-width: 1024px) {
    ${font.size(18)};
  }
  @media (max-width: 480px) {
    ${font.size(18)};
  }
`;

const TextWrap2 = styled.div`
  width: 830px;
  display: flex;
  margin-top: 200px;
  align-self: flex-end;
  gap: 60px;
  z-index: 10;
  margin-right: 13%;
  margin-left: 13%;

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
  position: relative;
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-width: 200px;
    scroll-snap-align: center;
    overflow: hidden;
    white-space: normal;
    display: inline-block;

    min-width: 0;
    min-width: 61%;
    padding: 0;
    height: auto;
    margin: 0 50px 30px 0;
  }
`;

const TextWrap1 = styled.div`
  max-width: 650px;
  z-index: 10;
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
  width: calc(100vw * (9 / 16));

  max-width: 686px;
  min-width: 350px;

  @media (max-width: 1650px) {
  }

  @media (max-width: 768px) {
    right: -100px;
  }

  @media (max-width: 480px) {
    right: -150px;
  }
`;

const StanleyAvatarFloat2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  max-width: 686px;
  min-width: 480px;

  @media (max-width: 1650px) {
    width: 45%;
    height: auto;
  }
`;

const Container = styled.main`
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

  @media (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

const FootText = styled(Text)`
  ${font.regular};
  ${font.size(15)};
  line-height: 22px;
`;
const Section1 = styled.section`
  padding-top: 30px;
  position: relative;
  height: 900px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 13%;
  padding-right: 13%;
  background: ${color.background['container']};

  border-radius: 34px 34px 0 0;

  @media (max-width: 1280px) {
    height: calc(900px + 1vh);
  }

  @media (max-width: 1024px) {
    padding-top: 50px;
    height: calc(900px + 10vh);
  }

  @media (max-width: 768px) {
    height: calc(900px + 15vh);
    padding-left: 7%;
    padding-right: 7%;
  }

  @media (max-width: 480px) {
    height: calc(900px + 25vh);
  }
`;

const Section2 = styled.section`
  position: relative;
  height: 1050px;
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: ${color.background['container']};
`;

const Section3 = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  background-color: ${color.background['container']};
`;

export default Landing;
