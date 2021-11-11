import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      querySearch: '',
      loading: false,
      findedCountries: [],
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    const { querySearch } = this.state;
    if (prevState.querySearch !== querySearch) {
      fetch(`https://restcountries.com/v3.1/name/${querySearch}`)
        .then((data) => data.json())
        .then((findedCountries) => this.setState({ findedCountries }));
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { findedCountries, querySearch } = this.state;
    if (nextState.findedCountries.length !== findedCountries.length && nextState.querySearch !== querySearch) {
      console.log('SHOULD FALSE')
      return false;
    }
    console.log('SHOULD TRUE')
    return true;
  }

  render() {
    return (
      <section>
        <input name="querySearch" onChange={ ({ target: { value, name } }) => {
          this.setState({ [name]: value })
        } }/>
        { this.state.findedCountries.map((c) => <h1>{c.name.common}</h1>) }
      </section>
    )
  }
}

