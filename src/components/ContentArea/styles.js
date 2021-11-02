import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
    height: 740px;
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
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.text};
  `}
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    width: 282px;
    height: 40px;
    padding: 0.5rem;
    border: 1px solid ${theme.colors.border}
    border-radius: 4px;
  `}
`

export const ImgSearch = styled.img`
  ${() => css`
    position: absolute;
    bottom: 8px;
    right: 5px;
    width: 24px;
    height: 24px;
  `}
`;
