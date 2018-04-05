import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'

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
      if (data.error === "Not found") {
        this.setState({departments: <Redirect to="/notfound"/>})
      } else {
        let departments = data.school.departments.map((dep) => {
          return(
            <p onClick={() => this.handleClick(dep)}>+ {dep.heading}</p>
          )
        })
        this.setState({school: data.school.heading});
        this.setState({departments: departments});

      }
    });
    return 1;
  }

  handleClick(dep) {
    let tests = dep.tests.map((tes) => {
      return(
        <tr>
          <td>{tes.course}</td>
          <td>{tes.name}</td>
          <td>{tes.students}</td>
          <td>{tes.date}</td>
        </tr>
      )
    })

    function tafla() {
      return(
        <table>
          <tbody>
            {tests}
          </tbody>
        </table>
      )
    }
    this.setState({tests: tafla()});
  }

  render() {

    return (
      <section className="school">
        <h1>{this.state.school}</h1>
        <div>
          {this.state.departments}
          {this.state.tests}
        </div>
        <Link to="/">Heim</Link>
      </section>
    );
  }
}
