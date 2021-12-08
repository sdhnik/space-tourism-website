import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import Router from 'preact-router';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import './scss/style.scss';

const Layout = () => {
  const [data, setData] = useState(null);
  
  const handleRoute = () => {
    if (!data) {
      fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(() => setData({}));
    }
  };

  return (
    <Router onChange={handleRoute}>
      <Home path="/" />
      <Destinations path="/destination.html" data={data?.destinations} />
      <Crew path="/crew.html" data={data?.crew} />
      <Technology path="/technology.html" data={data?.technology} />
    </Router>
  )
}

render(<Layout />, document.querySelector('#content'));