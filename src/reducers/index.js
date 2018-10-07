import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import controlTitle from './reducer.controlTitle';
import popup from './reducer.popup';
import auth from './reducer.auth';
import question from './reducer.question';
import product from './reducer.product';

const rootReducer = combineReducers({
  form: formReducer,
  controlTitle,
  popup,
  auth,
  question,
  product,
});

export default rootReducer;
