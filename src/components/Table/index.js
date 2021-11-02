import React from 'react';
import Tbody from '../Tbody';
import Thead from '../Thead';
import { Container, Wrapper } from './styles';

function Table() {
  return (
    <Wrapper>
      <Container cellSpacing="0">
        <Thead />
        <Tbody />
      </Container>
    </Wrapper>
  );
}

export default Table;
