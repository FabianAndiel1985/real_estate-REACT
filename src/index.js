import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch } from 'react-router-dom';
import Team from './components/team/team';
import PageNotFound from './components/page-not-found/page-not-found';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import DateContext from './components/higher-order-component/date-context';
import Products from './components/products/products';
import ShoppingCart from './components/shopping-cart/shopping-cart';



axios.defaults.baseURL = 'https://realestate-ec9a6.firebaseio.com/';

ReactDOM.render(
  <HashRouter>
  <Navigation/>
	  <Switch>
	    <Route exact={true} path="/" component={App}/>   
	    <Route path="/team">
	    	<DateContext.Provider>
	    		<Team/>
	    	</DateContext.Provider>
	    </Route>
	    <Route path="/products" component={Products}/>
	    <Route path="/shopping-cart" component={ShoppingCart}/>
	    <Route component={PageNotFound}/>
	  </Switch>
   <Footer creator="Fabian Andiel"/>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
