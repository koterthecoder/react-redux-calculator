
export const inputAction = (val) => dispatch => {
    dispatch({
     type: 'INPUT_ACTION',
     payload: val
    })
   }


export const evaluateAction = () => dispatch => {
    dispatch({
     type: 'EVALUATE_ACTION',
    })
   }
   

   export const clearAction = () => dispatch => {
    dispatch({
     type: 'CLEAR_ACTION',
    })
   }
