

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case 'HANDLE_MODAL':
            return {
                ...state,
                isModalOpen: action.payload
            };
        default:
            return state;
    }
}
export default AppReducer;