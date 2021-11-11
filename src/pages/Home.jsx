import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      allCountries: [],
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json())
      .then((allCountries) => this.setState({ allCountries }))
  }

  render() {
    return (
      <section>
        <h2>All Countries</h2>
        {/* countries.map(() => {}) */}
      </section>
    )
  }
}
