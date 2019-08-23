import { POSTS } from '../actions/types';
import { postsPerPageFunc, pageNumberFunc } from '../utils/posts';

const INITIAL_STATE = {
  data: [],
  currentPage: 1,
  postsPerPage: 10,
  posts:[],
  pages:[],
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
        data: action.payload,
        posts: postsPerPageFunc(state.currentPage, state.postsPerPage, action.payload),
        pages: pageNumberFunc(state.postsPerPage, action.payload.length)
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