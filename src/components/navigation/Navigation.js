import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Navigation.css';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {

  constructor() {
    super();
    this.state = {svid: [],
    };
  }

  componentDidMount() {
    fetch('https://vefforritun2-2018-v4-synilausn.herokuapp.com/')
    .then(results => {
      return results.json();
    }).then(data => {
      let svid = data.schools.map((sv) => {
        return(
          <li key={sv.slug}><Link to={sv.link}>{sv.name}</Link></li>
        )
      })
      this.setState({svid: svid});
    });
    return 1;
  }

  render() {
    return (
      <div>
        <strong><h1>Próftöflur</h1></strong>
        <nav className="navigation">
          <ul>
            {this.state.svid}
          </ul>
        </nav>
      </div>
    );
  }
}
