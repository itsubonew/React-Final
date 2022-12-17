
export const expenseReducer=(state = { jungle: ["iwatani"] },action)=>{
    switch(action.type) {

        case "ADD_JUNGLE":
        return {
            ...state,
            jungle: [...state.jungle, action.payload]
        };
        case "DELETE_JUNGLE":
            console.log(action.payload);
            return {
                ...state,
                jungle: state.jungle.filter((_, index) => index !== action.payload)
            }
            // return state.filter((one, index) => one !== action.payload)
        default:
            return state;
    }
};

