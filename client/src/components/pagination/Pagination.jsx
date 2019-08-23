import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts_pages } from '../../redux/selectors/posts';

const Pagination = ({ pages }) => {
  return (
    <nav>
      <ul className='pagination'>
        {pages.map(i => (
          <li key={i} className='page-item'>
            <span className='page-link'>{i}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
};

Pagination.propTypes = {
  pages: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  pages: select_posts_pages
});

export default connect(mapStateToProps, null)(Pagination)
