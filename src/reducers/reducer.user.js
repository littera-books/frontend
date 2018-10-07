import _ from 'lodash';

// Actions
const READ_TOKEN = 'READ_TOKEN';

// Action Creators
export const readToken = () => ({
  type: READ_TOKEN,
});

// Initial State
const initialState = {
  username: '',
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
    username: decodedData.username,
    email: decodedData.email,
    exp: decodedData.exp,
    error: '',
  });
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case READ_TOKEN:
      return reducerReadToken(state);
    default:
      return state;
  }
}
