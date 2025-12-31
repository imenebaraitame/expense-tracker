import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Trash2, Pencil, CreditCard } from "lucide-react";

function ExpensesList() {
    const { expenses } = useContext(GlobalContext);

    return (
        <div>
            <h2 className="m-4 text-[18px] font-bold tracking-tight text-white">Recent Expenses</h2>
            <div className="flex-1 glass-surface rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Transaction</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Category</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Amount</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-white/5">
                            {expenses.map((expense) => (
                                <tr key={expense.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4">{expense.description}</td>
                                    <td className="px-6 py-4">{expense.category}</td>
                                    <td className="px-6 py-4">{expense.date}</td>
                                    <td className="px-6 py-4 text-right">{expense.amount} DA</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                // onClick={() => onEdit(expense)}
                                                className="p-2 text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                                                title="Edit"
                                            >
                                                <Pencil size={14} />
                                            </button>
                                            <button
                                                // onClick={() => onDelete(expense.id)}
                                                className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ExpensesList;