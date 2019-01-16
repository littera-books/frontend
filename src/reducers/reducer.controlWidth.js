import _ from 'lodash';

// Actions
const LISTEN_WIDTH = 'LISTEN_WIDTH';

// Action Creators
export const listenWidth = width => ({
  type: LISTEN_WIDTH,
  width,
});

// Initial State
const initialState = {
  width: 0,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LISTEN_WIDTH:
      return _.assign({}, state, {
        ...state,
        width: action.width,
      });
    default:
      return state;
  }
}
