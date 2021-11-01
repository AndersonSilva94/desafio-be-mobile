import React, { useContext } from 'react';
import EmployeesContext from '../../context/EmployeesContext';
import { convertDate } from '../../utils/convertDate';
import { convertPhone } from '../../utils/convertPhone';
import { ContainerBody } from './styles';

function Tbody() {
  const { employees } = useContext(EmployeesContext)
  return (
    <ContainerBody>
      {employees && employees.map((employee) => (
        <tr key={employee.id} >
          <td>
            <img src={employee.image} alt={employee.name} />
          </td>
          <td>
            <p>{employee.name}</p>
          </td>
          <td>
            <p>{employee.job}</p>
          </td>
          <td>
            <p>{convertDate(employee.admission_date)}</p>
          </td>
          <td>
            <p>{convertPhone(employee.phone)}</p>
          </td>
        </tr>
      ))}
    </ContainerBody>
  );
}

export default Tbody;
