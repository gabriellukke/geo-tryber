import React from 'react';
import { Link } from 'react-router-dom';

export default class CountryCard extends React.Component {
  render() {
    const { name, capital, flagUrl, code } = this.props;
    return (
      <article className="card-container">
        <div className="image">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${flagUrl})`,
              backgroundSize: 'cover',
            }}
          />
        </div>
        <h2>{name}</h2>
        <h4>{capital}</h4>
        <Link to={`/country/${code}`} >Ver detalhes</Link>
      </article>
    )
  }
}
