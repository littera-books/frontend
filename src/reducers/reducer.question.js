import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const LIST_QUESTIONS = 'LIST_QUESTIONS';
const POST_RESULT = 'POST_RESULT';
const LIST_RESULT = 'LIST_RESULT';

// Action Creators
export async function listQuestion() {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: '/survey/questions',
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: LIST_QUESTIONS,
    response,
    error,
  };
}

export async function postResult(userId, payload) {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/survey/result/${userId}`,
      method: 'post',
      data: {
        ...payload,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: POST_RESULT,
    response,
    error,
  };
}

export async function listResult(userId) {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/survey/result/${userId}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: LIST_RESULT,
    response,
    error,
  };
}

// Initial State
export const initialState = {
  length: 0,
  result: {},
  items: [],
  resultItems: [],
  error: '',
};

// Reducer Functions
function reducerListQuestion(state, action) {
  if (action.error) {
    return {
      ...state,
      error: action.error,
    };
  }

  return {
    ...state,
    length: action.response.data.length,
    items: action.response.data.items,
    error: '',
  };
}

function reducerPostResult(state, action) {
  if (action.error) {
    return {
      ...state,
      error: action.error,
    };
  }

  return {
    ...state,
    error: '',
  };
}

function reducerListResult(state, action) {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error,
    });
  }

  return _.assign({}, state, {
    ...state,
    resultItems: action.response.data.items,
    error: '',
  });
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_QUESTIONS:
      return reducerListQuestion(state, action);
    case POST_RESULT:
      return reducerPostResult(state, action);
    case LIST_RESULT:
      return reducerListResult(state, action);
    default:
      return state;
  }
}
