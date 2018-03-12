import { ADD_ERROR } from "./CommonActions";

export default (state = { error: { error: null, errorInfo: null }}, action) => {
    switch (action.type) {
        case ADD_ERROR: {
            return { ...state, error: action.error };
        } 
        default:
            return state;
    }
};