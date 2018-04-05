import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {

    return (
      <Router>
        <main className="app">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/:schools" component={School} />
        </main>
      </Router>
    );
  }
}

export default App;
