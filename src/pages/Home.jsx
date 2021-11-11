import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchCountries()
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
