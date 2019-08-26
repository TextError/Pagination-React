import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({ title, id }) => (
  <div className='post'>
    <div className='box'>
      <div className='id'><p className='mb-0'>{id}</p></div>
      <div className='title'>{title}</div>
    </div>
  </div>
  )

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Post
