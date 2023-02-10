import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const [year, setYear] = useState('2020');

    const onChangeSelect = event => {
        setYear(event.target.value);
        props.onSelectYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={year} onChange={onChangeSelect}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
