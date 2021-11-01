import React, { useContext } from 'react';
import EmployeesContext from '../../context/EmployeesContext';
import Table from '../Table';
import { Container, ImgSearch, InputSearch, SectionSearch, Title } from './styles';
import Icon from '../../assets/Vector.svg';

function ContentArea() {
  const { value, setValue } = useContext(EmployeesContext);

  return (
    <Container>
      <SectionSearch>
        <Title>Funcionários</Title>
        <InputSearch
          placeholder="Pesquisar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ImgSearch src={Icon} />
      </SectionSearch>
      <Table />
    </Container>
  );
}

export default ContentArea;
