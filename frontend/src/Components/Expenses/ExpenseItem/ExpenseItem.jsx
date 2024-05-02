import ExpenseData from "../ExpenseData/ExpenseData";

function ExpenseItem(props) {
  const deleteClickHandler = () => {
    props.onDeleteExpense(props.expense.id);
  };
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{props.expense.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p className="lead">Amount : ${props.expense.amount}</p>
          <ExpenseData createdAt={props.expense.createdAt} />
          <div className="float-end">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={deleteClickHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
