import React, { Component } from 'react';

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      searchTerm: '',
    };
  }

  // Get the initialized data
  componentDidMount() {
    this.fetchNewsData();
  }

  // Get the data from NewsAPI
  fetchNewsData = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=102ed06f208b4f80a239b2703f4b1d21')
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles });
      })
      .catch(error => {
        console.error('APIRequestError:', error);
      });
  };

  // Handler of changing the search keyword
  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  // Handler of serching
  handleSearch = () => {
    const { articles, searchTerm } = this.state;

    // Filter the article
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Reset the article that is filterd
    this.setState({ articles: filteredArticles });
  };

  // Handler of resetting the serch
  handleResetSearch = () => {
    this.fetchNewsData();
    this.setState({ searchTerm: '' });
  };

  render() {
    const { articles, searchTerm } = this.state;

    return (
      <div>
        <h1>News Feed</h1>
        <div>
          <input
            type="text"
            placeholder="Search for news..."
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.handleSearch}>Search</button>
          <button onClick={this.handleResetSearch}>Reset</button>
        </div>
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

