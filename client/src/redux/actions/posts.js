import axios from 'axios';
import { POSTS } from './types';

export const setPosts = () => dispatch => {
  dispatch({ type: POSTS.POST_LOADING })
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({
      type: POSTS.POST_UPDATE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: POSTS.POST_ERROR,
      payload: err.response.data
    }))
}