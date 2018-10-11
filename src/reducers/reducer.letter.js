import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const SEND_LETTER = 'SEND_LETTER';
const GET_LETTER = 'GET_LETTER';
const GET_LETTER_DETAIL = 'GET_LETTER_DETAIL';

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

export const getLetter = async (userId) => {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/message/${userId}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: GET_LETTER,
    response,
    error,
  };
};

export const getLetterDetail = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/message/${payload.userId}/${payload.messageId}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: GET_LETTER_DETAIL,
    response,
    error,
  };
};

// Initial State
const initialState = {
  length: 0,
  items: [],
  item: {
    id: 0,
    body: '',
    created_at: 0,
  },
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

const reducerGetLetter = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error,
    });
  }

  return _.assign({}, state, {
    ...state,
    length: action.response.data.length,
    items: action.response.data.items,
    error: '',
  });
};

const reducerGetLetterDetail = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error,
    });
  }

  return _.assign({}, state, {
    ...state,
    item: {
      id: action.response.data.message_id,
      body: action.response.data.body,
      created_at: action.response.data.created_at,
    },
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND_LETTER:
      return reducerSendLetter(state, action);
    case GET_LETTER:
      return reducerGetLetter(state, action);
    case GET_LETTER_DETAIL:
      return reducerGetLetterDetail(state, action);
    default:
      return state;
  }
}
