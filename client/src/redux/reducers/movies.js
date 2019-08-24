import { MOVIE } from '../actions/types';

const INITIAL_STATE = {
  movieData: [],
  page: 0,
  total_results: 0,
  total_pages: 0,
  loading: false
};

const setPosts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MOVIE.MOVIE_LOADING:
      return {
        ...state,
        loading: true
      }
    case MOVIE.MOVIE_UPDATE:
      return {
        ...state,
        loading: false,
        movieData: action.payload.results,
        page: action.payload.page,
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages
      }
    case MOVIE.MOVIE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case MOVIE.MOVIE_NEXT_PAGE:
      return {
        ...state,
        loading: false,
        movieData: action.payload.results,
        page: action.payload.page,
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages
      }
    default:
      return state;
  };
};

export default setPosts;