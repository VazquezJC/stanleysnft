import styled from 'styled-components';
import { font, color } from 'shared/styles';
import stanleyAvatarFull1 from 'App/assets/images/stanleys_avatar_full_1.png';
import stanleyAvatarFull2 from 'App/assets/images/stanleys_avatar_full_2.png';
import photoBorder from 'App/assets/images/photo_border.png';
import background2 from 'App/assets/images/section2_background.png';
import border from 'App/assets/images/border.png';
import phone from 'App/assets/images/phone.png';
import qr from 'App/assets/images/qr.png';
import repeatBg from 'App/assets/images/repeat-bg.png';
import tickInactive from 'App/assets/images/icon_tick_inactive.png';
import tickActive from 'App/assets/images/icon_tick_active.png';
import tba from 'App/assets/images/icon_tba.png';

import map from 'App/assets/images/roadmap_map.png';
import dice from 'App/assets/images/roadmap_dice.png';
import headerQuestion from 'App/assets/images/header_question.png';

import frame from 'App/assets/images/frame.png';
import title from 'App/assets/images/title.png';
import portrait from 'App/assets/images/frame-temp.png';

const Landing = () => {
  return (
    <Wrapper>
      <Container>
        <Section1 name="introduction">
          <TitleArea>
            <Framer>
              <Frame src={frame} />
              <Title src={title} />
              <Portrait src={portrait} />
            </Framer>
          </TitleArea>
          <Header>What is the Stanleys Family?</Header>
          <TextWrap1>
            <Text>
              The Stanleys Family is an artful representation of the growing
              international culturte curiosity of young adults. Our objective is
              simple – help others achieve international cultural awareness and
              make The Stanleys the first community owned NFT – Thousands of
              minds are bettert than a few… Total Ownership and Profit Sharing –
              First of its kind.
            </Text>
            <Text>
              The first art models were created by teens in our circle of
              families and friends. These models became the foundation of unique
              characters that we hope you find interesting and playful, as we
              do.
            </Text>
            <Text>
              Come visit us and experience a sincere and safe environment in The
              Stanleys Discord Community Channel.
            </Text>
          </TextWrap1>
          <StanleyAvatarFloat1 src={stanleyAvatarFull1} alt="" />
        </Section1>
        <PhotoBorderImg src={photoBorder} />
        <Section2>
          <TextWrap2>
            <TextWrap2Section>
              <Header name="whoare">Why did we create The Stanleys?</Header>
              <Text>
                Our team has been traveling throughout the world since we can
                remember and are in various countries throughout North America,
                Europe, and Asia. When we reflect on what triggered our cultural
                curiosity, most of us can clearly recollect the experience our
                kids had when completing the “Flat Stanley'' project in early
                school years. The excitement they showed when getting responses
                from all over the world was priceless… We realized this was a
                significant crossroad in the lives of our kids…
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
                The Stanleys have lived by the river since the beginning of time
                and always shown an interest in traveling, new foods, and
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
                  quality and playful NFTs at mint as well as substantial profit
                  sharing with the community. Our goal is to be the first
                  community owned NFT.
                </Text>
                <Text>
                  We recognized The Stanleys Family potential to continue being
                  a model for international cultural awareness and assistance.
                  We have identified some opportunities below and will seek
                  community members' input to evolve our roadmap as we get
                  closer to Mint.
                </Text>
              </RoadmapExplainer>
              <RoadmapLists>
                <RoadmapInitialList>
                  <HeaderList>Initial</HeaderList>
                  <RoadmapListItem>
                    <FloatingTick src={tickActive} />
                    42.5% Profit Sharing during Mint for those that buy and hold
                    beyond 10 days
                  </RoadmapListItem>
                  <RoadmapListItem>
                    <FloatingTick src={tickInactive} />
                    100% Ownership after Mint (first of its kind) for those that
                    buy and hold beyond 10 days
                  </RoadmapListItem>
                  <RoadmapListItem>
                    <FloatingTick src={tickInactive} />
                    Eligibility to represent the community as part of the future
                    leadership
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
                <RoadmapTBDList>
                  <HeaderList>TBD</HeaderList>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Evolving International Awareness (Badges, #Flyer
                    Tokenization)
                  </RoadmapTBDItem>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Additional Characters that expand potential for future
                    growth
                  </RoadmapTBDItem>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Profit Sharing Evolution
                  </RoadmapTBDItem>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Subsequent charity donations
                  </RoadmapTBDItem>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Travel Gaming
                  </RoadmapTBDItem>
                  <RoadmapTBDItem>
                    <FloatingTBA src={tba} />
                    Others
                  </RoadmapTBDItem>
                </RoadmapTBDList>
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
                <RarityItem>Character</RarityItem>
                <RarityItem>Background</RarityItem>
                <RarityItem>Facial Characteristics</RarityItem>
                <RarityItem>Facial Accessories</RarityItem>
                <RarityItem>Clothing Accessories</RarityItem>
                <RarityItem>Landmarks</RarityItem>
              </RarityList>
            </Rarity>
          </Wrap4>
        </Section4>
        <Section5></Section5>
        <Border2 src={border} />
        <Section6>
          <QuestionImg src={headerQuestion} />
          <WhoContent>
            <WhoAreWe name="creators">Who are we?</WhoAreWe>
            <Profiles>
              <Profile>
                <Name>LittleSuitCase</Name>
                <Description>
                  Crypto dad, golf enthusiast, and world traveler. Ask me where
                  I am going next….
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
          <Text>
            © The Stanleys. 2021, All rights reserved When you visit or interact
            with our sites, services, or tools, we or our authorized service
            providers may use cookies for storing information to help provide
            you with a better, faster and safer experience and for marketing
            purposes.
          </Text>
        </Footer>
      </Container>
    </Wrapper>
  );
};

const Framer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleArea = styled.div`
  height: 300px;
  position: relative;
`;

const Frame = styled.img`
  position: absolute;
`;
const Title = styled.img`
  position: absolute;
  top: 50px;
  left: -150px;
`;
const Portrait = styled.img`
  position: absolute;
  top: 93px;
  left: 23px;
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
`;

const WhoContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
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

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const Section5 = styled.div`
  height: 0;
`;
const Section6 = styled.div`
  padding-left: 13%;
  gap: 4vw;
  display: flex;
  padding-right: 13%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${color.background['container']};
  width: 100%;
`;

const Footer = styled.footer`
  background-color: #000;
  padding-left: 13%;
  padding-right: 13%;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
`;

const Map = styled.img`
  position: absolute;
  left: 215px;
  top: -100px;
`;
const Dice = styled.img`
  position: absolute;
  left: 225px;
  top: -50px;
`;

const FloatingTBA = styled.img`
  position: absolute;
  width: 24px;
  left: -35px;
  top: 0px;
  height: auto;
`;

const FloatingTick = styled.img`
  position: absolute;
  width: 22px;
  left: -35px;
  top: 5px;
  height: auto;
`;

const RarityItem = styled.li`
  ${font.size(16)};
`;
const RarityList = styled.ul`
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
  ${font.size(16)};
`;
const RoadmapTBDList = styled.ul`
  width: 40%;
`;
const RoadmapInitialList = styled.ul`
  width: 40%;
`;

const RoadmapLists = styled.div`
  position: relative;
  left: 30px;

  display: flex;
  gap: 20%;
  line-height: 24px;
`;

const Wrap4 = styled.div`
  display: flex;
  margin-left: 13%;
  margin-right: 13%;
  gap: 150px;
  margin-top: 350px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Section4 = styled.section`
  width: 100%;
  display: flex;
  padding-bottom: 200px;
  position: relative;
  background-image: url(${repeatBg});
  background-repeat: no-repeat;
  background-position: bottom;
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
  flex: 1 1 70%;
`;

const Rarity = styled.div`
  flex: 1 1 25%;
  margin-right: 5%;
`;

const QRImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  max-width: 285px;
  min-width: 150px;
  width: 25vw;

  @media (max-width: 1280px) {
  }
`;

const PhoneImg = styled.img`
  max-width: 355px;
  min-width: 150px;
  width: 40vw;
  height: auto;
  position: absolute;
  right: 15vw;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 20;

  @media (max-width: 1280px) {
    right: 5vw;
  }

  @media (max-width: 1024px) {
    right: 1vw;
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
  @media (max-width: 480px) {
    ${font.size(18)};
  }
`;

const TextWrap2 = styled.div`
  width: 830px;
  display: flex;
  align-self: flex-end;
  gap: 60px;
  margin-top: 200px;
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
    margin-left: auto;
  }
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
    margin: 0 0 30px 50px;
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
  width: 100%;
`;

const Section1 = styled.section`
  position: relative;
  height: 900px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 13%;
  padding-right: 13%;
  background: ${color.background['container']};

  @media (max-width: 1280px) {
    height: calc(900px + 1vh);
  }

  @media (max-width: 1024px) {
    height: calc(900px + 10vh);
  }

  @media (max-width: 768px) {
    height: calc(900px + 15vh);
  }

  @media (max-width: 480px) {
    height: calc(900px + 25vh);
  }
`;

const Section2 = styled.section`
  position: relative;
  height: 1150px;
  display: flex;
  flex-direction: column;
  background-image: url(${background2});
  background-repeat: no-repeat;

  background-position: center;
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
