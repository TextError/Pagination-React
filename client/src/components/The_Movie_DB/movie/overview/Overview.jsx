import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Overview = ({ overview }) => {
  const longOverview = overview.length > 300 ? true : false;
  return (
  <div className={classnames('overview', {'scroll': longOverview})}><i>{overview}</i></div>
  );
}

Overview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default Overview;
