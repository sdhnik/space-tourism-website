import { h } from 'preact';

import Header from '../components/Header';
import { Link } from 'preact-router/match';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <section className="home__content">
        <div className="home__content__text">
          <h1>
            <span className="h5 section__title">So, you want to travel to </span>
            <span>Space</span>
          </h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world  experience!</p>
        </div>
        <div className="home__content__button">
          <Link href="/destination.html" className="">Explore</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;