import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      allCountries: [],
    };
  }

  fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((allCountries) => this.setState({ allCountries }));
  };

  render() {
    return (
      <>
        <h1>GEOTRYBER</h1>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  fetchCountries={this.fetchCountries}
                  countries={this.state.allCountries}
                />
              )}
            />
            <Route exact path="/search" component={Search} />
            <Route exact path="/country/:code" component={CountryDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
