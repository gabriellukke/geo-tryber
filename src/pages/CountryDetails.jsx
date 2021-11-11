import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class CountryDetails extends Component {
  constructor() {
    super();

    this.state = {
      // country: { name: this.props.location.state.name },
    };
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Navbar url={this.props.match.path} />
        <section>Informações sobre {this.props.location.state.name}</section>
      </>
    );
  }
}
