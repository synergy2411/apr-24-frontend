function ExpenseItem(props) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{props.expense.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p className="lead">Amount : ${props.expense.amount}</p>
          <p>Date : {props.expense.createdAt.toISOString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
