import { useState } from "react";

function Budget () {

    const [draftBudget, setDraftBudget] = useState("");
    const [budget, setBudget] = useState("");
    const [mode, setMode] = useState("view");

    const [nameExpense, setNameExpense] = useState("");
    const [cost, setCost] = useState("");
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
    const addExpense = (e) => {
        e.preventDefault();
        const newExpense = {
            id:Date.now(),
            name:nameExpense, 
            cost:cost
        }
        setExpenses((prev => [...prev, newExpense]));

        setNameExpense("");
        setCost("");
    };
 
    return(
        <>
            <h1>My Budget Planner</h1>
            {
                mode === "edit" ?(
                    <>
                        <div>
                            <span>Budget:</span>
                            <input 
                                type="number" 
                                value={draftBudget} 
                                onChange={(e)=> setDraftBudget(Number(e.target.value))}
                            />
                            <button onClick = {saveBudget}>Save</button>
                            <button onClick= {cancelEditing}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <span>Budget:{budget}</span>
                            <button onClick= {startEditing}>Edit</button>
                        </div>
                    </>   
                )

            }
            
            <p>Remaing:</p>
            <p>Sepent so far:</p>
            <hr />

            <h2>Expenses</h2>
            
            <input type="text" placeholder="Type to search"/>
            <button>Search</button>
            <div>
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            {expense.name}:{expense.cost}
                        </li>
                     ))}
                </ul>   
            </div>

            <h2>Add Expense</h2>
            <form onSubmit={addExpense} onKeyDown={(e) => e.key === "Enter" }>
                <label htmlFor="expense-name">Name</label>
                <input type="text" name="expense-name" value={nameExpense} onChange={(e) => setNameExpense(e.target.value)}/>

                <label htmlFor="expense-cost">Cost</label>
                <input type="number" name="expense-cost" value={cost} onChange={(e) => setCost(Number(e.target.value))} />

                <button type="submit">Save</button>
            </form>
        </>
    );
}
export default Budget;