function ExpenseFilter({ onSelectedYear }) {
  const yearChangeHandler = (event) => onSelectedYear(event.target.value);

  return (
    <select className="form-control" onChange={yearChangeHandler}>
      <option value="">Select Year</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
}

export default ExpenseFilter;
