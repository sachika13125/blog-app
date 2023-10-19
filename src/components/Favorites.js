import React, { Component } from 'react';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  componentDidMount() {
    // Get favorite articles from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({ favorites });
  }

  render() {
    const { favorites } = this.state;

    return (
      <div>
        <h1>Favorites Page</h1>
        <ul>
          {favorites.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read the Deatails
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;