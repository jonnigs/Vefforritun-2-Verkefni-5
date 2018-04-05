import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './School.css';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */

export default class School extends Component {

  constructor() {
    super();
    this.state = {
      school: "",
      departments: [],
      tests: [],
    };
  }

  componentDidMount() {
    fetch('https://vefforritun2-2018-v4-synilausn.herokuapp.com/' + this.props.match.params.schools)
    .then(results => {
      return results.json();
    }).then(data => {
      let departments = data.school.departments.map((dep) => {
        return(
          <button onClick={this.handleClick}>+ {dep.heading}</button>
        )
      })
      this.setState({school: data.school.heading});
      this.setState({departments: departments});
    });
    return 1;
  }

  handleClick() {
    console.log('dep');
  }

  render() {

    return (
      <section className="school">
        <h1>{this.state.school}</h1>
        <div>
          {this.state.departments}
        </div>
        <Link to="/">Heim</Link>
      </section>
    );
  }
}
