import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Pinnekamp from './Pinnekamp/Pinnekamp';
import Error404 from './Home/Error404';

const App: React.FC = () => {
  return (
    <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pinnekamp" component={Pinnekamp} />
            <Route component={Error404} />
        </Switch>
    </main>
  );
}

export default App;
