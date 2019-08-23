import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import Home from './components/home/Home';
import TheMovieDB from './components/The_Movie_DB/The_Movie_DB';
import JsonPlaceholder from './components/JSON_Placeholder/Json_Placeholder';
import NotFound from './components/common/notFound/Not_Found';
import Footer from './components/layout/footer/Footer';

import './app.scss';

const App = () => {

  return(
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/json' component={JsonPlaceholder} />
          <Route exact path='/the-movie-db' component={TheMovieDB} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
)};

export default App;