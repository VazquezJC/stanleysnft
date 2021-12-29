import styled from 'styled-components';
import frame from 'App/assets/images/frame.png';
import title from 'App/assets/images/title.png';
import portrait from 'App/assets/images/frame-temp.png';

const Title = () => {
  return (
    <TitleArea>
      <Framer>
        <Frame src={frame} />
        <Logo src={title} />
        <Portrait src={portrait} />
      </Framer>
    </TitleArea>
  );
};

const Framer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleArea = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    cursor: pointer;
  }
`;

const Frame = styled.img`
  position: absolute;
  height: auto;
  top: -5px;
  left: -63px;
  width: 150px;

  @media (max-width: 1024px) {
    width: calc(150px * 0.8);
  }

  @media (max-width: 480px) {
    width: calc(150px * 0.8);
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 24px;
  left: -230px;
  height: auto;

  @media (max-width: 1024px) {
    left: -160px;
    width: calc(511px * 0.6);
  }

  @media (max-width: 480px) {
    left: -160px;
    width: calc(511px * 0.6);
  }
`;

const Portrait = styled.img`
  position: absolute;
  width: 81px;
  height: auto;
  top: 70px;
  left: -49px;

  @media (max-width: 1024px) {
    top: 55px;
    left: -51px;
    width: calc(81px * 0.8);
  }

  @media (max-width: 480px) {
    top: 55px;
    left: -51px;
    width: calc(81px * 0.8);
  }
`;

export default Title;
