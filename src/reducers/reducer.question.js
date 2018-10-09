import axiosInstance from './axios.instance';

// Actions
const LIST_QUESTIONS = 'LIST_QUESTIONS';
const SAVE_RESULT = 'SAVE_RESULT';

// Action Creators
export async function listQuestion() {
  let response;
  let error;

  try {
    response = await axiosInstance({
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

export function saveResult(payload) {
  return {
    type: SAVE_RESULT,
    result: payload,
  };
}

// Initial State
export const initialState = {
  length: 0,
  result: {},
  items: [],
  item: {
    subject: '',
    title: '',
  },
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

function reducerSaveResult(state, action) {
  return {
    ...state,
    result: action.result,
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_QUESTIONS:
      return reducerListQuestion(state, action);
    case SAVE_RESULT:
      return reducerSaveResult(state, action);
    default:
      return state;
  }
}
