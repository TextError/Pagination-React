import React from 'react';
import { Link } from 'react-router-dom'

import CustomButton from '../common/button/Custom_Button';

import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='links'>
        <Link to='json'>
          <CustomButton value='Json Placeholder' isClass='' />
        </Link>
        <br />
        <Link to='the-movie-db'>
          <CustomButton value='The Movie DB' isClass='' />
        </Link>
      </div>
    </div>
  )
}

export default Home
