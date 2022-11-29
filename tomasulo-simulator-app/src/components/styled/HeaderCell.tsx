import Styled from 'styled-components'
import { media } from '../GlobalStyle.css'

const HeaderCell = Styled.th`
    font-size: 1rem;
    ${media['1275']`font-size: 14px;`}
    font-weight: 500;
    height: 40px;
    ${media['600']`height: 35px`};
    white-space: nowrap;
    color: #6d7187;
    background-color: #f9f9fb;
`;

export default HeaderCell;