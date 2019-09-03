import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Badge from './badge/Badge';
import Poster from './poster/Poster';

import Under18 from '../../assets/underage.png';
import QuestionMark from '../../assets/questionMark.jpg';

import './movie.scss';
import Overview from './overview/Overview';

const Movie = ({ data }) => {
  const [info, setInfo] = useState(false);

  const { popularity, vote_count, poster_path, adult, original_title, original_language, release_date, overview } = data;

  const longTitle = original_title.length > 40 ? true : false; 

  const under18 = (
    <div className='under-18'>
      <img src={Under18} alt='adult movie' height="25px" width="25px" />
    </div>
  );

  const onClick = () => {
    setInfo(!info);
  }

  return (
    <div className='movie'>
      <div className="card" style={{width: "16rem"}}>
        <div className='title'>
          <span className={classnames('popover', {'long-title': longTitle})}>{original_title}</span>
          <h5 className="card-title">{original_title}</h5>
        </div>
        { adult ? under18 : null }
        <div className="flip-card">
          <div className={classnames('flip-card-inner', {'flip' : info})}>
            <div className="flip-card-front">
              { 
                !!poster_path ? 
                <Poster path={`http://image.tmdb.org/t/p/w185${poster_path}`} title={original_title} /> :
                <Poster path={QuestionMark} title={original_title} />
              }
            </div>
            <div className="flip-card-back">
              <Overview overview={overview} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <Badge obj={{title:'Popularity', data:popularity , color:'primary'}}/>
          <Badge obj={{title:'Vote count', data:vote_count , color:'success'}}/>
          <Badge obj={{title:'Language', data:original_language , color:'warning'}}/>
          <Badge obj={{title:'Release date', data:release_date , color:'danger'}}/>
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