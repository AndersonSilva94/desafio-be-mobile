import React, { useEffect, useState } from 'react';
import { searchEmployee } from '../services/apiServer';
import EmployeesContext from './EmployeesContext';

function EmployeesProvider({ children }) {
  const [value, setValue] = useState('')
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const responseEmployees = await searchEmployee(value);
      setEmployees(responseEmployees);
    }
    // console.log('entrou no Effect')
    getEmployees();
  }, [value])

  return (
    <EmployeesContext.Provider value={{ employees, value, setValue }} >
      {children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesProvider;
