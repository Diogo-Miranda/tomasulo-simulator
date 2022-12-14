import Styled from 'styled-components'

import { media } from '../GlobalStyle.css'

const TableWrapper = Styled.div`
overflow: auto;
max-width: 100%;
margin: 0px auto 20px auto;
${media['600']`
margin: 0px auto 0px auto;
`}
background:
linear-gradient(to right, white 30%, rgba(255,255,255,0)),
linear-gradient(to right, rgba(255,255,255,0), white 70%) 0 100%,
radial-gradient(farthest-side at 0% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)),
radial-gradient(farthest-side at 100% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
background-repeat: no-repeat;
background-color: white;
background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
background-position: 0 0, 100%, 0 0, 100%;
background-attachment: local, local, scroll, scroll;
`;

export default TableWrapper;