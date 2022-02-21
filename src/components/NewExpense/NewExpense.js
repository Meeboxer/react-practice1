import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpneseDataHandler = (SaveExpenseData) => {
    const expenseData = {
      ...SaveExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpneseDataHandler} />
    </div>
  );
};

export default NewExpense;
