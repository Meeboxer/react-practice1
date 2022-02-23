import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const YearSelector = (year) => {
    setFilterYear(year);
  };

  const filterExpense = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onYearSelector={YearSelector}
        />
        {filterExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
