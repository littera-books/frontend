// Actions
const SET_CLOSE_BUTTON = 'SET_CLOSE_BUTTON';

export const CloseFilters = {
  SHOW_CLOSE: true,
  HIDE_CLOSE: false,
};

// Action Creators
export function setClose(filter) {
  return {
    type: SET_CLOSE_BUTTON,
    filter,
  };
}

// Reducer
export default function reducer(state = CloseFilters.SHOW_CLOSE, action) {
  switch (action.type) {
    case SET_CLOSE_BUTTON:
      return action.filter;
    default:
      return state;
  }
}
