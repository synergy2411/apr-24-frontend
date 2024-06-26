import { useState } from "react";
import { v4 } from "uuid";

function ExpenseForm({ onFormClose, onAddExpense }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const createdAtChangeHandler = (event) =>
    setEnteredCreatedAt(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      createdAt: new Date(enteredCreatedAt),
    };
    onAddExpense(newExpense);
  };

  return (
    <div className="backdrop">
      <div className="my-modal">
        <h1 className="my-background text-center">Add New Expense</h1>
        <form onSubmit={submitHandler}>
          {/* Title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
            <label htmlFor="title">Title</label>
          </div>

          {/* Amount */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              placeholder=""
              step="0.1"
              min="1.0"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
            <label htmlFor="amount">Amount</label>
          </div>

          {/* Created At */}
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              name="created-at"
              id="created-at"
              placeholder=""
              min="2021-04-01"
              max="2024-03-31"
              onChange={createdAtChangeHandler}
              value={enteredCreatedAt}
            />
            <label htmlFor="created-at">Date</label>
          </div>

          {/* Buttons - Add and Close */}
          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={onFormClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
