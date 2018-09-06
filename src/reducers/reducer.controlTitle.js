// Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_TITLE: 'visible',
  HIDE_TITLE: 'hidden',
};

// Action Creators
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

// Reducer
export default function reducer(state = VisibilityFilters.SHOW_TITLE, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
