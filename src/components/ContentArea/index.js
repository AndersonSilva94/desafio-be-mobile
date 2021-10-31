import React from 'react';
import { Container, InputSearch, SectionSearch, Title } from './styles';

function ContentArea() {
  return (
    <Container>
      <SectionSearch>
        <Title>Funcionários</Title>
        <InputSearch placeholder="Pesquisar" />
      </SectionSearch>
    </Container>
  );
}

export default ContentArea;
