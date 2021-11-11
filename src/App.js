import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      allCountries: [],
    };
  }

  render() {
    return (
      <>
        <h1>GEOTRYBER</h1>
      </>
    );
  }
}

export default App;
