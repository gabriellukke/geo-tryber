import React from 'react';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="App">
          GEOTRYBER
        </h1>
        <Search />
      </>
    );
  }
}

export default App;
