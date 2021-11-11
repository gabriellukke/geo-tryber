import React, { Component } from 'react'
import CountryCard from '../components/ CountryCard';

export default class Home extends Component {
  componentDidMount() {}

  render() {
    const { countries } = this.props;
    return (
      <main>
        <h2>All Countries</h2>
        <section className="cards-list-container">
          { countries.length > 0 && countries.map((country) => (
            <CountryCard
              name={ country.name.common }
              capital={ country.capital }
              flagUrl={ country.flags.svg }
              code={ country.cca3 }
            />
          ))}
        </section>
      </main>
    )
  }
}
