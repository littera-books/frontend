import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import controlTitle from './reducer.controlTitle';

const rootReducer = combineReducers({
  form: formReducer,
  controlTitle,
});

export default rootReducer;
