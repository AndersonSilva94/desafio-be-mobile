import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${() => css`
    margin-top: 31px;
    border-collapse: collapse;

    tr {
      border-bottom: solid #F0F0F0 1px;
    }
  `}
`;
