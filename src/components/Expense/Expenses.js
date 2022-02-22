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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onYearSelector={YearSelector}
        />
        {props.item.map((expense) => (
          <ExpenseItem
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
