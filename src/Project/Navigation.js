import styled from 'styled-components';
import { useEffect, useState, Fragment, useRef } from 'react';
import { Link, Events } from 'react-scroll';
import { font } from 'shared/styles';
import MobileMenu from 'Project/MobileMenu';
import menuOpen from 'App/assets/images/menu-open.png';
import menuClose from 'App/assets/images/menu-close.png';
import Title from './Title';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigationVisible, setNavigationVisible] = useState(true);
  const prevScrollY = useRef(-1);

  useEffect(() => {
    const handleNavigation = e => {
      if (navigationVisible && window.scrollY > prevScrollY.current) setNavigationVisible(false);
      if (!navigationVisible && window.scrollY < prevScrollY.current) setNavigationVisible(true);
      prevScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleNavigation);
    return () => window.removeEventListener('scroll', handleNavigation);
  }, [navigationVisible]);

  const handleMenuClick = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
      enableBodyScroll(document.getElementById('root'));
    } else {
      setIsMenuOpen(true);
      disableBodyScroll(document.getElementById('root'));
    }
  };

  const handleCloseMenu = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
      enableBodyScroll(document.getElementById('root'));
    }
  };

  return (
    <Fragment>
      <MobileMenu handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      <Wrapper displayNavigation={navigationVisible}>
        <Container>
          <Link to="intro" smooth={true} onClick={handleCloseMenu} duration={500} offset={-150}>
            <AlignTitle>
              <Title />
            </AlignTitle>
          </Link>
          <Logo to="intro" smooth={true} duration={500} offset={-220}>
            The Stanleys
          </Logo>
          <DesktopLink to="who" smooth={true} duration={500} offset={-350}>
            Who are The Stanleys?
          </DesktopLink>
          <DesktopLink to="roadmap" smooth={true} duration={500} offset={-120}>
            Roadmap
          </DesktopLink>
          <DesktopLink to="team" smooth={true} duration={500} offset={-150}>
            Team
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
          <MobileMenuToggleButton>
            {isMenuOpen ? (
              <img onClick={handleMenuClick} src={menuClose} alt="" />
            ) : (
              <img onClick={handleMenuClick} src={menuOpen} alt="" />
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

const CornerLeft = styled.img``;
const CornerRight = styled.img``;

const AlignTitle = styled.div`
  position: absolute;
  display: none;
  left: 50%;
  z-index: 5000;
  top: -12px;
  transform: translate(-50%);

  @media (max-width: 1024px) {
    display: flex;
    top: 0px;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    transform: scale(0.8);
  }

  @media (max-width: 480px) {
    display: flex;
    top: -12px;
    transform: scale(0.7);
  }
`;

const MobileMenuToggleButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  display: none;
  z-index: 1000;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 480px) {
    right: 3%;
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
  &:before {
    content: '';
    position: absolute;
    background-color: transparent;
    bottom: -68px;
    height: 68px;
    width: 34px;
    border-top-left-radius: 34px;
    box-shadow: 0 -34px 0 0 #2b4f87;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;

    background-color: transparent;
    bottom: -68px;
    right: 0;
    height: 68px;
    width: 34px;
    border-top-right-radius: 34px;
    box-shadow: 0 -34px 0 0 #2b4f87;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  display: flex;
  position: relative;
  align-items: center;
  max-width: 1651px;
  width: 100%;
`;

const Wrapper = styled.div`
  position: fixed;
  justify-content: center;
  height: 100px;
  display: flex;
  z-index: 2000;
  padding-top: 15px;

  width: 100%;
  padding-right: 3%;
  padding-left: 3%;

  @media (max-width: 1024px) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    height: 85px;
  }

  transform: translateY(${props => (props.displayNavigation ? '0' : '-130px')});
  transition: 0.3s;

  position: fixed;
  background: #2b4f87;

  @media (max-width: 1024px) {
    transform: translateY(0);
  }
`;

export default Navigation;
