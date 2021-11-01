export const convertPhone = (phone) => {
  const country = phone.slice(0, 2);
  const ddd = phone.slice(2, 4);
  const phone1 = phone.slice(4, 9);
  const phone2 = phone.slice(9);
  const telephone = `+${country} (${ddd}) ${phone1}-${phone2}`;
  return telephone;
}
