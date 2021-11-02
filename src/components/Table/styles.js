import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;

    @media (max-width: 500px) {
      overflow-x: scroll;
    }
  `}
`

export const Container = styled.table`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 31px;
    border-collapse: collapse;

    @media (max-width: 1024px) {
      width: 960px;
    }

    tr {
      border-bottom: solid ${theme.colors.background} 1px;
    }
  `}
`;
