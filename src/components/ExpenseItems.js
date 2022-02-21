import "./ExpenseItems.css";

function ExpenseItem(props) {
  const ExpenseDate = new Date(2022, 1, 18);
  const ExpenseItem = "Dinner";
  const ExpensePrice = 200;
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
