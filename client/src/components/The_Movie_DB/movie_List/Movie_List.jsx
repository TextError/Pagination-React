import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Movie from '../movie/Movie';

import './movie-list.scss'

const MovieList = ({ movies: { movieData } }) => {
  return (
    <div className='movie-list'>
      <div className='row no-gutters'>
        {movieData.map(i => (
            <div key={i.id} className='col col-sm-6 col-md-4 col-lg-3'>
              <Movie data={i} />
            </div>
          ))}
      </div>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(MovieList);
