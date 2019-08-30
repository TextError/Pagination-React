import React, { useState } from 'react';
import classnames from 'classnames';

import Under18 from '../../assets/underage.png';
import QuestionMark from '../../assets/questionMark.jpg';

import './movie.scss';

const Movie = ({ data }) => {
  const [info, setInfo] = useState(false);
  const { popularity, vote_count, poster_path, adult, original_title, original_language, release_date, overview } = data;
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

  const longTitle = original_title.length > 40 ? true : false; 

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
        { !!poster_path ? img : noImg }
        <div className="card-body">
          <div className='row no-gutters'>
            <div className="col-5 offset-1">Populoarity</div>
            <div className="col-6 d-flex m-auto">
              <div className="m-auto badge badge-pill badge-primary">{popularity}</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className="col-5 offset-1">Vote count</div>
            <div className="col-6 d-flex m-auto">
              <div className="m-auto badge badge-pill badge-success">{vote_count}</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className="col-5 offset-1">Language</div>
            <div className="col-6 d-flex m-auto">
              <div className="m-auto badge badge-pill badge-warning">{original_language}</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className="col-5 offset-1">Relase date</div>
            <div className="col-6 d-flex m-auto">
              <div className="m-auto badge badge-pill badge-danger">{release_date}</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='more-info'>
                <p>More Info</p>
                <i className='on'>On</i>
                <i className='off'>Off</i>
                <div 
                  onClick={()=> onClick()} 
                  className={classnames('info', {'move bg-danger' : !info, 'bg-success': info})}
                  >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
