import React from 'react';
import {ReactComponent as Logo} from './undraw_junior_soccer_6sop.svg';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        Hasle Løren Damer
      </header>
      <Logo className="Home-logo" />
    </div>
  );
}

export default Home;
