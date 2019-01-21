import _ from 'lodash';
import { axiosNoAuth } from './axios.instance';

// Actions
const CREATE_RESIGN_SURVEY = 'CREATE_RESIGN_SURVEY';

// Action Creators
export const createResignSurvey = async (formData) => {
  let response;
  let error;

  try {
    response = await axiosNoAuth({
      url: '/survey/resign',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
  } catch (e) {
    error = e;
  }

  return {
    type: CREATE_RESIGN_SURVEY,
    response,
    error,
  };
};

// Initial State
const initialState = {
  error: '',
};

// Reducer Functions
const reducerCreateResignSurvey = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error.response.data.message,
    });
  }

  return _.assign({}, state, {
    ...state,
    error: '',
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_RESIGN_SURVEY:
      return reducerCreateResignSurvey(state, action);
    default:
      return state;
  }
}
