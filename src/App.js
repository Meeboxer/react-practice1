import logo from "./logo.svg";
import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(Dummy_data);
  const AddExpenseItem = (newExpense) => {
    setExpense((preExpense) => {
      return [newExpense, ...preExpense];
    });
    // console.log(newExpense);
  };

  
  return (
    <div className="App">
      <h1>Expense List</h1>
      <NewExpense onAddExpense={AddExpenseItem} />
      <Expenses item={expense} />
    </div>
  );
}

export default App;
