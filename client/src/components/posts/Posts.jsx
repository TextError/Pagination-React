import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Posts = ({ posts: { posts } }) => {
  return (
    <ul className='list-group mb-4'>
      {posts.map(i => <li key={i.id} className='list-group-item mb-2'>{i.title}</li>)}
    </ul>
  )
};

Posts.propTypes = {
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, null)(Posts);