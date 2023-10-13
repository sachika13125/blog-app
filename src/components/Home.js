// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(10);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 5); // add each five articles
  }


  return (
    <div>
      <h1>Blog Posts</h1>
      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      )}

<ul>
        {posts.slice(0, visiblePosts).map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post)}>
            {post.title}
          </li>
        ))}
      </ul>

      {visiblePosts < posts.length && (
        <button onClick={loadMorePosts}>Load More</button>
      )}

    </div>
  );
};

export default Home;
