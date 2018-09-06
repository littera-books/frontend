import { combineReducers } from 'redux';

// Reducers
import controlTitle from './reducer.controlTitle';

const rootReducer = combineReducers({
  controlTitle,
});

export default rootReducer;
