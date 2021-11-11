import React, { Component } from "react";
import CountryCard from "../components/ CountryCard";
import Navbar from "../components/Navbar";

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const { countries } = this.props;
    return countries.length === 0 ? (
      <span>Loading...</span>
    ) :  (
      <main>
        <Navbar url={this.props.match.path} />
        <h2>All Countries</h2>

        <section className="cards-list-container">
          {countries.length > 0 &&
            countries.map((country) => (
              <CountryCard
                name={country.name.common}
                capital={country.capital}
                flagUrl={country.flags.svg}
                code={country.cca3}
                key={country.cca3}
              />
            ))}
        </section>
      </main>
    );
  }
}
