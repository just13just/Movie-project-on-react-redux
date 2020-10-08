import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MenuContainer from './elements/MenuContainer';
import MainPageContainer from './elements/MainPageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <MenuContainer />
            <MainPageContainer />
          </Route>
          <Route>
            
          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
