import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

function Expenses(props) {

  const selectYearHandler = year => {
    console.log(year);
  }

  return (<div>
      <Card className="expenses">
      <ExpensesFilter onSelectYear = {selectYearHandler}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
