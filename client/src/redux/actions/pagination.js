import { PAGE } from './types';

export const changePage = data => ({
  type: PAGE.CHANGE_PAGE,
  payload: data
})