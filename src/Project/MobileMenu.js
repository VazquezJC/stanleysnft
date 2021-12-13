import styled from 'styled-components';
import { Link } from 'react-scroll';
import discordMobile from 'App/assets/images/discord_mobile.png';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';
import { font } from 'shared/styles';

const MobileMenu = ({ isMenuOpen, handleMenuClose }) => {
  return (
    <Wrapper isOpen={isMenuOpen}>
      <MobileOverlayContents>
        <MobileLink
          onClick={handleMenuClose}
          className="timeline"
          to="who"
          spy={true}
          smooth={true}
          duration={500}
          offset={-130}
        >
          Who are The Stanleys?
        </MobileLink>
        <MobileLink
          onClick={handleMenuClose}
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
          to="team"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Team
        </MobileLink>
        <LinkOut href="https://twitter.com/StanleysNFT">
          <TwitterIcon src={twitterIcon} />
          Twitter
        </LinkOut>
        <LinkOut href="https://t.co/1Emyr0KD1t">
          <DiscordIcon src={discordIcon} />
          Discord
        </LinkOut>
      </MobileOverlayContents>
    </Wrapper>
  );
};

const LinkOut = styled.a`
  margin-bottom: 50px;
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
  margin-bottom: 50px;
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
  transition: ${(props) =>
    props.isOpen ? 'left 0.1s ease-out' : 'left 0.05s ease-out'};
  text-align: center;
  backdrop-filter: blur(6px);
  background-color: rgb(55 96 160 / 80%);
`;

export default MobileMenu;
