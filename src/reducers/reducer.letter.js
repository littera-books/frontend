import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const SEND_LETTER = 'SEND_LETTER';

// Action Creators
export const sendLetter = async (userId, payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/message/${userId}`,
      method: 'post',
      data: payload,
    });
  } catch (e) {
    error = e;
  }

  return {
    type: SEND_LETTER,
    response,
    error,
  };
};

// Initial State
const initialState = {
  error: '',
};

// Reducer Functions
const reducerSendLetter = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error,
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
    case SEND_LETTER:
      return reducerSendLetter(state, action);
    default:
      return state;
  }
}
