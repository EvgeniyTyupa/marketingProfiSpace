import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import {Provider} from "react-redux";
import { Suspense } from 'react';
import Preloader from './Components/Preloader/Preloader';
import './Utils/i18n.js';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Preloader/>}>
      <App/>
    </Suspense>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
