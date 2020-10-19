import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainPageContainer from './elements/MainPageContainer';
import FavoritesPage from './elements/FavoritesPage';
import Menu from './elements/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Menu />
            <MainPageContainer />
          </Route>
          <Route exact path='/favorites'>
            <Menu />
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
