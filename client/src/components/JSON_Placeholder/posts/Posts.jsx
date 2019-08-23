import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts_posts } from '../../../redux/selectors/posts';

const Posts = ({ posts }) => {
  return (
    <ul className='list-group mb-4'>
      {posts.map(i => <li key={i.id} className='list-group-item mb-2'>{i.title}</li>)}
    </ul>
  )
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  posts: select_posts_posts
})

export default connect(mapStateToProps, null)(Posts);