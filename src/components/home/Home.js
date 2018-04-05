import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

export default class Home extends Component {

  constructor() {
    super();
    this.state = {stats: [],
    };
  }

  componentDidMount() {
    fetch('https://vefforritun2-2018-v4-synilausn.herokuapp.com/stats')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({stats: data.stats});
    });
    return 1;
  }

  render() {

    return (
      <div className="home">
        <h2>Tölfræði</h2>
        <div>
        <strong><p>Fjöldi prófa</p></strong> <p>{this.state.stats.numTests}</p>
        <strong><p>Fjöldi nemenda í öllum prófum</p></strong> <p>{this.state.stats.numStudents}</p>
        <strong><p>Meðalfjöldi nemenda í prófi</p></strong> <p>{this.state.stats.averageStudents}</p>
        <strong><p>Minnsti fjöldi nemenda í prófi</p></strong> <p>{this.state.stats.min}</p>
        <strong><p>Mesti fjöldi nemenda í prófi</p></strong> <p>{this.state.stats.max}</p>
        </div>
      </div>
    );
  }
}
