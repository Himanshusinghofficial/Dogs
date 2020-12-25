  import {
    GET_LOGS,
    ADD_LOG,
    LOGS_ERROR
  } from '../actions/types';
  
  const initialState = {
    logs: null,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_LOGS:
        return {
          ...state,
          logs: action.payload,
        };
      case ADD_LOG:
        return {
          ...state,
          logs: [...state.logs, action.payload],
        };
        case LOGS_ERROR:
            console.error(action.payload);
            return {
              ...state,
              error: action.payload
            };
      default:
        return state;
    }
  };
  