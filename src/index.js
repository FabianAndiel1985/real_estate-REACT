import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch } from 'react-router-dom';
import Team from './components/team/team';
import PageNotFound from './components/page-not-found/page-not-found';
import Footer from './components/footer/footer';

ReactDOM.render(
  <HashRouter>
  <Switch>
    <Route exact={true} path="/" component={App}/>
    <Route path="/team" component={Team}/>
    <Route component={PageNotFound}/>
   </Switch>
   <Footer> </Footer>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
