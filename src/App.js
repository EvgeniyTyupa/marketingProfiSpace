import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter, Switch, Redirect, HashRouter } from "react-router-dom";
import Ru from './Components/Ru/Ru';
import Ua from './Components/Ua/Ua';
import En from './Components/En/En';

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <div className="main">
          <Route path="/ru" render={() => <Ru />} exact />
          <Redirect from="/" to="/ru"></Redirect>
          <Route path="/ua" render={() => <Ua />} />
          <Route path="/en" render={() => <En />} />
        </div>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
