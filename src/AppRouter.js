// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import Favorites from './components/Favorites';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
