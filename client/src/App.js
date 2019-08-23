import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setPosts } from './redux/actions/posts';

import './app.scss';

const App = ({ setPosts }) => {

  useEffect(() => {
    setPosts()
  });

  return(
    <div className='container'>
      app
    </div>
)};

App.propTypes = {
  setPosts: PropTypes.func.isRequired
}

export default connect(null, { setPosts } )(App);