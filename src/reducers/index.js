import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import controlTitle from './reducer.controlTitle';
import auth from './reducer.auth';
import question from './reducer.question';

const rootReducer = combineReducers({
  form: formReducer,
  controlTitle,
  auth,
  question,
});

export default rootReducer;
