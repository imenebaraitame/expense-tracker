

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        default:
            return state;
    }
}
export default AppReducer;