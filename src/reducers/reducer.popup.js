// Actions
const INITIALIZE = 'INITIALIZE';
const SET_HEADER_PROPERTY = 'SET_HEADER_PROPERTY';
const SET_MESSAGE_PROPERTY = 'SET_MESSAGE_PROPERTY';

// Action Creators
export function initializePopup() {
  return {
    type: INITIALIZE,
  };
}

export function setHeaderProperty(header) {
  return {
    type: SET_HEADER_PROPERTY,
    header,
  };
}

export function setMessageProperty(message) {
  return {
    type: SET_MESSAGE_PROPERTY,
    message,
  };
}

// Initial State
const initialState = {
  header: '',
  message: '',
};

// Reducer Functions;
function reducerInitialize(state) {
  return {
    ...state,
    header: '',
    message: '',
  };
}

function reducerSetHeaderProperty(state, action) {
  return {
    ...state,
    header: action.header,
  };
}

function reducerSetMessageProperty(state, action) {
  return {
    ...state,
    message: action.message,
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return reducerInitialize(state);
    case SET_HEADER_PROPERTY:
      return reducerSetHeaderProperty(state, action);
    case SET_MESSAGE_PROPERTY:
      return reducerSetMessageProperty(state, action);
    default:
      return state;
  }
}
