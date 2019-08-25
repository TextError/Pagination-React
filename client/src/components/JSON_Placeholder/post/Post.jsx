import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({ title, body }) => (
  <div className='post'>
    <p className='title'>{title}</p>
    <p className='body'>body{console.log(body)}</p>
  </div>
  )

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Post
