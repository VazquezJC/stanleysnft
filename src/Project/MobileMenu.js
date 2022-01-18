import styled from 'styled-components';
import { Link } from 'react-scroll';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';
import { font } from 'shared/styles';

const MobileMenu = ({ isMenuOpen, handleMenuClick }) => {
  return (
    <Wrapper isOpen={isMenuOpen} aria-expanded={isMenuOpen ? 'true' : 'false'}>
      <MobileOverlayContents aria-hidden={isMenuOpen ? 'false' : 'true'}>
        <Column>
          <Item>
            <MobileLink to="who" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-130}>
              Who are The Stanleys?
            </MobileLink>
          </Item>
          <Item>
            <MobileLink to="roadmap" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-130}>
              Roadmap
            </MobileLink>
          </Item>
          <Item>
            <MobileLink to="team" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-130}>
              Team
            </MobileLink>
          </Item>
        </Column>
        <Column>
          <Item>
            <LinkOut href="https://twitter.com/StanleysNFT">
              <TwitterIcon src={twitterIcon} alt="Twitter Icon" />
              Twitter
            </LinkOut>
          </Item>
          <Item>
            <LinkOut href="https://t.co/1Emyr0KD1t">
              <DiscordIcon src={discordIcon} alt="Discord Icon" />
              Discord
            </LinkOut>
          </Item>
        </Column>
      </MobileOverlayContents>
    </Wrapper>
  );
};

const Item = styled.li``;

const Column = styled.ul`
  display: flex;
  row-gap: 30px;
  flex-direction: column;

  @media (max-width: 768px) {
    row-gap: 50px;
  }
`;

const LinkOut = styled.a`
  padding: px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.size(22)};
`;

const DiscordIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 9px;

  @media (max-width: 1280px) {
    width: 32px;
    height: 32px;
  }
`;

const TwitterIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 9px;

  @media (max-width: 1280px) {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

const DiscordImage = styled.img`
  width: 30px;
  height: auto;
`;

const OutboundMobileLink = styled.div`
  color: #50abf1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding: px;
  cursor: pointer;
  font-size: 22px;
`;

const MobileLink = styled(Link)`
  cursor: pointer;
`;

const MobileOverlayContents = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  row-gap: 30px;

  @media (max-width: 768px) {
    row-gap: 50px;
  }

  @media only screen and (max-height: 575.98px) and (orientation: landscape) {
    flex-direction: row;
    column-gap: 50px;

    transform: translate(-50%);
    row-gap: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0%' : '100%')};
  z-index: 1000;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  transition: ${props => (props.isOpen ? 'left 0.1s ease-out' : 'left 0.05s ease-out')};
  text-align: center;
  backdrop-filter: blur(6px);
  background-color: rgb(55 96 160 / 80%);
`;

export default MobileMenu;
