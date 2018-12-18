import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import controlTitle from './reducer.controlTitle';
import controlScroll from './reducer.controlScroll';
import popup from './reducer.popup';
import auth from './reducer.auth';
import user from './reducer.user';
import question from './reducer.question';
import product from './reducer.product';
import resignSurvey from './reducer.resignSurvey';
import letter from './reducer.letter';
import image from './reducer.image';

const rootReducer = combineReducers({
  form: formReducer,
  controlTitle,
  controlScroll,
  popup,
  auth,
  user,
  question,
  product,
  resignSurvey,
  letter,
  image,
});

export default rootReducer;
