import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

const Pagination = ({ posts }) => {
  const { currentPage, pages} = posts;
  return (
    <div className="pagination">
      <div className='true or false' onClick={() => console.log('left')}>
        left
      </div>
      <div className="pages">
        {currentPage} / {pages[pages.length-1]}
      </div>
      <div className='true or false' onClick={() => console.log('right')}>
        right
      </div>
    </div>
  )
};

Pagination.propTypes = {

};

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, {  })(Pagination);
