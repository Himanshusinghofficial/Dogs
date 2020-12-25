import { combineReducers } from 'redux';
import logReducers from './logReducers';

export default combineReducers({
  log: logReducers,
});
