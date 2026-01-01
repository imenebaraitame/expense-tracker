import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    expenses: [
        // { id: "1", description: "Grocery Shopping", amount: 124.5, category: "food", date: "2024-03-24" },
        // { id: "2", description: "Netflix Subscription", amount: 15.99, category: "entertainment", date: "2024-03-22" },
        // { id: "3", description: "Gas Station", amount: 65.0, category: "transport", date: "2024-03-20" },
        // { id: "4", description: "New Sneakers", amount: 89.99, category: "shopping", date: "2024-03-18" },
        // { id: "5", description: "Pharmacy", amount: 32.4, category: "health", date: "2024-03-15" },
        // { id: "6", description: "Electric Bill", amount: 145.2, category: "utilities", date: "2024-03-10" },
    ],
    isModalOpen : false
}
//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function addExpense(expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    function handleModal(isOpen){
        dispatch({
            type: 'HANDLE_MODAL',
            payload: isOpen
        });
    }
    return (
        <GlobalContext.Provider 
        value = {{
            expenses: state.expenses,
            isModalOpen: state.isModalOpen,
            addExpense,
            handleModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}