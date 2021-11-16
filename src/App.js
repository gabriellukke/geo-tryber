import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import CountryDetails from './pages/CountryDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      allCountries: [],
    };

    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((allCountries) => this.setState({ allCountries }))
  }

  render() {
    const { allCountries } = this.state;
    return (
      <>
        <h1>GEOTRYBER</h1>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } fetchApi={ this.fetchCountries } allCountries={ allCountries } /> }
            />
            <Route path="/search" component={ Search } />
            <Route
              path="/country/:code"
              render={ (props) => <CountryDetails { ...props } countries={ allCountries } fetchApi={ this.fetchCountries } /> }
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
