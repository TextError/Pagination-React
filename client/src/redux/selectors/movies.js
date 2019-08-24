import { createSelector } from 'reselect';

const select_movie_state = state => state.movies;


export const select_movie_isLoaded = createSelector(
  [select_movie_state],
  movies => !!movies.movieData
);