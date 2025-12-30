import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
    const { expenses } = useContext(GlobalContext);

    const [draftBudget, setDraftBudget] = useState("");
    const [budget, setBudget] = useState("");
    const [mode, setMode] = useState("view");

    const saveBudget = () => {
        setBudget(Number(draftBudget));
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
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const remaing = budget - totalExpenses;

    return (
        <>
            {mode === "edit" ? (
                <>
                    <div>
                        <span>Budget:</span>
                        <input
                            type="number"
                            required
                            value={draftBudget}
                            onChange={(e) => setDraftBudget(e.target.value)}
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
        </>

    );
}
export default Balance;