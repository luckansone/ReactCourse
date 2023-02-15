import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2020");

  const selectYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
