import styled from 'styled-components';
import { useEffect, useState, Fragment, useRef, useCallback } from 'react';
import { Link, Events } from 'react-scroll';
import { font } from 'shared/styles';
import MobileMenu from 'Project/MobileMenu';
import menuOpen from 'App/assets/images/menu-open.png';
import menuClose from 'App/assets/images/menu-close.png';
import Title from './Title';
import cornerLeft from 'App/assets/images/corner-left.png';
import cornerRight from 'App/assets/images/corner-right.png';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';

import { useScrollDirection } from 'react-use-scroll-direction';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigationVisible, setNavigationVisible] = useState(true);
  const freezeScrollState = useRef(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {
    isScrollingUp,
    isScrollingDown,
    scrollDirection,
  } = useScrollDirection();

  // TODO:
  // [ ] If below 200 pixels
  //     [ ] When scroll down & is visible, hide.
  //     [  ] When scroll up & is hidden, reveal.
  // [ ] If we hit the top, hide.
  //
  // One option is to make the resting place on top fixed.

  useEffect(() => {
    const handleNavigation = (e) => {
      if (freezeScrollState.current === false && window.scrollY > 200) {
        if (isScrollingUp) setNavigationVisible(true);
        if (isScrollingDown) setNavigationVisible(false);
      }
    };

    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [scrollDirection]);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      freezeScrollState.current = true;
      setIsMenuOpen(false);
    });
    Events.scrollEvent.register('end', () => {
      freezeScrollState.current = false;
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Fragment>
      <MobileMenu isMenuOpen={isMenuOpen} />
      <Wrapper displayNavigation={navigationVisible}>
        <Container>
          <Link to="intro" smooth={true} duration={500} offset={-150}>
            <AlignTitle>
              <Title />
            </AlignTitle>
          </Link>

          <Logo
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            The Stanleys
          </Logo>
          <DesktopLink
            to="who"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            Who are The Stanleys?
          </DesktopLink>
          <DesktopLink
            to="roadmap"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            Roadmap
          </DesktopLink>
          <DesktopLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
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

          <FloatingCorners>
            <CornerLeft src={cornerLeft} />
            <CornerRight src={cornerRight} />
          </FloatingCorners>

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

const FloatingCorners = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: -31px;
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
  display: flex;
  position: relative;
  align-items: center;
  max-width: 1650px;
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
  position: ${(props) => (props.displayNavigation ? 'fixed' : 'absolute')};

  background: ${(props) =>
    props.displayNavigation ? '#2b4f87' : 'transparent'};
`;

export default Navigation;
