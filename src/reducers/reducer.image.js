import _ from 'lodash';
import { axiosNoAuth } from './axios.instance';

// Actions
const GET_IMG = 'GET_IMG';

// Action Creators
export const getImg = async (name) => {
  let response;
  let error;

  try {
    response = await axiosNoAuth({
      url: `/image/${name}`,
      method: 'get',
    });
  } catch (e) {
    error = e;
  }

  return {
    type: GET_IMG,
    response,
    error,
  };
};

// Initial State
const initialState = {
  items: [],
  error: '',
};

// Reducer Functions
const reducerGetImg = (state, action) => {
  if (action.error) {
    return _.assign({}, state, {
      ...state,
      error: action.error.message,
    });
  }

  return _.assign({}, state, {
    items: [
      ...state.items,
      {
        name: action.response.data.name,
        url: action.response.data.url,
      },
    ],
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMG:
      return reducerGetImg(state, action);
    default:
      return state;
  }
}
