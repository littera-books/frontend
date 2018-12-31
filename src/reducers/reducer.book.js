import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const LIST_BOOK = 'LIST_BOOK';

// Action Creators
export const listBook = async (userId, pageNum) => {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/book/user/${userId}?page=${pageNum}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: LIST_BOOK,
    response,
    error,
  };
};

// Initial State
const initialState = {
  length: 0,
  items: [],
  error: '',
};

// Reducer Functions
const reducerListBook = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error.message,
    });
  }

  return _.assign({}, state, {
    ...state,
    length: action.response.data.length,
    items: action.response.data.items,
    error: '',
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_BOOK:
      return reducerListBook(state, action);
    default:
      return state;
  }
}
