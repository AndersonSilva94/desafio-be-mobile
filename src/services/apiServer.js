import { filterValue } from '../utils/filterValue';

export const searchEmployee = async (value) => {
  const url = 'http://localhost:3000/employess';

  try {
    const fetchAll = await fetch(url);
    const response = await fetchAll.json();
    const responseFilter = response.filter((elem) => filterValue(elem, value))
    return responseFilter;
  } catch (err) {
    console.log(err);
  }
}
