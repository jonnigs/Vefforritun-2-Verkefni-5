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
          <Helmet>
            <title>Próftöflur</title>
          </Helmet>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/notfound" component={NotFound} />
          <Route exact path="/:schools" component={School} />
        </main>
      </Router>
    );
  }
}

export default App;
