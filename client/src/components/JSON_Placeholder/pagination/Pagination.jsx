import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'; 
import { nextPage, prevPage } from '../../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';

const Pagination = ({ posts, nextPage, prevPage }) => {
  const { currentPage, pages} = posts;
  return (
    <div className="pagination">
      <div className='true or false' onClick={() => prevPage(currentPage-1)}>
        left
      </div>
      <div className="pages">
        {currentPage} / {pages[pages.length-1]}
      </div>
      <div className='true or false' onClick={() => nextPage(currentPage+1)}>
        right
      </div>
    </div>
  )
};

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { nextPage, prevPage })(Pagination);
