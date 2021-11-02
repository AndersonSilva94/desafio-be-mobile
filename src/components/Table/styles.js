import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${({ theme }) => css`
    margin-top: 31px;
    border-collapse: collapse;

    tr {
      border-bottom: solid ${theme.colors.background} 1px;
    }
  `}
`;
