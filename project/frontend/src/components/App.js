import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store';

import MainPage from './MainPage';
import LandingPage from './LandingPage';

export default function App() {
  return(
    <Provider store={store}>
      <HashRouter>
        <Route path='/' exact component={MainPage} />
        <Route path='/landing/:name' component={LandingPage} />
      </HashRouter> 
    </Provider>
    
  )
}

ReactDOM.render(<App />, document.getElementById('app'));