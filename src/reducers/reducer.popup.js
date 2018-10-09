import _ from 'lodash';

// Actions
const INITIALIZE = 'INITIALIZE';
const SET_POPUP_HEADER_MESSAGE = 'SET_POPUP_HEADER_MESSAGE';
const SET_POPUP_BUTTONS = 'SET_POPUP_BUTTONS';

// Action Creators
export function initializePopup() {
  return {
    type: INITIALIZE,
  };
}

export function setPopupHeaderMessage(payload) {
  return {
    type: SET_POPUP_HEADER_MESSAGE,
    header: payload.header,
    message: payload.message,
  };
}

export function setPopupButtons(payload) {
  return {
    type: SET_POPUP_BUTTONS,
    confirm: payload.confirm,
    cancel: payload.cancel,
  };
}

// Initial State
const initialState = {
  header: '',
  message: '',
  confirm: '',
  cancel: '',
};

// Reducer Functions;
function reducerInitialize(state) {
  return _.assign({}, state, {
    ...state,
    header: '',
    message: '',
    confirm: '',
    cancel: '',
  });
}

const reducerSetPopupHeaderMessage = (state, action) => _.assign({}, state, {
  ...state,
  header: action.header,
  message: action.message,
});

const reducerSetPopupButtons = (state, action) => _.assign({}, state, {
  ...state,
  confirm: action.confirm,
  cancel: action.cancel,
});

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return reducerInitialize(state);
    case SET_POPUP_HEADER_MESSAGE:
      return reducerSetPopupHeaderMessage(state, action);
    case SET_POPUP_BUTTONS:
      return reducerSetPopupButtons(state, action);
    default:
      return state;
  }
}
