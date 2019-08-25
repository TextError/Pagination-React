import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({ title }) => (
  <div className='post'>
    <p className='title'>{title}</p>
  </div>
  )

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
