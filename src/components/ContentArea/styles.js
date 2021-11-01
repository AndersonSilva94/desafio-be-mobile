import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
    height: 740px;
    background: #F0F0F0;
  `}
`;

export const SectionSearch = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  `}
`

export const Title = styled.h4`
  ${() => css`
    font-size: 24px;
  `}
`

export const InputSearch = styled.input`
  ${() => css`
    width: 282px;
    height: 40px;
    padding: 0.5rem;
    border: 1px solid #CDCDCD
    border-radius: 4px;
  `}
`
