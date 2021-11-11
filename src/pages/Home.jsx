import React, { Component } from 'react'
import CountryCard from '../components/ CountryCard';

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const { countries } = this.props;
    return (
      <section>
        <h2>All Countries</h2>
        { countries.length > 0 && countries.map((country) => (
          <CountryCard
            name={ country.name.common }
            capital={ country.capital }
            flagUrl={ country.flags.svg }
          />
        ))}
      </section>
    )
  }
}
