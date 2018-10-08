import _ from 'lodash';
import axiosInstance from './axios.instance';

// Actions
const READ_TOKEN = 'READ_TOKEN';
const UPDATE_INFO = 'UPDATE_INFO';

// Action Creators
export const readToken = () => ({
  type: READ_TOKEN,
});

export const updateInfo = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance({
      url: `/user/${payload.userId}`,
      method: 'put',
      data: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        address: payload.address,
        email: payload.email,
        phone: payload.phone,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: UPDATE_INFO,
    response,
    error,
  };
};

// Initial State
const initialState = {
  userId: 0,
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
  exp: '',
  error: '',
};

// Reducer Functions
const reducerReadToken = (state) => {
  const token = sessionStorage.getItem('token');
  const base64Url = token.split('.')[1];
  const decodedData = JSON.parse(window.atob(base64Url));

  return _.assign({}, state, {
    userId: decodedData.user_id,
    firstName: decodedData.first_name,
    lastName: decodedData.last_name,
    address: decodedData.address,
    phone: decodedData.phone,
    email: decodedData.email,
    exp: decodedData.exp,
    error: '',
  });
};

const reducerUpdateInfo = (state, action) => {
  if (action.type) {
    _.assign({}, state, {
      error: action.error,
    });
  }

  return _.assign({}, state, {
    error: '',
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case READ_TOKEN:
      return reducerReadToken(state);
    case UPDATE_INFO:
      return reducerUpdateInfo(state, action);
    default:
      return state;
  }
}
