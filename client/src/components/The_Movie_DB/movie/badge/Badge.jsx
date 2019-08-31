import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ title, data }) => (
  <div className='row no-gutters'>
    <div className="col-5 offset-1">{title}</div>
    <div className="col-6 d-flex m-auto">
      <div className="m-auto badge badge-pill badge-success">{data}</div>
    </div>
  </div>
);

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired
}

export default Badge
