import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 31px;

    h1 {
      color: ${theme.colors.text};
    }
  `}
`;
