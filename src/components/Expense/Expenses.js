import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const YearSelector = (year) => {
    setFilterYear(year);
  };

  const filterExpense = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onYearSelector={YearSelector}
        />
        <ExpenseChart expenses={filterExpense}/>
        <ExpenseList items={filterExpense}/>
      </Card>
    </li>
  );
}

export default Expenses;
