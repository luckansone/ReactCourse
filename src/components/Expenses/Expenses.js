import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2020");

  const selectYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectYear={selectYearHandler}
      />
      {props.expenses
      .filter((expense) => {
          return expense.date.getFullYear() == selectedYear;
      } 
      ).map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
