import React from 'react';

export default class CountryCard extends React.Component {
  render() {
    const { name, capital, flagUrl } = this.props;
    return (
      <article>
        <img src={ flagUrl } alt={`flag of ${name}`} />
        <h2>{name}</h2>
        <h4>{capital}</h4>
      </article>
    )
  }
}
