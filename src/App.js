import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 1092.5,
    },
    {
      id: "e2",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 1092.5,
    },
    {
      id: "e3",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 1092.5,
    },
    {
      id: "e4",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 1092.5,
    },
  ];

  const addExpenseData = expense => {
    
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
