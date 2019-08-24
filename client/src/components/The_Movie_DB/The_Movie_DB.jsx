import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setMovie } from '../../redux/actions/movies';

import MovieWrapper from './wrapper/Movies_Wrapper';

const TheMovieDB = ({ setMovie }) => {

  useEffect(() => {
    setMovie('tom')
  }, [setMovie])

  return (
    <div className='the-movie'>
      <MovieWrapper />
    </div>
  )
};

TheMovieDB.propTypes = {
  setMovie: PropTypes.func.isRequired
}

export default connect(null, { setMovie })(TheMovieDB)
