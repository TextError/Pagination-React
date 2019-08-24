import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Pagination = ({ movies: { total_pages, page } }) => {
  const page_element = []
  for (let i = 1; i <= total_pages; i++) {
    let active = page === i ? 'btn btn-primary' : 'btn';
    page_element.push(
      <li 
        className={`mr-1 ml-1 ${active}`}
        key={i}
        onClick={() => console.log('call next_page()')}      
      >{i}</li>
    )
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='pagination'>
          {page_element}
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {

};

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(Pagination);
