import React, { Component } from 'react';
import CountryCard from '../components/ CountryCard';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      querySearch: '',
      loading: false,
      findedCountries: [],
    }
  }

  componentDidUpdate(_prevProps, _prevState) {}

  shouldComponentUpdate(_nextProps, nextState) {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { findedCountries } = this.state;
    return (
      <section>
        <input name="querySearch" onChange={() => {}}/>
        <section className="cards-list-container">
          { findedCountries.length > 0 && findedCountries.map((country) => (
            <CountryCard
              name={ country.name.common }
              capital={ country.capital }
              flagUrl={ country.flags.svg }
              code={ country.cca3 }
            />
          ))}
        </section>
      </section>
    )
  }
}

