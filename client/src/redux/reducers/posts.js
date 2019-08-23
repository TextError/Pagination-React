import { POSTS } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  error: {},
  loading: false
};

const setPosts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POSTS.POST_LOADING:
      return {
        ...state,
        loading: true
      }
    case POSTS.POST_UPDATE:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    case POSTS.POST_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  };
};

export default setPosts;