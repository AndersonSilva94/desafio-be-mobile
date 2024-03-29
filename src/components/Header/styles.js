import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.8rem 2rem;
    background: #1C1C1C;
    height: 60px;
  `}
`;

export const LogoImg = styled.img`
  ${() => css``}
`;

export const IconsImg = styled.img`
  ${() => css`
    width: 15px;
    height: 15px;
    margin-top: 5px;
    margin-left: 10px;
  `}
`;
