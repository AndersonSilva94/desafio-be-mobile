import React from 'react';
import { ContainerHead } from './styles';

function Thead() {
  return (
    <ContainerHead>
      <tr>
        <th>FOTO</th>
        <th>NOME</th>
        <th>CARGO</th>
        <th>DATA DE ADMISSÃO</th>
        <th>TELEFONE</th>
      </tr>
    </ContainerHead>
  );
}

export default Thead;
