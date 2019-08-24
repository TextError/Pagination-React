import { POSTS, PAGE } from '../actions/types';
import { postsPerPageFunc, pageNumberFunc } from '../utils/posts';

const INITIAL_STATE = {
  data: null,
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
    case PAGE.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        posts: postsPerPageFunc( action.payload, state.postsPerPage, state.data )
      }
    default:
      return state;
  };
};

export default setPosts;