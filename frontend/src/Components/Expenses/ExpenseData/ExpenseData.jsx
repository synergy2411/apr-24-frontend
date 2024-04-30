function ExpenseData({ createdAt }) {
  const year = createdAt.getFullYear();

  const day = createdAt.toLocaleString("en-US", { day: "numeric" });

  const month = createdAt.toLocaleString("en-US", { month: "long" });

  return (
    <p>
      Date : {month} {day}, {year}
    </p>
  );
}

export default ExpenseData;
