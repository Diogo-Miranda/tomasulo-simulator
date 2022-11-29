import Styled from 'styled-components'

import { media } from '../GlobalStyle.css'

const StyledTable = Styled.table`
width: 100%;
border-collapse: collapse;
border-radius: 10px;
box-sizing: border-box;
${media['1275']`font-size: 14px;`}

tr {
  height: 40px;
  line-height: 0;
  ${media['600']`height: 35px`};
}

th,
td {
  text-align: left;
  padding: 15px;
  ${media['1275']`padding: 12px`};
  ${media['600']`padding: 8px`};
  border: 1px solid #e1e1e1;
  line-height: 16.1px;
}
`;

export default StyledTable;