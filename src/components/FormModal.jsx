import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { X, ChevronDown, Plus } from "lucide-react";

function FormModal() {
    const { addExpense, handleModal, isModalOpen } = useContext(GlobalContext);



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

    // Don't render modal if it's not open
    if (!isModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            amount: Number(formData.amount),
            category: formData.category,
            date: formData.date,
            description: formData.description
        };
        addExpense(newExpense);
        // Reset form
        setFormData({
            amount: "",
            category: CATEGORIES[0].id,
            date: new Date().toISOString().split("T")[0],
            description: "",
        });
        //close modal on submit
        handleModal(false);
    };

    return (
        <>

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm transition-opacity">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-[32px] glass-surface shadow-2xl border border-white/10">
                    <div className="flex items-center justify-between p-8 border-b border-white/5">
                        <h2>Add an Expense</h2>
                        <button
                            className="p-2 rounded-full hover:bg-white/5 text-slate-400 transition-colors"
                            onClick={() => handleModal(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-8">
                        <form className="space-y-6" onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter"}>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Amount (DA)</label>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-400">
                                        <span className="text-xl">DA</span>
                                    </div>
                                    <input
                                        type="number"
                                        required
                                        name="amount"
                                        className="w-full h-[64px] pl-14 pr-6 rounded-[20px] bg-slate-800/50 border border-white/10 text-white text-[24px] font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all stats-value"
                                        value={formData.amount}
                                        onChange={(e) =>
                                            setFormData({ ...formData, amount: e.target.value })
                                        }
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Category</label>
                                    <div className="relative">
                                        <select
                                            className="w-full h-[56px] pl-4 pr-10 appearance-none rounded-[16px] bg-slate-800/50 border border-white/10 text-white text-[14px] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 cursor-pointer"
                                            id="category-select"
                                            value={formData.category}
                                            onChange={(e) =>
                                                setFormData({ ...formData, category: e.target.value })
                                            }
                                        >
                                            {CATEGORIES.map((cat) => (
                                                <option key={cat.id} value={cat.id} className="bg-slate-900">
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full h-[56px] px-4 rounded-[16px] bg-slate-800/50 border border-white/10 text-white text-[14px] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 [color-scheme:dark]"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Description</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Weekly Groceries"
                                        className="w-full h-[56px] px-6 rounded-[16px] bg-slate-800/50 border border-white/10 text-white text-[14px] focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                                        value={formData.description}
                                        onChange={(e) =>
                                            setFormData({ ...formData, description: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => handleModal(false)}
                                    className="flex-1 h-[56px] rounded-[16px] border border-white/10 text-slate-400 font-bold hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] h-[56px] rounded-[16px] flex items-center justify-center gap-2 font-bold text-white shadow-xl transition-all active:scale-95 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:shadow-emerald-500/25"
                                >
                                    <Plus size={20} />
                                    Confirm Expense
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}
export default FormModal;