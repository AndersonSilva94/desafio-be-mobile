const removeSpecialCaracters = (elem) => {
  return elem.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();
}

const filterByName = ({ name }, value) => {
  return removeSpecialCaracters(name).includes(value);
};

const filterByJob = ({ job }, value) => {
  return removeSpecialCaracters(job).includes(value);
};

export const filterValue = (elem, value) => {
  const valueConverted = removeSpecialCaracters(value);
  const valueFiltered = filterByName(elem, valueConverted)
    || filterByJob(elem, valueConverted);
  return valueFiltered;
};
