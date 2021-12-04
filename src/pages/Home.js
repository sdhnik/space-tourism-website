import { h } from 'preact';

import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <h1>Home</h1>
      </section>
    </div>
  );
};

export default Home;