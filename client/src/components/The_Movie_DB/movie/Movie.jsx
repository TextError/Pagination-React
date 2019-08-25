import React from 'react'

const Movie = ({ data }) => {
  const { popularity, vote_count, poster_path, adult, original_title, original_language, release_date, overview } = data;
  console.log(overview)
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={`${original_title}-poster`} style={{width:'100%', height:350}} />
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <div className='d-flex'>
          <ul>
            <li>popularity: <span className="badge badge-pill badge-primary">{popularity}</span></li>
            <li>Vote count: <span className="badge badge-pill badge-primary">{vote_count}</span></li>
            <li>adult: <span className="badge badge-pill badge-primary">{adult}</span></li>
            <li>Language: <span className="badge badge-pill badge-primary">{original_language}</span></li>
            <li>Release: <span className="badge badge-pill badge-primary">{release_date}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Movie
