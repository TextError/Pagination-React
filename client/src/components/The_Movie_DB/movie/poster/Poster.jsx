import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ path, title }) =>(
    <img 
      className='card-img-top'
      src={path}
      alt={`${title}-poster`} 
      style={{width:'100%', 
      height:350}}
    />
  );

Poster.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Poster;
