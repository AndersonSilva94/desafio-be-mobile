import React from 'react';
import Tbody from '../Tbody';
import Thead from '../Thead';
import { Container } from './styles';

function Table() {
  return (
    <Container cellSpacing="0">
      <Thead />
      <Tbody />
    </Container>
  );
}

export default Table;
