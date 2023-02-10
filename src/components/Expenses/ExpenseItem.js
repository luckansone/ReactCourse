import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    let [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!')
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;