import styled from 'styled-components';
import { font } from 'shared/styles';

const Soon = () => {
  return <Text>stanleysnft.com coming soon!</Text>;
};

const Text = styled.div`
  ${font.header};
  ${font.size(36)}
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Soon;
