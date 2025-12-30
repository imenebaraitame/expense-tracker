import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ExpensesList() {
    const { expenses } = useContext(GlobalContext);

    return (
        <div>
            <h2>Recent Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td >{expense.date}</td>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
              
            </table>
        </div>
    );
}
export default ExpensesList;