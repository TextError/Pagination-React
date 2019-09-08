import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(isOpen => !isOpen);
  };


  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={Logo} alt='logo' /> */}
          <button type='button' className='logo-btn' onClick={toggle}>
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>
        <ul className={classnames('nav-links', {'show-nav' : !isOpen})}>
          <li ><Link to='/json' />Pagination 1</li>
          <li ><Link to='/the-movie-db' />Pagination 2</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar