import React, { useState } from 'react';
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

  const [modalFilmNum, setModalFilmNum] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className={modalFilmNum !== null ? `main-menu` : ``}>
              <Menu
                setModalFilmNum={setModalFilmNum}
              />
            </div>
            <MainPageContainer
              modalFilmNum={modalFilmNum}
              setModalFilmNum={setModalFilmNum}
            />
          </Route>
          <Route exact path='/favorites'>
            <div className={modalFilmNum !== null ? `main-menu` : ``}>
              <Menu
                setModalFilmNum={setModalFilmNum}
              />
            </div>
            <FavoritesPage
              modalFilmNum={modalFilmNum}
              setModalFilmNum={setModalFilmNum}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
