import React, { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

function Expenses() {
  let expenses = [
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

  const [show, setShow] = useState(false);

  const clickHandler = () => setShow(!show);

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
        </div>
        {show && <ExpenseForm />}

        <div className="row">
          <ExpenseItem expense={expenses[0]} />
          <ExpenseItem expense={expenses[1]} />
          <ExpenseItem expense={expenses[2]} />
        </div>
      </div>
    </Fragment>
  );
}

export default Expenses;
