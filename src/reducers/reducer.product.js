import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const LIST_PRODUCTS = 'LIST_PRODUCTS';
const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
const SEND_SUBSCRIPTION = 'SEND_SUBSCRIPTION';

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

export async function detailProduct(productId) {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/product/${productId}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: DETAIL_PRODUCT,
    response,
    error,
  };
}

export async function sendSubscription(payload) {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: '/subscription/promotion',
      method: 'post',
      data: {
        user_id: payload.userId,
        code: payload.code,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: SEND_SUBSCRIPTION,
    response,
    error,
  };
}

// Initial State
const initialState = {
  length: 0,
  items: [],
  item: {
    books: 0,
    months: 0,
    price: 0,
    description: '',
  },
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

function reducerDetailProduct(state, action) {
  if (action.error) {
    return _.assign({}, state, {
      error: action.error,
    });
  }

  return _.assign({}, state, {
    item: action.response.data,
  });
}

function reducerSendSubscription(state, action) {
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
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return reducerListProduct(state, action);
    case DETAIL_PRODUCT:
      return reducerDetailProduct(state, action);
    case SEND_SUBSCRIPTION:
      return reducerSendSubscription(state, action);
    default:
      return state;
  }
}
