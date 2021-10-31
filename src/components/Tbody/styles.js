import styled, { css } from 'styled-components';

export const ContainerBody = styled.tbody`
  ${() => css`
    tr {
      background: #FFF;
      height: 49px;
      border-top: 1px solid #CDCDCD;

      td {
        text-align: center;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
      }
    }
  `}
`
