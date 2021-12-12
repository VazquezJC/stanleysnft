import styled from 'styled-components';
import { Link } from 'react-scroll';

const MobileMenu = ({ isMenuOpen, handleMenuClose }) => {
  return (
    <Wrapper isOpen={isMenuOpen}>
      <MobileOverlayContents>
        <MobileLink
          onClick={handleMenuClose}
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Introduction
        </MobileLink>
        <MobileLink
          onClick={handleMenuClose}
          activeClass="active"
          className="timeline"
          to="whoare"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Who are the Stanleys?
        </MobileLink>
        <MobileLink
          onClick={handleMenuClose}
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Roadmap
        </MobileLink>
        <MobileLink
          onClick={handleMenuClose}
          activeClass="active"
          to="creators"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Who are the Creators?
        </MobileLink>
      </MobileOverlayContents>
    </Wrapper>
  );
};

const MobileLink = styled(Link)`
  margin-bottom: 50px;
  padding: px;
  cursor: pointer;
  font-size: 22px;
`;

const MobileOverlayContents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0%' : '100%')};
  z-index: 1000;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  transition: left 0.1s linear;
  text-align: center;
  backdrop-filter: blur(10px);
  background-color: rgb(55 96 160 / 80%);
`;

export default MobileMenu;
