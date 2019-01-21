import _ from 'lodash';
import { axiosNoAuth } from './axios.instance';

// Actions
const SEND_EMAIL = 'SEND_EMAIL';

// Action Creators
export const sendEmail = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosNoAuth({
      url: '/send-email',
      method: 'post',
      data: payload,
    });
  } catch (e) {
    error = e;
  }

  return {
    type: SEND_EMAIL,
    response,
    error,
  };
};

// Initial State
const initialState = {
  error: '',
};

// Reducer Functions
const reducerSendEmail = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error.message,
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
    case SEND_EMAIL:
      return reducerSendEmail(state, action);
    default:
      return state;
  }
}
