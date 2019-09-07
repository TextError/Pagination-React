import axios from 'axios';
import { apiKey } from '../../config/keys';
import { MOVIE } from './types';

export const setMovie =  movie => dispatch => {
  dispatch({ type: MOVIE.MOVIE_LOADING })
  axios
    .get(`http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`)
    .then(res => dispatch({
      type: MOVIE.MOVIE_UPDATE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: MOVIE.MOVIE_ERROR,
      payload: err.response.data
    }))
}

export const nextPage = ({ movie, page }) => dispatch => {
  dispatch({ type: MOVIE.MOVIE_LOADING });
  axios
    .get(`http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}&page=${page}`)
    .then(res => dispatch({
      type: MOVIE.MOVIE_NEXT_PAGE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: MOVIE.MOVIE_ERROR,
      payload: err.response.data
    }))
}