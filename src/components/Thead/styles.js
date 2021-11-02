import styled, { css } from 'styled-components';

export const ContainerHead = styled.thead`
  ${({ theme }) => css`
    background: ${theme.colors.thead};
    height: 49px;
    color: #FFF;
  `}
`
