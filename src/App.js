import React from 'react';
import './main.css';
import About from './About';
import Reports from './Reports';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path={'/about'} exact component={About} />
                  <Route path={'/'} exact component={Reports} />
              </Switch>

          </div>
      </Router>

  );
}

export default App;
