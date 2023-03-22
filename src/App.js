import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - £{expense.amount.toFixed(2)}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
