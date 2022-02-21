import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [entertitle, setEnterTitle] = useState("");
  const [enteramount, setEnterAmount] = useState("");
  const [enterdate, setEnterDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entertitle,
      amount: enteramount,
      data: new Date(enterdate),
    };
    console.log(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step={1}
            value={enteramount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={enterdate}
            onChange={dateChangeHandler}
          />
        </div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
