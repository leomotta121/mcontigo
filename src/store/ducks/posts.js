import produce from 'immer';

// Actions
export const SET_POSTS = '@posts/SET_POSTS';
export const SET_LOADING_TRUE = '@posts/SET_LOADING_TRUE';
export const SET_LOADING_FALSE = '@posts/SET_LOADING_FALSE';

// Initial state
const INITIAL_STATE = {
  posts: [],
  loading: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return produce(state, draft => {
        draft.loading = true;
      });

    case SET_LOADING_FALSE:
      return produce(state, draft => {
        draft.loading = false;
      });

    case SET_POSTS:
      return produce(state, draft => {
        const { posts } = action;
        draft.posts = posts;
      });
    default:
      return state;
  }
}

// Actions creators
export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  };
}

export function setLoadingTrue() {
  return {
    type: SET_LOADING_TRUE,
  };
}

export function setLoadingFalse() {
  return {
    type: SET_LOADING_FALSE,
  };
}
