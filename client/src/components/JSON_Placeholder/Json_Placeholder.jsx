import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PostWrapper from './wrapper/Post_Wrapper';
import Pagination from '../common/pagination/Pagination';

import { connect } from 'react-redux';
import { setPosts } from '../../redux/actions/posts';


const JsonPlaceholder = ({ setPosts }) => {
  
  useEffect(() => {
    setPosts()
  },[setPosts])

  return (
    <div>
      <PostWrapper />
      <Pagination />
    </div>
  )
};

JsonPlaceholder.propTypes = {
  setPosts: PropTypes.func.isRequired
};

export default connect(null, { setPosts })(JsonPlaceholder)
