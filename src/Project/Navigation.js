import styled from 'styled-components';
import { useEffect, useState, Fragment, useRef } from 'react';
import { Link } from 'react-scroll';
import { font } from 'shared/styles';
import MobileMenu from 'Project/MobileMenu';
import menuOpen from 'App/assets/images/menu-open.png';
import menuClose from 'App/assets/images/menu-close.png';
import Title from './Title';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { isMobileOnly } from 'react-device-detect';
import Icon from 'shared/Icon';

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
    <>
      <MobileMenu handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      <Wrapper aria-expanded={navigationVisible && !isMobileOnly ? true : false} displayNavigation={navigationVisible}>
        <Container aria-hidden={navigationVisible && !isMobileOnly ? false : true}>
          <Link to="intro" smooth={true} onClick={handleCloseMenu} duration={500} offset={-150}>
            <AlignTitle>
              <Title />
            </AlignTitle>
          </Link>
          <DesktopMenu>
            <Logo tabIndex="0" to="intro" smooth={true} duration={500} offset={-240}>
              The Stanleys
            </Logo>
            <MainLinks>
              <Item>
                <DesktopLink tabIndex="0" to="who" smooth={true} duration={500} offset={-60}>
                  Who are The Stanleys?
                </DesktopLink>
              </Item>
              <Item>
                <DesktopLink tabIndex="0" to="roadmap" smooth={true} duration={500} offset={-220}>
                  Roadmap
                </DesktopLink>
              </Item>
              <Item>
                <DesktopLink tabIndex="0" to="team" smooth={true} duration={500} offset={0}>
                  Team
                </DesktopLink>
              </Item>
            </MainLinks>
            <SocialLinks>
              <Item>
                <Linkout tabIndex="0" href="https://twitter.com/StanleysNFT">
                  <TwitterSvg viewBox="0 0 455.731 455.731">
                    <rect x="0" y="0" fill="#50ABF1" width="455.731" height="455.731" />
                    <path
                      fill="#FFF"
                      d="M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18
		c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107
		c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207
		c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78
		c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423
		c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272
		c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z"
                    />
                  </TwitterSvg>
                  {/* <Icon src={twitterIcon} alt="" /> */}
                  <Text>Twitter</Text>
                </Linkout>
              </Item>
              <Item>
                <Linkout tabIndex="0" href="https://t.co/1Emyr0KD1t">
                  <DiscordSvg viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z"
                    />
                    <path
                      fill="#fff"
                      d="M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z"
                    />
                  </DiscordSvg>
                  {/* <Icon src={discordIcon} alt="" /> */}
                  <Text>Discord</Text>
                </Linkout>
              </Item>
            </SocialLinks>
          </DesktopMenu>
          <MobileMenuToggleButton>
            {isMenuOpen ? (
              <img aria-label="Close Mobile Menu" onClick={handleMenuClick} src={menuClose} alt="" />
            ) : (
              <img aria-label="Open Mobile Menu" onClick={handleMenuClick} src={menuOpen} alt="" />
            )}
          </MobileMenuToggleButton>
        </Container>
      </Wrapper>
    </>
  );
};

const Svg = styled(Icon)`
  @media (max-width: 1280px) {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

const TwitterSvg = styled(Svg)`
  width: 20px;
  height: 20px;
  margin-right: 9px;

  @media (max-width: 1280px) {
    width: 30px;
    height: 30px;
    &:first-child {
      margin-right: 0;
    }
  }
`;

const DiscordSvg = styled(Svg)`
  width: 28px;
  height: 28px;
  height: 48px;
  margin-right: 5px;
  @media (max-width: 1280px) {
    width: 40px;
    height: 40px;
  }
`;

const Item = styled.li``;

const MainLinks = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 40px;
`;

const DesktopMenu = styled.div`
  display: flex;
  column-gap: 40px;
  height: 32px;
  justify-content: center;
  width: 90%;
`;

const Linkout = styled.a`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

// const Icon = styled.img`
//   width: 18px;
//   height: 18px;
//   margin-right: 5px;

//   @media (max-width: 1280px) {
//     width: 32px;
//     height: 32px;

//     &:first-child {
//       margin-right: 10px;
//     }
//   }
// `;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Text = styled.div`
  cursor: pointer;
  display: flex;
  @media (max-width: 1280px) {
    display: none;
  }
`;

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
    right: 3%;
  }

  @media (max-width: 480px) {
  }
`;

const Logo = styled(Link)`
  width: 300px;
  display: flex;
  justify-content: center;
  ${font.header};
  ${font.size(24)};
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DesktopLink = styled(Link)`
  cursor: pointer;
  align-items: center;
  display: flex;

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
    left: 0;
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
  justify-content: center;
  align-items: center;
  max-width: 1651px;
  width: 100%;
`;

const Wrapper = styled.nav`
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

// //#endregion2b4f87 dark bg
// #3a69a7 light bg

export default Navigation;
