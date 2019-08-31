import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({obj}) => {
  const { title, data, color } = obj;
  return (
    <div className='row no-gutters'>
      <div className="col-5 offset-1">{title}</div>
      <div className="col-6 d-flex m-auto">
        <div className={`m-auto badge badge-pill badge-${color}`}>{data}</div>
      </div>
    </div>
  );
};
Badge.propTypes = {
  obj: PropTypes.object.isRequired
};

export default Badge;
