import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Poster = ({ path, title, hide }) =>(
    <img 
      className={classnames('card-img-top', {'hide' : hide})} 
      src={path}
      alt={`${title}-poster`} 
      style={{width:'100%', 
      height:350}}
    />
  );

Poster.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired
};

export default Poster;
