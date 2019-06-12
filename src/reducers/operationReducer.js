
export default (state = {value: "0"}, action) => {
    switch (action.type) {
        case 'INPUT_ACTION':
            console.log("input is + " + action.payload);
            return {
                value: state.value === "0" ? action.payload : state.value + action.payload,
            }
        case 'EVALUATE_ACTION':
            return {
                result: eval(state.value)
            }
        case 'CLEAR_ACTION':
            return {
                result: "0"
            }
        default:
            return state
    }
   }
   