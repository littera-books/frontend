import _ from 'lodash';
import axiosInstance, { axiosNoAuth } from './axios.instance';

// Actions
const READ_TOKEN = 'READ_TOKEN';
const RETRIEVE_INFO = 'RETRIEVE_INFO';
const UPDATE_INFO = 'UPDATE_INFO';
const PATCH_PASSWORD = 'PATCH_PASSWORD';
const RESET_PASSWORD = 'RESET_PASSWORD';
const CREATE_USER = 'CREATE_USER';
const DESTROY_USER = 'DESTROY_USER';
const CLEAR_ERROR = 'CLEAR_ERROR';

// Action Creators
export const readToken = () => ({
  type: READ_TOKEN,
});

export const retrieveInfo = async (userId) => {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/user/${userId}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: RETRIEVE_INFO,
    response,
    error,
  };
};

export const updateInfo = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/user/${payload.userId}`,
      method: 'put',
      data: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        address: payload.address,
        extra_address: payload.extraAddress,
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

export const patchPassword = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/user/${payload.userId}`,
      method: 'patch',
      data: {
        password: payload.password2,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: PATCH_PASSWORD,
    response,
    error,
  };
};

export const resetPassword = async (email) => {
  let response;
  let error;

  try {
    response = await axiosNoAuth({
      url: '/user/reset-password',
      method: 'post',
      data: {
        email,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: RESET_PASSWORD,
    response,
    error,
  };
};

export const createUser = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosNoAuth({
      url: '/user',
      method: 'post',
      data: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        address: payload.address,
        extra_address: payload.extraAddress,
        phone: payload.phone,
        email: payload.email,
        password: payload.password2,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: CREATE_USER,
    response,
    error,
  };
};

export const destroyUser = async (payload) => {
  let response;
  let error;

  try {
    response = await axiosInstance()({
      url: `/user/${payload.userId}`,
      method: 'delete',
      data: {
        password: payload.password1,
      },
    });
  } catch (e) {
    error = e;
  }

  return {
    type: DESTROY_USER,
    response,
    error,
  };
};

export const clearError = () => ({ type: CLEAR_ERROR });

// Initial State
const initialState = {
  userId: 0,
  firstName: '',
  lastName: '',
  address: '',
  extraAddress: '',
  phone: '',
  email: '',
  hasSurvey: false,
  exp: '',
  error: '',
};

// Reducer Functions
const reducerReadToken = (state) => {
  const token = sessionStorage.getItem('token');
  const base64Url = token.split('.')[1];
  const decodedData = JSON.parse(window.atob(base64Url));

  return _.assign({}, state, {
    ...state,
    userId: decodedData.user_id,
    exp: decodedData.exp,
    error: '',
  });
};

const reducerRetrieveInfo = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error,
    });
  }

  return _.assign({}, state, {
    ...state,
    userId: action.response.data.id,
    firstName: action.response.data.first_name,
    lastName: action.response.data.last_name,
    address: action.response.data.address,
    extraAddress: action.response.data.extra_address,
    phone: action.response.data.phone,
    email: action.response.data.email,
    hasSurvey: action.response.data.has_survey,
    error: '',
  });
};

const reducerUpdateInfo = (state, action) => {
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

const reducerPatchPassword = (state, action) => {
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

const reducerResetPassword = (state, action) => {
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

const reducerCreateUser = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error.response.data.message,
    });
  }

  return _.assign({}, state, {
    ...state,
    userId: action.response.data.id,
    error: '',
  });
};

const reducerDestroyUser = (state, action) => {
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

const reducerClearError = state => _.assign({}, state, {
  ...state,
  error: '',
});

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case READ_TOKEN:
      return reducerReadToken(state);
    case RETRIEVE_INFO:
      return reducerRetrieveInfo(state, action);
    case UPDATE_INFO:
      return reducerUpdateInfo(state, action);
    case PATCH_PASSWORD:
      return reducerPatchPassword(state, action);
    case RESET_PASSWORD:
      return reducerResetPassword(state, action);
    case CREATE_USER:
      return reducerCreateUser(state, action);
    case DESTROY_USER:
      return reducerDestroyUser(state, action);
    case CLEAR_ERROR:
      return reducerClearError(state);
    default:
      return state;
  }
}
