import React, { Component } from 'react';

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // GET the data from NewsAPI
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=102ed06f208b4f80a239b2703f4b1d21')
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles });
      })
      .catch(error => {
        console.error('APIRequestError:', error);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <h1>News Feed</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read the Detail
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NewsFeed;

