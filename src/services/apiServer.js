export const getAll = async () => {
  const url = 'http://localhost:3000/employess';

  try {
    const fetchAll = await fetch(url);
    const response = await fetchAll.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const searchEmployee = async (value) => {
  const url = `http://localhost:3000/employess?q=${value}`;

  try {
    const fetchAll = await fetch(url);
    const response = await fetchAll.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}
