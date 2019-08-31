import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Under18 from '../../assets/underage.png';
import QuestionMark from '../../assets/questionMark.jpg';

import './movie.scss';
import Badge from './badge/Badge';

const Movie = ({ data }) => {
  const [info, setInfo] = useState(false);
  const { popularity, vote_count, poster_path, adult, original_title, original_language, release_date, overview } = data;

  const longTitle = original_title.length > 40 ? true : false; 
  const longOverview = overview.length > 300 ? true : false;

  const under18 = (
    <div className='under-18'>
      <img src={Under18} alt='test' height="25px" width="25px" />
    </div>
  );

  const img = (
    <img className="card-img-top" src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={`${original_title}-poster`} style={{width:'100%', height:350}} />
  );

  const  noImg= (
    <img className="card-img-top" src={QuestionMark} alt={`${original_title}-poster`} style={{width:'100%', height:350}} />
  );

  const overviewPage = (
    <div className={classnames('overview', {'scroll': longOverview})}><i>{overview}</i></div>
  )

  const onClick = () => {
    setInfo(!info)
  }

  return (
    <div className='movie'>
      <div className="card" style={{width: "16rem"}}>
        <div className='title'>
          <span className={classnames('popover', {'long-title': longTitle})}>{original_title}</span>
          <h5 className="card-title">{original_title}</h5>
        </div>
        { adult ? under18 : null }
        { !info ? !!poster_path ? img : noImg : overviewPage}
        <div className="card-body">
          <Badge title='Popularity' data={popularity} />
          <Badge title='Vote count' data={vote_count} />
          <Badge title='Language' data={original_language} />
          <Badge title='Relase date' data={release_date} />
          <div className='row no-gutters'>
            <div className='col'>
              <div className='more-info'>
                <p>More Info</p>
                <div
                  onClick={()=> onClick()}
                  className={classnames('info', {'move bg-danger' : !info, 'bg-success': info})}>
                  <i className='on'>On</i>
                  <span></span>
                  <i className='off'>Off</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired
}

export default Movie;