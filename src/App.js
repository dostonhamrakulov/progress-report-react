import React from 'react';
import './main.css';
import About from './About';
import Nav from './Nav';
import Reports from './Reports';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route path={'/'} exact component={Homepage} />
                  <Route path={'/about'} exact component={About} />
                  <Route path={'/reports'} exact component={Reports} />
              </Switch>

          </div>
      </Router>

  );
}

const Homepage = () => (
    <div>
        <h1>Homepage</h1>
        <p>Please select what you want to see</p>
    </div>
);

export default App;
