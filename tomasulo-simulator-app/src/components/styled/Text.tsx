import Styled, { keyframes } from 'styled-components';
import { media } from '../GlobalStyle.css'

const Text = Styled.p`
margin: 0;
padding: 0;
${media['600']`
  font-size: 14px;
`}
`;

export default Text;