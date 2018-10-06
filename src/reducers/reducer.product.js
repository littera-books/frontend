import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const LIST_PRODUCTS = 'LIST_PRODUCTS';

// Action Creators
export async function listProduct() {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: '/product',
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: LIST_PRODUCTS,
    response,
    error,
  };
}

// Initial State
const initialState = {
  length: 0,
  items: [],
  error: '',
};

// Reducer Functions
function reducerListProduct(state, action) {
  if (action.error) {
    return _.assign({}, state, {
      error: action.error,
    });
  }

  return _.assign({}, state, {
    items: action.response.data.items,
  });
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return reducerListProduct(state, action);
    default:
      return state;
  }
}
