import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setMovie } from '../../redux/actions/movies';

import MovieWrapper from './wrapper/Movies_Wrapper';
import InputField from '../common/input/Input_Field';
import CustomButton from '../common/button/Custom_Button';
import Pagination from './pagination/Pagination';

import './the_movie_db.scss';

const TheMovieDB = ({ setMovie }) => {
  const [state, setState] = useState({ movie: '' });
  const { movie } = state;

  const onSubmit = () => {
    setMovie(movie);
  };

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  return (
    <div className='the-movie'>
      <div className='wrapper'>
        <div className='row no-gutters'>
          <div className='col-9'>
            <div className='search-field'>
              <InputField name='movie' value={movie} onChange={onChange} type='text' label='search Movie' />
            </div>
          </div>
          <div className='col-3'>
            <div className='search-btn'>
              <div onClick={onSubmit}>
                <CustomButton value='search' isClass='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieWrapper />
      <Pagination movie={movie} />
    </div>
  )
};

TheMovieDB.propTypes = {
  setMovie: PropTypes.func.isRequired
}

export default connect(null, { setMovie })(TheMovieDB)
