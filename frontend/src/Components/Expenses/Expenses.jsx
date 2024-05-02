import React, { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

let INITIAL_EXPENSES = [
  {
    id: "e001",
    title: "Grocery",
    amount: 19,
    createdAt: new Date("Dec 20, 2023"),
  },
  {
    id: "e002",
    title: "shopping",
    amount: 32,
    createdAt: new Date("Mar 2, 2024"),
  },
  {
    id: "e003",
    title: "Insurance",
    amount: 59,
    createdAt: new Date("Sep 15, 2022"),
  },
];

function Expenses() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const [show, setShow] = useState(false);

  const [selYear, setSelYear] = useState("");

  const clickHandler = () => setShow(!show);

  const onFormClose = () => setShow(false);

  const onAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    onFormClose();
  };

  const onDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const onSelectedYear = (selectedYear) => {
    setSelYear(selectedYear);
  };

  let filteredExpenses = expenses;
  if (selYear.trim() !== "") {
    filteredExpenses = expenses.filter(
      (expense) => expense.createdAt.getFullYear().toString() === selYear
    );
  }

  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center">My Expenses</h2>

        <div className="row mb-4">
          <div className="col-4 offset-4">
            <div className="d-grid">
              <button className="btn btn-primary" onClick={clickHandler}>
                {show ? "Hide" : "Show"} Form
              </button>
            </div>
          </div>
          <div className="col-4">
            <ExpenseFilter onSelectedYear={onSelectedYear} />
          </div>
        </div>
        {show && (
          <ExpenseForm onFormClose={onFormClose} onAddExpense={onAddExpense} />
        )}

        <div className="row">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Expenses;
