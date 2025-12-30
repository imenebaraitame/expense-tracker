import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import AddExpenses from './components/AddExpenses';
import ExpensesList from './components/ExpensesList';
import { GlobalProvider } from  './context/GlobalState';

function App() {


  return (
    <>
      <GlobalProvider>
        <Header />
        <div>
          <Balance />
          <ExpensesList />
          <AddExpenses />
        </div>
      </GlobalProvider>
    </>  
  );
}

export default App
