import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { nextPage } from '../../../redux/actions/movies';

const Pagination = ({ movies: { total_pages, page }, nextPage, movie }) => {
  const page_element = []
  for (let i = 1; i <= total_pages; i++) {
    let active = page === i ? 'btn btn-primary' : 'btn';
    page_element.push(
      <li 
        className={`mr-1 ml-1 ${active}`}
        key={i}
        onClick={() => nextPage({ movie, page:i })}      
      >{i}</li>
    )
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='pagination'>
            <ul>
              {page > 1 ? <li className='btn mr-1' onClick={() => nextPage({ movie, page: page-1 })}>prev</li>: null}
              {page_element}
              {page < total_pages ? <li className='btn ml-1'>next</li>: null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, { nextPage })(Pagination);
