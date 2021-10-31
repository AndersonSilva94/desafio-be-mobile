import React from 'react';
import Table from '../Table';
import { Container, InputSearch, SectionSearch, Title } from './styles';

function ContentArea() {
  return (
    <Container>
      <SectionSearch>
        <Title>Funcionários</Title>
        <InputSearch placeholder="Pesquisar" />
      </SectionSearch>
      <Table />
    </Container>
  );
}

export default ContentArea;
