
export default (state = {value: "0"}, action) => {
    switch (action.type) {
        case 'INPUT_ACTION':
            return {
                value: state.value === "0" ? action.payload : state.value + action.payload,
            }
        case 'EVALUATE_ACTION':
            return {
                value: eval(state.value)
            }
        case 'CLEAR_ACTION':
            return {
                value: "0"
            }
        default:
            return state
    }
   }
   