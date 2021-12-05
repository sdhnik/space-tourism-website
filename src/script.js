import { h, render } from 'preact';
import Router from 'preact-router';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import './scss/style.scss';

render((
  <div>
    <Router>
      <Home path="/" />
      <Destinations path="/destination.html" />
      <Crew path="/crew.html" />
      <Technology path="/technology.html" />
    </Router>
  </div>
), document.querySelector('#content'));