import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({ title, id }) => (
  <div className='post'>
    <div className='box'>
      <div className='id'><p className='mb-0'>{id}.</p></div>
      <div className='title'>
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}.</span>
      </div>
    </div>
  </div>
  )

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Post
