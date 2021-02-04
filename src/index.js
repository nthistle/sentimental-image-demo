import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutTest from './AboutTest';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={AboutTest} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
