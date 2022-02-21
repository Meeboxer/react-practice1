import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const SaveExpneseDataHandler = (SaveExpenseData) => {
        const expenseData = {
            ...SaveExpenseData,
            id : Math.random().toString()
        };  
        console.log(expenseData);
    };
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpneseDataHandler}/>  //自訂onSaveExpenseData方法，傳給ExpenseForm，將Expense內的資料拉至NewExpense處理
    </div>
}

export default NewExpense;