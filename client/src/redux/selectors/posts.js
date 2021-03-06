import { createSelector } from 'reselect';

const select_posts_state = state => state.posts;


export const select_posts_isLoaded = createSelector(
  [select_posts_state],
  posts => !!posts.data
);

export const select_posts_posts = createSelector(
  [select_posts_state],
  posts => posts.posts
);

export const select_posts_current_page = createSelector(
  [select_posts_state],
  posts => posts.currentPage
);
export const select_posts_pages = createSelector(
  [select_posts_state],
  posts => posts.pages
);