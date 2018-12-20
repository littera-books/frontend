// Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_TITLE: true,
  HIDE_TITLE: false,
};

// Action Creators
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

// Reducer
export default function reducer(state = VisibilityFilters.HIDE_TITLE, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
