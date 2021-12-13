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

import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [isScrollDistanceFar, setIsScrollDistanceFar] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
      setIsMenuOpen(false);
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
          <Link
            to="introduction"
            smooth={true}
            duration={500}
            offset={-150}
            onClick={handleMenuClose}
          >
            <AlignTitle>
              <Title />
            </AlignTitle>
          </Link>

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
          <Socials>
            <LinkOut href="https://twitter.com/StanleysNFT">
              <TwitterIcon src={twitterIcon} alt="" />
              <TwitterLink>Twitter</TwitterLink>
            </LinkOut>
            <LinkOut href="https://t.co/1Emyr0KD1t">
              <DiscordIcon src={discordIcon} alt="" />
              <DiscordLink>Discord</DiscordLink>
            </LinkOut>
          </Socials>

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

const LinkOut = styled.a`
  display: flex;
`;

const DiscordIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;

  @media (max-width: 1280px) {
    width: 32px;
    height: 32px;
  }
`;

const TwitterIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;

  @media (max-width: 1280px) {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

const Links = styled.div``;

const Socials = styled.div`
  position: absolute;
  right: 0;
  margin-right: 4%;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const OutboundLink = styled.div`
  margin-right: 40px;
  cursor: pointer;
  display: flex;
`;

const TwitterLink = styled(OutboundLink)`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const DiscordLink = styled(OutboundLink)`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const CornerLeft = styled.div``;
const CornerRight = styled.div``;

const FloatingCorners = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: -35px;
  width: 1650px;

  @media (max-width: 1650px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    display none;
  }
`;

const AlignTitle = styled.div`
  position: absolute;
  display: none;
  left: 50%;
  top: -12px;
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
  position: relative;
  align-items: center;
  max-width: 1650px;
  width: 100%;
  width: 100%;
  display: ${(props) => (props.isBarVisible ? 'flex' : 'none')};
`;

const Wrapper = styled.div`
  position: fixed;
  justify-content: center;
  padding-top: 20px;
  height: 100px;
  display: flex;
  z-index: 2000;

  width: 100%;
  padding-right: 3%;
  padding-left: 3%;

  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    height: 85px;
  }

  position: ${(props) =>
    props.isScrollDistanceFar && props.isBarVisible ? 'fixed' : 'absolute'};

  background: ${(props) =>
    props.isScrollDistanceFar && props.isBarVisible
      ? '#2b4f87'
      : 'transparent'};
`;

export default Navigation;
