import { combineReducers } from 'redux';
import columns from './Columns';
import tables from './Tables';

const rootReducer = combineReducers({
  columns,
  tables,
});

export default rootReducer;
