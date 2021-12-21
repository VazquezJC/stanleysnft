import styled from 'styled-components';
import { Fragment } from 'react';
import { font } from 'shared/styles';

const Header = styled.h2`
  position: relative;
  ${font.header};
  z-index: 5;
  font-weight: 500;
  line-height: 48px;
  ${font.size(36)}
  @media (max-width: 480px) {
    ${font.size(28)};
  }
`;

const Paragraph = styled.p`
  ${font.regular};
  z-index: 15;
  ${font.size(20)}
  line-height: 32px;
  @media (max-width: 1024px) {
    ${font.size(18)};
  }
  @media (max-width: 480px) {
    ${font.size(18)};
  }
`;

const Italic = styled.em`
  font-style: italic;
  font-weight: 600;
`;

export const header1 = <Header>What is The Stanleys?</Header>;

export const body1 = (
  <>
    <Paragraph>
      <Italic>The Stanleys</Italic> is an artful representation of the growing
      international culture curiosity of young adults. Our objective is simple,
      help others to achieve international cultural awareness. We will be the
      first 100% community owned project and will harness the power of the
      community to generate profits and share them with the members.
    </Paragraph>
    <Paragraph>
      The first art models were created by teens in our circle of families and
      friends. These models became the foundation of unique characters that we
      hope you find interesting and playful, as we do.
    </Paragraph>
    <Paragraph>
      Come visit us and experience a sincere and safe environment.
    </Paragraph>
  </>
);
