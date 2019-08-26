import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'; 
import { nextPage, prevPage } from '../../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_posts_current_page, select_posts_pages } from '../../../redux/selectors/posts';

const Pagination = ({ currentPage, pages, nextPage, prevPage }) => {
  const prev = currentPage > 1 ? true : false;
  const next = currentPage < pages.length ? true : false;
  return (
    <div className="pagination">
      <button className='btn btn-primary' disabled={!prev} onClick={() => prevPage(currentPage-1)}>
      <i className="fas fa-arrow-left"></i>
      </button>
      <div className="pages">
        {currentPage} / {pages[pages.length-1]}
      </div>
      <button className='btn btn-primary' disabled={!next} onClick={() => nextPage(currentPage+1)}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.array.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  currentPage: select_posts_current_page,
  pages: select_posts_pages
});

export default connect(mapStateToProps, { nextPage, prevPage })(Pagination);
