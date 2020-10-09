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
import FavoritesPageContainer from './elements/FavoritesPageContainer copy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <MenuContainer />
            <MainPageContainer />
          </Route>
          <Route exact path='/favorites'>
            <MenuContainer />
            <FavoritesPageContainer />
          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
