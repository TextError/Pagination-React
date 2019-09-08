import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PostWrapper from './wrapper/Post_Wrapper';

import { connect } from 'react-redux';
import { setPosts } from '../../redux/actions/posts';

import './json-placeholder.scss';


const JsonPlaceholder = ({ setPosts }) => {
  
  useEffect(() => {
    setPosts()
  },[setPosts])

  return (
    <div className='json-placeholder'>
      <div className='wrapper'>
        <div className='container'>
          <PostWrapper />
        </div>
      </div>
    </div>
  )
};

JsonPlaceholder.propTypes = {
  setPosts: PropTypes.func.isRequired
};

export default connect(null, { setPosts })(JsonPlaceholder)
