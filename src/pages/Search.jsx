import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      querySearch: "",
      loading: false,
      findedCountries: [],
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    const { querySearch } = this.state;
    if (prevState.querySearch !== querySearch && querySearch !== "") {
      fetch(`https://restcountries.com/v3.1/name/${querySearch}`)
        .then((data) => data.json())
        .then((findedCountries) => this.setState({ findedCountries }))
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { findedCountries, querySearch } = this.state;
    if (
      nextState.findedCountries.length !== findedCountries.length &&
      nextState.querySearch !== querySearch
    ) {
      return false;
    }
    return true;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state)
    return (
      <section>
        <Navbar url={this.props.match.path} />
        <h2>Pesquise o nome de um país:</h2>
        <input name="querySearch" onChange={this.handleChange} />
        {this.state.querySearch === "" || !this.state.findedCountries.length? (
          <p>Você deve digitar um nome válido na barra de pesquisa</p>
        ) : (
          this.state.findedCountries.map((country) => (
            <h1 key={country.cca3}>{country.name.common}</h1>
          ))
        )}
      </section>
    );
  }
}
