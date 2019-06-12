
export default (state = {value: "0", prevAction:""}, action) => {
    switch (action.type) {
        case 'INPUT_ACTION':
            return {
                value: state.value === "0" ? action.payload : 
                            (state.prevAction ==="+" || state.prevAction === "-" || state.prevAction === "*" || state.prevAction === "/") && action.payload === "0" ?
                                state.value : state.value + action.payload,
                prevAction: action.payload,
            }
        case 'EVALUATE_ACTION':
            return {
                value: eval(state.value),
                prevAction: action.payload,
            }
        case 'CLEAR_ACTION':
            return {
                value: "0",
                prevAction: action.payload,
            }
        default:
            return state
    }
   }
   