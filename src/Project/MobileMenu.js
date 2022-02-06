import styled from 'styled-components';
import { Link } from 'react-scroll';
import twitterIcon from 'App/assets/images/twitter.png';
import discordIcon from 'App/assets/images/discord.png';
import { font } from 'shared/styles';
import Icon from 'shared/Icon';

const MobileMenu = ({ isMenuOpen, handleMenuClick }) => {
  return (
    <Wrapper isOpen={isMenuOpen} aria-expanded={isMenuOpen ? 'true' : 'false'}>
      <MobileOverlayContents aria-hidden={isMenuOpen ? 'false' : 'true'}>
        <Column>
          <Item>
            <MobileLink to="who" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-80}>
              Who are The Stanleys?
            </MobileLink>
          </Item>
          <Item>
            <MobileLink to="roadmap" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-80}>
              Roadmap
            </MobileLink>
          </Item>
          <Item>
            <MobileLink to="team" onClick={handleMenuClick} smooth={'easeOutQuint'} duration={500} offset={-80}>
              Team
            </MobileLink>
          </Item>
        </Column>
        <Column>
          <Item>
            <LinkOut href="https://twitter.com/StanleysNFT">
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
              {/* <TwitterIcon src={twitterIcon} alt="Twitter Icon" /> */}
              Twitter
            </LinkOut>
          </Item>
          <Item>
            <LinkOut href="https://t.co/1Emyr0KD1t">
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
              {/* <DiscordIcon src={discordIcon} alt="Discord Icon" /> */}
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
  row-gap: 50px;
  flex-direction: column;

  @media (max-width: 360px) {
    row-gap: 30px;
  }
`;

const LinkOut = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${font.size(24)};

  @media (max-width: 480px) {
    ${font.size(22)};
  }
`;

const TwitterSvg = styled(Icon)`
  @media (max-width: 1280px) {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
`;

const DiscordSvg = styled(Icon)`
  @media (max-width: 1280px) {
    width: 34px;
    height: 34px;
    margin-right: 4px;
  }
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

  ${font.size(24)};

  @media (max-width: 480px) {
    ${font.size(22)};
  }
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
  row-gap: 50px;

  @media (max-width: 360px) {
    row-gap: 30px;
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
