import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showExpenseform,setShowExpenseForm]=useState(false);
    const AddExpenseHandler = () => {
        setShowExpenseForm(true);
    }

    const NoshowExpenseForm = () => {
        setShowExpenseForm(false);
    }
    const SaveExpneseDataHandler = (SaveExpenseData) => {
    const expenseData = {
      ...SaveExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
    
  return (
    <div className="new-expense">
    {!showExpenseform && <button onClick={AddExpenseHandler}>Add  New Expense</button>}
    {showExpenseform && <ExpenseForm CancelFormHandler={NoshowExpenseForm} onSaveExpenseData={SaveExpneseDataHandler} />}
    </div>
  );
};

export default NewExpense;
