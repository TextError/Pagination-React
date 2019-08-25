import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Movie from '../movie/Movie';

const MovieList = ({ movies: { movieData } }) => {
  return (
    <div className=''>
      {movieData.map(i => (
        <Movie key={i.id} data={i} />
      ))}
    </div>
  )
}

MovieList.propTypes = {
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(MovieList);
