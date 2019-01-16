import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import controlTitle from './reducer.controlTitle';
import controlScroll from './reducer.controlScroll';
import controlClose from './reducer.controlClose';
import controlWidth from './reducer.controlWidth';
import auth from './reducer.auth';
import user from './reducer.user';
import question from './reducer.question';
import product from './reducer.product';
import resignSurvey from './reducer.resignSurvey';
import letter from './reducer.letter';
import image from './reducer.image';
import book from './reducer.book';
import email from './reducer.email';

const rootReducer = combineReducers({
  form: formReducer,
  controlTitle,
  controlScroll,
  controlClose,
  controlWidth,
  auth,
  user,
  question,
  product,
  resignSurvey,
  letter,
  image,
  book,
  email,
});

export default rootReducer;
