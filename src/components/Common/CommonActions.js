export const ADD_ERROR = "ADD_ERROR";


export  function addError(error) {
    return (dispatch) => {
      dispatch({
        type: ADD_ERROR,
        error
      })
    }
  }