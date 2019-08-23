import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PostWrapper from './components/posts/Post_Wrapper';
import Pagination from './components/pagination/Pagination';

import { connect } from 'react-redux';
import { setPosts } from './redux/actions/posts';

import './app.scss';

const App = ({ setPosts }) => {

  useEffect(() => {
    setPosts()
  });

  return(
    <div className='container mt-5'>
      <h1 className='text-primary mb-3 text-center'>JSONPlaceholder posts</h1>
      <PostWrapper />
      <Pagination />
    </div>
)};

App.propTypes = {
  setPosts: PropTypes.func.isRequired
}

export default connect(null, { setPosts } )(App);