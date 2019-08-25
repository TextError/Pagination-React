import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts_posts } from '../../../redux/selectors/posts';

import Post from '../post/Post';
import Pagination from '../pagination/Pagination';

const Posts = ({ list_of_posts }) => (
  <div className='posts'>
    <div className='post-list'>
      {list_of_posts.map(post => <Post key={post.id} {...post} />)}
    </div>
    <div className='pagination'>
      <Pagination />
    </div>
  </div>
  )

Posts.propTypes = {
  list_of_posts: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  list_of_posts: select_posts_posts
});

export default connect(mapStateToProps, null)(Posts)
