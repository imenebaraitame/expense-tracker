import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddExpenses() {
    const {addExpense} = useContext(GlobalContext);
  
    const CATEGORIES = [
        { id: "food", name: "Food & Dining" },
        { id: "transport", name: "Transport" },
        { id: "shopping", name: "Shopping" },
        { id: "entertainment", name: "Entertainment" },
        { id: "health", name: "Health" },
        { id: "utilities", name: "Utilities" },
        { id: "education", name: "Education" },
    ];
    const [formData, setFormData] = useState({
        amount: "",
        category: CATEGORIES[0].id,
        date: new Date().toISOString().split("T")[0],
        description: "",
    });
    // const [expenses, setExpenses] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            amount: Number(formData.amount), 
            category: formData.category,
            date: formData.date,
            description: formData.description
        };
        // setExpenses((prev) => [...prev, newExpense]);
        addExpense(newExpense);
        // Reset form
        setFormData({
            amount: "",
            category: CATEGORIES[0].id,
            date: new Date().toISOString().split("T")[0],
            description: "",
        });
    };

    return (
        <>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter"}>
                <label htmlFor="amount">AMOUNT(DA)</label>
                <input
                    type="number"
                    required
                    name="amount"
                    value={formData.amount}
                    onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
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
export default AddExpenses;