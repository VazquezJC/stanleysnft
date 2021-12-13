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
  cursor: pointer;
  position: relative;
`;

const Frame = styled.img`
  position: absolute;
  height: auto;
  left: -63px;
  width: 150px;

  @media (max-width: 1024px) {
    width: calc(150px * 0.8);
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 31px;
  left: -230px;
  height: auto;

  @media (max-width: 1024px) {
    left: -160px;
    width: calc(511px * 0.6);
  }
`;

const Portrait = styled.img`
  position: absolute;
  width: 81px;
  height: auto;
  top: 75px;
  left: -49px;

  @media (max-width: 1024px) {
    top: 60px;
    left: -51px;
    width: calc(81px * 0.8);
  }
`;

export default Title;
