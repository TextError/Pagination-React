import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// Css
import './notFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <div className='row no-gutters'>
          <div className='col'>
            <h1 className='m-0'>Oops!</h1> 
            <h4 className='text-center'>404 - Page not found</h4>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <NavLink to='/' className='nav-link text-center' onClick={this.onClick}>
              <span className='btn btn-primary'>Go to homepage</span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NotFound);