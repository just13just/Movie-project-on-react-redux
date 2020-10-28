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
import FavoritesPageContainer from './elements/FavoritesPageContainer';


function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainPageContainer
              toggle={toggle}
              setToggle={setToggle}
            />
          </Route>
          <Route exact path='/favorites'>
            <FavoritesPageContainer
              toggle={toggle}
              setToggle={setToggle}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
