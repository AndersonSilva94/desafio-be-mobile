import styled, { css } from 'styled-components';

export const ContainerBody = styled.tbody`
  ${({ theme }) => css`
    tr {
      background: ${theme.colors.tbody};
      height: 49px;
      border-top: 1px solid ${theme.colors.border};

      td {
        text-align: center;
        color: ${theme.colors.text};

        img {
          vertical-align: middle;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
      }
    }
  `}
`
