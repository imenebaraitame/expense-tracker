import { Plus } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Header() {
    const { handleModal } = useContext(GlobalContext);

    return (
        <>
            {/* Top Header */}
            <header className="h-[80px] border-b border-[rgba(148,163,184,0.1)] px-8 flex items-center justify-between sticky top-0 bg-[#0f172a]/80 backdrop-blur-md z-40">
                <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold tracking-tight">Expense Tracker</h1>
                    <p className="text-[12px] text-[#94a3b8] font-medium">Track your spending and manage your budget</p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Add Expense CTA */}
                    <button
                        className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#14b8a6] to-[#10b981] text-white rounded-lg text-[13px] font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95 transition-all"
                        onClick={() => handleModal(true)}
                    >
                        <Plus size={18} />
                        Add Expense
                    </button>
                </div>
            </header>
        </>
    );
}
export default Header;