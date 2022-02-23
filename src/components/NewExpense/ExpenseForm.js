import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState(""); //entertitle 輸入變數 , setEnterTitle 設定輸入變數E要大寫
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
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
    event.preventDefault(); //將預設submit的event刷新頁面停止
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData); //將expenseData傳入NewExpense傳來得onSaveExpenseData方法內
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step={1}
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <button type="button" onClick={props.CancelFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
