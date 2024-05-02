function ExpenseForm() {
  return (
    <div className="backdrop">
      <div className="my-modal">
        <h1 className="my-background text-center">Add New Expense</h1>
        <form>
          {/* Title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
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
            />
            <label htmlFor="created-at">Date</label>
          </div>

          {/* Buttons - Add and Close */}
          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
