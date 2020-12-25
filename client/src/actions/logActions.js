import axios from 'axios';
import {
  GET_LOGS,
  ADD_LOG,
  LOGS_ERROR
} from './types';

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    const res = await axios.get('/api/dogs')
    
    dispatch({
      type: GET_LOGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.msg
    });
  }
};

// Add new log
export const addLog = log => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/dogs',log,config);

    dispatch({
      type: ADD_LOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.msg
    });
  }
};
