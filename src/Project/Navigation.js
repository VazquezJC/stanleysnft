import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { font } from 'shared/styles';
import MobileMenu from 'Project/MobileMenu';
import menuOpen from 'App/assets/images/menu-open.png';
import menuClose from 'App/assets/images/menu-close.png';
import { Fragment } from 'react';
import Title from './Title';
import cornerLeft from 'App/assets/images/corner-left.png';
import cornerRight from 'App/assets/images/corner-right.png';

const Navigation = () => {
  const [isMenuOpen, setIsMnueOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [isScrollDistanceFar, setIsScrollDistanceFar] = useState(false);
  const handleClick = () => {
    setIsMnueOpen(!isMenuOpen);
  };

  const handleTitleClick = () => {
    window.scrollTo(0, 0);
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
    <Fragment>
      <MobileMenu isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
      <Wrapper
        isScrollDistanceFar={isScrollDistanceFar}
        isBarVisible={isBarVisible}
      >
        <Container isBarVisible={isBarVisible}>
          <AlignTitle onClick={handleTitleClick}>
            <Title />
          </AlignTitle>

          <Logo
            to="introduction"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            The Stanleys
          </Logo>
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
          <FloatingCorners>
            <CornerLeft>
              <img src={cornerLeft} alt="" />
            </CornerLeft>
            <CornerRight>
              <img src={cornerRight} alt="" />
            </CornerRight>
          </FloatingCorners>
          <MobileMenuToggleButton>
            {isMenuOpen ? (
              <img onClick={handleClick} src={menuClose} alt="" />
            ) : (
              <img onClick={handleClick} src={menuOpen} alt="" />
            )}
          </MobileMenuToggleButton>
        </Container>
      </Wrapper>
    </Fragment>
  );
};

const CornerLeft = styled.div``;
const CornerRight = styled.div``;

const FloatingCorners = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: -35px;

  @media (max-width: 1024px) {
    display none;
  }
`;

const AlignTitle = styled.div`
  position: absolute;
  display: none;
  left: 50%;
  top: 0;
  transform: translate(-50%);

  @media (max-width: 1024px) {
    display: flex;
    transform: scale(0.7);
  }
`;

const MobileMenuToggleButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10%;
  display: none;
  z-index: 1000;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Logo = styled(Link)`
  ${font.header};
  ${font.size(24)};
  cursor: pointer;
  margin-left: 8%;
  margin-right: 20px;

  @media (max-width: 1024px) {
    margin-left: 11%;
    display: none;
  }
`;

const DesktopLink = styled(Link)`
  margin-left: 40px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1650px;
  width: 100%;

  width: 100%;
  display: ${(props) => (props.isBarVisible ? 'flex' : 'none')};
`;

const Wrapper = styled.div`
  position: fixed;
  padding-top: 20px;
  height: 90px;
  display: flex;
  justify-content: center;
  z-index: 2000;

  width: 94%;
  margin-right: 3%;
  margin-left: 3%;

  @media (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  position: ${(props) =>
    props.isScrollDistanceFar && props.isBarVisible ? 'fixed' : 'absolute'};

  background: ${(props) =>
    props.isScrollDistanceFar && props.isBarVisible
      ? '#374e85'
      : 'transparent'};

  @media (max-width: 1024px) {
    background: transparent;
  }
`;

export default Navigation;
