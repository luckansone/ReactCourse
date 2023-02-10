import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

function Expenses(props) {

  const [selectedYear, setYear] = useState('2020');

  const selectYearHandler = year => {
    console.log(year);
    setYear(year);
  }

  return (
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
  );
}

export default Expenses;
