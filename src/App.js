import React, { lazy } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
const Ru = lazy(() => import('./Components/Ru/Ru'));
const Ua = lazy(() => import('./Components/Ua/Ua'));
const En = lazy(() => import('./Components/En/En'));

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <div className="main">
          <Route path="/ru" render={() => <Ru />} />
          <Redirect from="/" to="/ru"></Redirect>
          <Route path="/ua" render={() => <Ua />} />
          <Route path="/en" render={() => <En />} />
        </div>
      </Switch>


    </BrowserRouter>
  );
}

let mapStateToProps = (state) => ({
  currentLanguage: state.common.currentLanguage,
  isRegistered: state.common.isRegistered
})

export default connect(mapStateToProps, {})(App);
