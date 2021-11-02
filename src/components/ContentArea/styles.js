import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
    height: 100vh;
    background: ${theme.colors.background};
  `}
`;

export const SectionSearch = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    position: relative;

    @media (max-width: 500px) {
      flex-direction: column-reverse;
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.text};

    @media (max-width: 500px) {
      margin-top: 20px;
    }
  `}
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    width: 282px;
    height: 40px;
    padding: 0.5rem;
    border: 1px solid ${theme.colors.border}
    border-radius: 4px;

    @media (max-width: 500px) {
      width: 100%;
    }
  `}
`

export const ImgSearch = styled.img`
  ${() => css`
    position: absolute;
    bottom: 8px;
    right: 5px;
    width: 24px;
    height: 24px;

    @media (max-width: 500px) {
      top: 8px;
    }
  `}
`;
