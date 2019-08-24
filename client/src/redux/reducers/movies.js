import { MOVIE } from '../actions/types';

const INITIAL_STATE = {
  movieData: [],
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
        movieData: action.payload
      }
    case MOVIE.MOVIE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  };
};

export default setPosts;