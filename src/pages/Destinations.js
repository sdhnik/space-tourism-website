import { h } from 'preact';

import Header from '../components/Header';

const Destinations = props => {
  const { data } = props;

  return (
    <div className="destinations">
      <Header />

      <section>
        <h1>Destinations</h1>
      </section>
    </div>
  );
};

export default Destinations;