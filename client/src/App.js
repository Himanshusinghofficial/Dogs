import React, { useEffect,Fragment } from 'react';
import Header from './Header'
import Fetchdata from './Fetchdata'
import Logs from './Logs'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux'
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Fetchdata />
        <Logs />
      </Fragment>
    </Provider>
  );
}

export default App;

