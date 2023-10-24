import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Home from './components/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/newsfeeds" element={<NewsFeed />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
