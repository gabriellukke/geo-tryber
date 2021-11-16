import React, { Component } from 'react';

export default class CountryDetails extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      country: {},
    };

    this.findCountry = this.findCountry.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) => this.setState({ countries }));
  }

  componentDidUpdate(_prevProps, prevState) {
    const { countries } = this.state;
    console.log('update', prevState);
    if (prevState.countries.length !== countries.length) {
      console.log('entrou no if');
      this.findCountry();
    }
  }

  findCountry() {
    //const { countries } = this.state;
    const { match } = this.props;
    const { countries } = this.state;
    console.log(countries);
    const country = countries.find(
      (country) => country.cca3 === match.params.code
    );
    console.log(country);
    this.setState({ country });
  }

  render() {
    console.log('Atualizado');
    const { country } = this.state;
    console.log('Filtrado', country);

    return <section>{country.name && <h1>{country.name.common}</h1>}</section>;
  }
}
