import { useContext, useState } from "react";
import { Wallet, Target , CreditCard } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mode === "edit" ? (

                <div className="glass-surface p-6 rounded-[24px] border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex justify-between">
                        <p className="text-[13px] font-medium text-slate-400 uppercase tracking-wider">Monthly Budget</p>
                        <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>
                    </div>

                    <input
                        type="number"
                        required
                        value={draftBudget}
                        onChange={(e) => setDraftBudget(e.target.value)}
                    />
                    <button onClick={saveBudget}>Save</button>
                    <button onClick={cancelEditing}>Cancel</button>
                </div>

            ) : (

                <div className="glass-surface p-6 rounded-[24px] border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex justify-between">
                        <p className="text-[13px] font-medium text-slate-400 uppercase tracking-wider">Monthly Budget</p>
                        <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>

                    </div>
                    <button onClick={startEditing}>Edit</button>
                    <h3 className="text-[28px] font-bold text-white mt-1 stats-value">{budget} DA</h3>
                </div>

            )}
            <div className="glass-surface p-6 rounded-[24px] border border-white/5 hover:border-white/10 transition-all group">
                <div className="flex justify-between">
                    <p className="text-[13px] font-medium text-slate-400 uppercase tracking-wider">wallet balance</p>
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                        <Wallet size={24} />
                    </div>
                </div>
                <h3 className="text-[28px] font-bold text-white mt-1 stats-value">{remaing} DA</h3>
            </div>
            <div className="glass-surface p-6 rounded-[24px] border border-white/5 hover:border-white/10 transition-all group">
                <div className="flex justify-between">
                    <p className="text-[13px] font-medium text-slate-400 uppercase tracking-wider">total spent</p>
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                        <CreditCard size={24} />
                    </div>
                </div>
                <h3 className="text-[28px] font-bold text-white mt-1 stats-value">{totalExpenses} DA</h3>
            </div>
        </div>


    );
}
export default Balance;