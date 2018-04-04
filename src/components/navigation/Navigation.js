import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {

  render() {
    return (
      <div>
        <strong><h1>Próftöflur</h1></strong>
        <nav className="navigation">
          <li>this.state.svid[4]</li>
          <li>Menntavísindasvið</li>
          <li>Menntavísindasvið</li>
        </nav>
      </div>
    );
  }
}
