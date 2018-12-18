// Actions
const SET_SCROLL = 'SET_SCROLL';

export const ScrollFilters = {
  UNABLE_SCROLL: false,
  ENABLE_SCROLL: true,
};

// Action Creators
export function setScroll(filter) {
  return {
    type: SET_SCROLL,
    filter,
  };
}

// Reducer
export default function reducer(state = ScrollFilters.UNABLE_SCROLL, action) {
  switch (action.type) {
    case SET_SCROLL:
      return action.filter;
    default:
      return state;
  }
}
