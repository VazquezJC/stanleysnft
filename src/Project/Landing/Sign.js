import styled from 'styled-components';
import signTop from 'App/assets/images/roadmap-progress-sign-top.png';
import signBottom from 'App/assets/images/roadmap-progress-sign-bottom.png';
import signMiddle1 from 'App/assets/images/roadmap-progress-sign-middle1.png';

const Sign = ({ text, coordinates, depth }) => {
  return (
    <SignContainer coordinates={coordinates} depth={depth}>
      <SignTop src={signTop} alt="" />
      <Asdf>{text}</Asdf>
      <SignBottom src={signBottom} alt="" />
    </SignContainer>
  );
};

const SignBottom = styled.img``;
const Asdf = styled.div`
  padding: 10px;
  width: 139px;
  display: flex;
  justify-content: center;
  text-shadow: -1px -1px #894b22, 2px -1px 2px #894b22;
  align-items: center;
  text-align: center;
  line-height: 22px;
  background: url(${signMiddle1});
  background-repeat: repeat-y;
`;

const SignTop = styled.img``;

const SignContainer = styled.div`
  position: absolute;
  ${props => `left: ${props.coordinates.x}px; top: ${props.coordinates.y}px;`}
  display: flex;
  width: 139px;
  height: 100%;
  flex-direction: column;
  z-index: ${props => props.depth + 100};
`;

export default Sign;
