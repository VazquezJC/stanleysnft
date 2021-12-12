import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { font } from 'shared/styles';

const Navigation = () => {
  const [isMenuOpen, setIsMnueOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [isScrollDistanceFar, setIsScrollDistanceFar] = useState(false);
  const handleClick = () => {
    setIsMnueOpen(!isMenuOpen);
  };

  var currentScrollPos = 0;
  var isVisible = true;
  var scrolledFar = false;

  const handleNavBar = () => {
    if (window.scrollY > currentScrollPos && window.scrollY > 100) {
      if (isVisible) {
        isVisible = false;
        setIsBarVisible(false);
      }
    } else {
      if (!isVisible) {
        isVisible = true;
        setIsBarVisible(true);
      }
    }

    if (window.scrollY > 100) {
      if (scrolledFar === false) {
        setIsScrollDistanceFar(true);
        console.log('Set to true! ', isScrollDistanceFar);
        scrolledFar = true;
      }
    } else if (window.scrollY <= 100) {
      if (scrolledFar === true) {
        setIsScrollDistanceFar(false);
        console.log('Set to false! ', isScrollDistanceFar);
        scrolledFar = false;
      }
    }

    currentScrollPos = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavBar);
    return () => window.removeEventListener('scroll', handleNavBar);
  }, []);

  const handleMenuClose = () => {
    if (isMenuOpen) {
      setIsMnueOpen(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title
          to="introduction"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          The Stanleys
        </Title>
        <DesktopLink
          activeClass="active"
          className="news"
          to="introduction"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          Introduction
        </DesktopLink>
        <DesktopLink
          activeClass="active"
          to="whoare"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          Who are the Stanleys?
        </DesktopLink>
        <DesktopLink
          activeClass="active"
          className="news"
          to="roadmap"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          Roadmap
        </DesktopLink>
        <DesktopLink
          activeClass="active"
          className="news"
          to="creators"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          Who are the Creators?
        </DesktopLink>
      </Container>
    </Wrapper>
  );
};

const Title = styled(Link)`
  ${font.header};
  ${font.size(24)};
  cursor: pointer;
`;

const DesktopLink = styled(Link)`
  margin-left: 40px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 80px;
  max-width: 1650px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2a4f80;
`;

export default Navigation;
