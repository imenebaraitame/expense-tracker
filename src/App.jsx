// import { useContext } from "react";
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import ExpensesList from './components/ExpensesList';
import { GlobalProvider } from './context/GlobalState';
// import { GlobalContext } from "./context/GlobalState";
import FormModal from "./components/FormModal";

function App() {
  // const { handleModal } = useContext(GlobalContext);

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <GlobalProvider>
          <Header />
          {/* Dashboard Content */}
          <div className="flex-1 p-8 space-y-8 max-w-[1440px] mx-auto w-full">
            <Balance />
            <div className="xl:col-span-1 space-y-6">
              <div className="h-[calc(100vh-450px)] min-h-[500px]">
                <ExpensesList />
              </div>
            </div>
          </div>
          <FormModal />
        </GlobalProvider>
      </main>
    </>
    
  );
}

export default App
