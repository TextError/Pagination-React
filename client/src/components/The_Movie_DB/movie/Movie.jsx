import React from 'react';

import './movie.scss';

const Movie = ({ data }) => {
  const { popularity, vote_count, poster_path, adult, original_title, original_language, release_date, overview } = data;
  return (
    <div className='movie'>
      <div className="card" style={{width: "16rem"}}>
        <div className='title'>
          <h5 className="card-title">{original_title}</h5>
        </div>
        <div className='under-18'>
          <div>adult: <span className="badge badge-pill badge-primary">{adult}</span></div>
        </div>
        <img className="card-img-top" src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={`${original_title}-poster`} style={{width:'100%', height:350}} />
        <div className="card-body">
          <div className='row no-gutters'>
            <div className='col-6'>Vote count</div>
            <div className='col-6'><span className="badge badge-pill badge-primary">{vote_count}</span></div>
          </div>
          <div className='row no-gutters'>
            <div className='col-6'>Popularity</div>
            <div className='col-6'><span className="badge badge-pill badge-primary">{popularity}</span></div>
          </div>
          <div className='row no-gutters'>
            <div className='col-6'>Language</div>
            <div className='col-6'><span className="badge badge-pill badge-primary">{original_language}</span></div>
          </div>
          <div className='row no-gutters'>
            <div className='col-6'>Release date</div>
            <div className='col-6'><span className="badge badge-pill badge-primary">{release_date}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
