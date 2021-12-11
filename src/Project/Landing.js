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

const Landing = () => {
  return (
    <Wrapper>
      <Container>
        <Section1>
          <TitleArea></TitleArea>
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
              <Header>What is the Stanleys Family?</Header>
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
              <Header>What is the Stanleys Family?</Header>
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
        <Section4></Section4>
      </Container>
    </Wrapper>
  );
};

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

const Border2 = styled.img`
  background-color: #6e91bb;
`;

const Header = styled.h2`
  ${font.header};
  ${font.size(36)}
  @media (max-width: 480px) {
    ${font.size(28)};
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
  margin-right: 10%;
  margin-left: 10%;

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

const TitleArea = styled.div`
  height: 300px;
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
  padding-left: 10%;
  padding-right: 10%;
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
  width: 100%;
  height: 0;
  position: relative;
  background-color: ${color.background['container']};
`;

const Section4 = styled.section`
  width: 100%;
  height: 1600px;
  position: relative;
  background-image: url(${repeatBg});
  background-color: ${color.background['container']};
`;

export default Landing;
