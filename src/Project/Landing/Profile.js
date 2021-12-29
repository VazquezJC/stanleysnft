import styled from 'styled-components';
import socialTwitter from 'App/assets/images/social_twitter.png';
import socialInstagram from 'App/assets/images/social_instagram.png';
import socialLinkedin from 'App/assets/images/social_linkedin.png';
import { font } from 'shared/styles';

const Profile = ({ person }) => {
  const combineNames = (name, nickname) => {
    let firstName = '';
    let lastName = '';

    if (person.name.length > 0) {
      [firstName, lastName] = name.split(' ');
      return firstName + ` "` + nickname + `" ` + lastName;
    }

    return nickname;
  };

  return (
    <Wrapper>
      <Identifier>
        <MobileNameContainer>
          <NameMobile>{person.name > 0 && person.name}</NameMobile>
          <AliasMobile>{person.nickname}</AliasMobile>
        </MobileNameContainer>
        <Name>{combineNames(person.name, person.nickname)}</Name>
        <SocialsContainer>
          <SocialIcons>
            {person.linkedin.length > 0 && (
              <SocialLink href={person.linkedin}>
                <img src={socialLinkedin} alt="" />
              </SocialLink>
            )}
            {person.twitter.length > 0 && (
              <SocialLink href={person.twitter}>
                <img src={socialTwitter} alt="" />
              </SocialLink>
            )}
            {person.instagram.length > 0 && (
              <SocialLink href={person.instagram}>
                <img src={socialInstagram} alt="" />
              </SocialLink>
            )}
          </SocialIcons>

          <SocialIcons></SocialIcons>
        </SocialsContainer>
      </Identifier>
      <Description>{person.description}</Description>
    </Wrapper>
  );
};

const SocialLink = styled.a`
  padding: 3px;
`;

const SocialIcons = styled.div`
  margin-left: 4px;
  position: absolute;
  display: flex;
  top: -3px;
  left: 0;
`;

const MobileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const SocialsContainerMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    margin-top: 8px;
    display: flex;
  }
`;

const Identifier = styled.div`
  display: flex;
`;

const SocialsContainer = styled.div`
  position: relative;
`;

const WhoContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  max-width: 1250px;
  x @media (max-width: 1024px) {
    align-items: flex-start;
    gap: 0;
  }
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 1024px) {
    row-gap: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  line-height: 28px;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-bottom: 35px;
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.div`
  display: flex;
  position: relative;
  ${font.size(20)}
  margin-bottom: 6px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NameMobile = styled.div`
  display: none;

  ${font.size(22)};
  @media (max-width: 480px) {
    margin-bottom: 4px;
    display: flex;
  }
`;

const AliasMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
  }
`;

const Description = styled.div`
  margin-left: 20px;
  font-style: italic;
  line-height: 24px;
  ${font.size(16)};

  @media (max-width: 1024px) {
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    margin-left: 15px;
  }
`;

export default Profile;
