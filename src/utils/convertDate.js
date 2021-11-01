export const convertDate = (date) => {
  const [year, hour] = date.split('T');
  const newDate = year.split('-').reverse().join('/')
  return newDate;
}
