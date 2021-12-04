import "preact/debug";
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
      <Destinations path="/destinations" />
      <Crew path="/crew" />
      <Technology path="/technology" />
    </Router>
  </div>
), document.querySelector('main'));