// Actions
export const SET_POSTS = '@posts/SET_POSTS';

// Initial state
const INITIAL_STATE = {
  posts: [],
  loading: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
