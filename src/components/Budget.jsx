import { useState } from "react";

function Budget() {
  const [draftBudget, setDraftBudget] = useState("");
  const [budget, setBudget] = useState("");
  const [mode, setMode] = useState("view");

  const CATEGORIES = [
    { id: "food", name: "Food & Dining" },
    { id: "transport", name: "Transport" },
    { id: "shopping", name: "Shopping" },
    { id: "entertainment", name: "Entertainment" },
    { id: "health", name: "Health" },
    { id: "utilities", name: "Utilities" },
  ];
  const [formData, setFormData] = useState({
    amount: "",
    category: CATEGORIES[0].id,
    date: new Date().toISOString().split("T")[0],
    description: "",
  });

  const [expenses, setExpenses] = useState([]);

  const saveBudget = () => {
    setBudget(draftBudget);
    setMode("view");
  };
  const cancelEditing = () => {
    setDraftBudget(budget);
    setMode("view");
  };
  const startEditing = () => {
    setDraftBudget(budget);
    setMode("edit");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...formData,
    };
    setExpenses((prev) => [...prev, newExpense]);
    // Reset form
    setFormData({
      amount: "",
      category: CATEGORIES[0].id,
      date: new Date().toISOString().split("T")[0],
      description: "",
    });
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaing = budget - totalExpenses;

  return (
    <>
      <h1>My Budget Planner</h1>
      {mode === "edit" ? (
        <>
          <div>
            <span>Budget:</span>
            <input
              type="number"
              required
              value={draftBudget}
              onChange={(e) => setDraftBudget(Number(e.target.value))}
            />
            <button onClick={saveBudget}>Save</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <span>Budget:{budget}</span>
            <button onClick={startEditing}>Edit</button>
          </div>
        </>
      )}

      <p>Remaing:{remaing}</p>
      <p>Sepent so far: {totalExpenses}</p>
      <hr />

      <h2>Expenses</h2>

      <input type="text" placeholder="Type to search" />
      <button>Search</button>
      <div>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.category}| {expense.amount}| {expense.date}|{expense.description}
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter"}>
        <label htmlFor="amount">AMOUNT(DA)</label>
        <input
          type="number"
          required
          name="amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: Number(e.target.value) })
          }
          placeholder="0.00"
        />
        <br />
        <label htmlFor="category-select">Category</label>
        <select
          id="category-select"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <br />
        <label htmlFor="description">Desctiption</label>
        <input
          type="text"
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
export default Budget;
