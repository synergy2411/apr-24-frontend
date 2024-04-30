import React, { Fragment } from "react";

function Expenses() {
  let expense = {
    id: "e001",
    title: "Grocery",
    amount: 19,
    createdAt: new Date("Dec 20, 2023"),
  };

  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center">My Expenses</h2>
        <div className="card">
          <div className="card-header">
            <h5>{expense.title.toUpperCase()}</h5>
          </div>
          <div className="card-body">
            <p>Amount : {expense.amount}</p>
            <p>Date : {expense.createdAt.toISOString()}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Expenses;
